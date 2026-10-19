import Link from "next/link";
import { countries, serviceRegions } from "../data/countries";

/**
 * "We work with every country" band — the main on-page signal for international SEO.
 * Links out to each country landing page.
 */
export default function GlobalReach() {
  const facts = [
    {
      icon: "fa-clock",
      title: "Your working hours",
      text: "Calls, demos and support scheduled in your time zone — not ours.",
    },
    {
      icon: "fa-coins",
      title: "Your currency",
      text: "Quotes and invoices in USD, GBP, EUR, AED, CAD, AUD, SGD or INR.",
    },
    {
      icon: "fa-credit-card",
      title: "Local payments",
      text: "Stripe, Klarna, iDEAL, PayTabs, Razorpay, PayFast and more — built in.",
    },
    {
      icon: "fa-language",
      title: "Multi-language",
      text: "Right-to-left layouts, translations and hreflang handled properly.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950/15 to-black">
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-earth-americas text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Worldwide
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            We Build for Clients in Every Country
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything is delivered online, so your location changes the
            currency, the payment gateway and the meeting time — never the
            quality of the build.
          </p>
        </div>

        {/* Regions */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceRegions.map((r) => (
            <span
              key={r}
              className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300"
            >
              {r}
            </span>
          ))}
        </div>

        {/* Facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {facts.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-black/40 p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/40 to-pink-600/30 flex items-center justify-center mb-3">
                <i className={`fas ${f.icon} text-purple-200 text-sm`}></i>
              </div>
              <h3 className="text-white font-semibold text-sm">{f.title}</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        {/* Country links */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <h3 className="text-white font-semibold">
              Countries we work in most
            </h3>
            <Link
              href="/web-development-company"
              className="text-xs text-purple-400 hover:text-purple-300"
            >
              View all {countries.length} countries
              <i className="fas fa-arrow-right text-[10px] ml-1.5"></i>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/web-development-company/${c.slug}`}
                className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 hover:text-purple-200 hover:border-purple-500/50 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
