"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Service {
  name: string;
  price: number;
  priceDisplay: string;
  delivery: string;
  emoji: string;
  slug: string;
}

// Booking URL
const BOOKING_URL = "/contact";

// This will be populated from API on mount
let servicesCache: Service[] = [];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome1",
      role: "assistant",
      content:
        "✨ Namaste! I'm WebLayer AI, your virtual assistant for Unique Web Layer.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isServicesLoaded, setIsServicesLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch services from API on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/chat");
        const data = await response.json();

        if (data.services && data.services.length > 0) {
          setServices(data.services);
          servicesCache = data.services;

          // Update welcome message with services
          const servicesText = getServicesText(data.services);
          setMessages([
            {
              id: "welcome1",
              role: "assistant",
              content:
                "✨ Namaste! I'm WebLayer AI, your virtual assistant for Unique Web Layer.",
              timestamp: new Date(),
            },
            {
              id: "welcome2",
              role: "assistant",
              content: `💡 **I can help with these ${data.services.length} website services:**

${servicesText}

📅 **Ready to start?** Click the button below!

What would you like to know?`,
              timestamp: new Date(),
            },
          ]);
          setIsServicesLoaded(true);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
        // Fallback welcome message
        setMessages([
          {
            id: "welcome1",
            role: "assistant",
            content:
              "✨ Namaste! I'm WebLayer AI, your virtual assistant for Unique Web Layer.",
            timestamp: new Date(),
          },
          {
            id: "welcome2",
            role: "assistant",
            content: `💡 **I can help with website development services.**

📅 **Ready to start?** Click the button below!

What would you like to know?`,
            timestamp: new Date(),
          },
        ]);
        setIsServicesLoaded(true);
      }
    };

    fetchServices();
  }, []);

  const getServicesText = (servicesList: Service[]) => {
    return servicesList
      .map((s) => `${s.emoji} ${s.name}: ${s.priceDisplay} (${s.delivery})`)
      .join("\n");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || getFallbackResponse(input, services),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: getFallbackResponse(input, services),
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (
    message: string,
    servicesList: Service[],
  ): string => {
    const msg = message.toLowerCase();

    // Booking/Start Project
    if (
      msg.includes("book") ||
      msg.includes("start") ||
      msg.includes("hire") ||
      msg.includes("project")
    ) {
      return `📅 **Start Your Project with Unique Web Layer**

Please click the **"Start Project"** button below to fill out our inquiry form!

📞 Need help? Call us: +91 (740) 923-3994
✉️ Email: info@uniqueweblayer.com`;
    }

    // Check each service from API data
    for (const service of servicesList) {
      if (
        msg.includes(service.name.toLowerCase()) ||
        msg.includes(service.slug) ||
        msg.includes(service.name.toLowerCase().split(" ")[0])
      ) {
        return `✨ **${service.name}**
💰 Price: ${service.priceDisplay}
⏱️ Delivery: ${service.delivery}

**Key Features included:**
• Custom design
• Fully responsive
• SEO optimized
• Mobile friendly
• Free support

📅 Ready to get started? Click the "Start Project" button above!`;
      }
    }

    // All services
    if (
      msg.includes("services") ||
      msg.includes("offer") ||
      msg.includes("what do you")
    ) {
      const servicesText = getServicesText(servicesList);
      return `🌐 **Our ${servicesList.length} Website Services:**

${servicesText}

Which service interests you? I can give you more details!`;
    }

    // Pricing
    if (
      msg.includes("price") ||
      msg.includes("cost") ||
      msg.includes("kitne")
    ) {
      const servicesText = getServicesText(servicesList);
      return `💰 **Our Pricing:**

${servicesText}

Which service would you like to know more about?`;
    }

    // Greeting
    if (
      msg.includes("hi") ||
      msg.includes("hello") ||
      msg.includes("hey") ||
      msg.includes("namaste")
    ) {
      const servicesText = getServicesText(servicesList);
      return `👋 Namaste! Welcome to Unique Web Layer!

**Our ${servicesList.length} Website Services:**
${servicesText}

📅 **Click the Start Project button to begin!**

What would you like to know about our services?`;
    }

    // Default
    const servicesText = getServicesText(servicesList);
    return `✨ Thanks for reaching out to Unique Web Layer!

**Our ${servicesList.length} Website Services:**
${servicesText}

📅 **Click the Start Project button to get started!**

What can I help you with today? Just tell me the service name!`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const openBookingPage = () => {
    window.location.href = BOOKING_URL;
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full p-3 shadow-2xl hover:shadow-lg transition-all duration-300 z-[9999] flex items-center gap-2 group animate-bounce-in"
        >
          <img
            src="/robot1.png"
            alt="Robot Assistant"
            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const span = document.createElement("span");
                span.className = "text-lg";
                span.textContent = "🤖";
                parent.appendChild(span);
              }
            }}
          />
          <span className="hidden group-hover:inline text-sm font-medium whitespace-nowrap">
            Need Help?
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[420px] bg-white rounded-xl shadow-2xl flex flex-col z-[9999] border border-gray-200 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <img
                  src="/robot1.png"
                  alt="Robot Assistant"
                  className="w-4 h-4 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const span = document.createElement("span");
                      span.className = "text-sm";
                      span.textContent = "🤖";
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">WebLayer AI</h3>
                <p className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Reply in 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg transition"
            >
              ✕
            </button>
          </div>

          {/* Animated Booking Button */}
          <div className="px-3 pt-3 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 animate-bounce-arrow">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            <button
              onClick={openBookingPage}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl text-sm font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow-purple shadow-lg"
            >
              <span className="text-lg">🚀</span>
              START PROJECT - GET QUOTE
              <span className="text-lg animate-slide-right">→</span>
            </button>

            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 mt-2">
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-1.5 text-xs ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-0.5" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white rounded-xl rounded-bl-none px-3 py-2 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-typing-dot" />
                    <span
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-typing-dot"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-typing-dot"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all bg-white text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg px-3 py-1.5 text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all"
            >
              Send
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-[9px] text-gray-400 py-1.5 bg-white border-t">
            🤖 AI Assistant •
            <button
              onClick={openBookingPage}
              className="text-purple-600 underline ml-1 font-medium hover:text-purple-800 transition"
            >
              Start Project
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        .animate-typing-dot {
          animation: typing-dot 0.8s infinite;
        }
        .animate-pulse-glow-purple {
          animation: pulse-glow-purple 2s infinite;
        }
        .animate-slide-right {
          animation: slide-right 1s ease-in-out infinite;
        }
        .animate-bounce-arrow {
          animation: bounce-arrow 1s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 2.5s infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes typing-dot {
          0%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }
        @keyframes pulse-glow-purple {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
            transform: scale(1.02);
          }
        }
        @keyframes slide-right {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        @keyframes bounce-arrow {
          0%,
          100% {
            transform: translate(-50%, 0);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, 8px);
            opacity: 1;
          }
        }
        @keyframes shine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}

export default ChatBot;
