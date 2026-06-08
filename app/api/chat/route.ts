import { NextRequest, NextResponse } from "next/server";
import pricingData from "@/data/pricing.json";
import businessData from "@/data/business.json";
import faqData from "@/data/faq.json";
import responsesData from "@/data/responses.json";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Get services from pricing.json
const servicesList = (pricingData as any).services || [];

// Get business info from business.json
const businessInfo = {
  name: (businessData as any).company?.name || "Unique Web Layer",
  email: (businessData as any).contact?.email || "info@uniqueweblayer.com",
  phone: (businessData as any).contact?.phone || "+91 (740) 923-3994",
  hours: (businessData as any).hours 
    ? `${(businessData as any).hours.monday_friday?.open || "9:00"}-${(businessData as any).hours.monday_friday?.close || "19:00"} Mon-Fri`
    : "Mon-Fri 9am-7pm, Sat 10am-4pm",
  serviceArea: "Delhi NCR, India & Worldwide",
};

// Get FAQs from faq.json
const faqs = (faqData as any).faqs || [];

// Helper functions
const getAllServicesText = () => {
  return servicesList.map((s: any) => `${s.emoji} ${s.name}: ${s.priceDisplay || s.price} (${s.delivery})`).join("\n");
};

const getFAQText = () => {
  if (!faqs || faqs.length === 0) return "";
  return faqs.slice(0, 5).map((f: any) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");
};

const findService = (message: string) => {
  const msg = message.toLowerCase();
  for (const service of servicesList) {
    if (msg.includes(service.name.toLowerCase()) || 
        msg.includes(service.slug) ||
        msg.includes(service.name.toLowerCase().split(" ")[0])) {
      return service;
    }
  }
  return null;
};

// Build system prompt with FAQs
function buildSystemPrompt() {
  const servicesText = getAllServicesText();
  const faqText = getFAQText();
  
  return `You are "WebLayer AI", an AI customer support assistant for ${businessInfo.name}.

ABOUT:
- Full-service web development agency
- Services: ${servicesList.map((s: any) => s.name).join(", ")}
- Contact: ${businessInfo.email} | ${businessInfo.phone}
- Hours: ${businessInfo.hours}

🌐 ALL SERVICES WITH PRICES (USE ONLY THESE):
${servicesText}

${faqText ? `📋 FREQUENTLY ASKED QUESTIONS:\n${faqText}\n` : ""}

RULES:
- NEVER invent prices. Use ONLY exact prices from above
- Keep responses short (2-3 sentences)
- Be friendly and professional
- If user asks a question from FAQs, use those answers
- If user wants to start a project, ask for name, email, and service type`;
}

// Fallback responses using data from JSON files
function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();
  
  // Check FAQs first
  for (const faq of faqs) {
    const question = faq.question.toLowerCase();
    if (msg.includes(question) || 
        question.includes(msg) ||
        (msg.includes("refund") && question.includes("refund")) ||
        (msg.includes("timeline") && question.includes("timeline")) ||
        (msg.includes("payment") && question.includes("payment"))) {
      return `📋 **FAQ:** ${faq.question}\n\n${faq.answer}`;
    }
  }
  
  const service = findService(message);
  if (service) {
    return `${service.emoji} **${service.name}**
💰 Price: ${service.priceDisplay || service.price}
⏱️ Delivery: ${service.delivery}

📅 Ready to get started? Click the "Start Project" button above!`;
  }
  
  if (msg.includes("services") || msg.includes("offer")) {
    return `🌐 **Our Services:**

${getAllServicesText()}

Which service interests you?`;
  }
  
  if (msg.includes("price") || msg.includes("cost")) {
    return `💰 **Our Pricing:**

${getAllServicesText()}

Which service would you like to know more about?`;
  }
  
  if (msg.includes("start") || msg.includes("hire") || msg.includes("project")) {
    return `📅 **Start Your Project:**

Please share:
1. Your name
2. Email address
3. Service type
4. Budget range

📧 ${businessInfo.email}
📞 ${businessInfo.phone}`;
  }
  
  if (msg.includes("hi") || msg.includes("hello")) {
    return `👋 Namaste! Welcome to ${businessInfo.name}!

${getAllServicesText()}

What would you like to know?`;
  }
  
  // Get from responses.json if available
  const fallbackMsg = (responsesData as any)?.fallback;
  if (fallbackMsg) {
    return fallbackMsg;
  }
  
  return `✨ Thanks for reaching out to ${businessInfo.name}!

${getAllServicesText()}

What can I help you with today? Just tell me the service name!`;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ 
        reply: `👋 Hello! Welcome to ${businessInfo.name}. We build ${servicesList.length} types of websites. Which service are you interested in?`, 
        success: true 
      });
    }

    const fullMessages = [
      { role: "system", content: buildSystemPrompt() },
      ...messages,
    ];

    let reply = "";

    // Try Groq API first
    if (GROQ_API_KEY && GROQ_API_KEY !== "") {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: fullMessages.slice(-4),
            temperature: 0.3,
            max_tokens: 300,
          }),
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply, success: true });
          }
        }
      } catch (error) {
        console.error("Groq API error:", error);
      }
    }
    
    // Fallback to local responses
    const lastMessage = messages[messages.length - 1]?.content || "";
    reply = getFallbackResponse(lastMessage);
    
    return NextResponse.json({ reply, success: true });
    
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: `✨ Sorry, I'm having trouble. Please email ${businessInfo.email} for assistance.`, success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "active",
    hasApiKey: !!GROQ_API_KEY,
    services: servicesList.length,
    faqs: faqs.length,
    business: businessInfo.name,
    message: "Unique Web Layer AI Customer Support API is running"
  });
}