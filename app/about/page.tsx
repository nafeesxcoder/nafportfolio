import Link from "next/link";
import Script from "next/script";
import { Stars } from "../components/Stars";
import {
  company,
  stats,
  differentiators,
  engagementModels,
} from "../data/site";
import { countries } from "../data/countries";
import { services } from "../data/services";
import {
  pageMeta,
  breadcrumbSchema,
  organizationSchema,
  jsonLd,
} from "../lib/seo";

export const metadata = pageMeta({
  title: "About Us — Web & Mobile App Development Company",
  description:
    "Unique Web Layer is a remote-first web and mobile app development company working with clients in 20+ countries. Learn how we work, what we stand for and who we build for.",
  path: "/about",
  keywords: [
    "about unique web layer",
    "web development company profile",
    "remote development team",
    "offshore development partner",
  ],
});

const teamFunctions = [
  {
    icon: "fa-pen-ruler",
    role: "Design",
    text: "UI/UX designers who work in Figma and hand over screens that are ready to build, not just pretty pictures.",
  },
  {
    icon: "fa-code",
    role: "Web Development",
    text: "React, Next.js and Node.js developers building marketing sites, stores and web applications.",
  },
  {
    icon: "fa-mobile-screen-button",
    role: "Mobile",
    text: "React Native and Flutter developers shipping to the Play Store and App Store from one codebase.",
  },
  {
    icon: "fa-magnifying-glass-chart",
    role: "SEO & Growth",
    text: "Technical SEO, content and analytics — so the thing we build actually gets found.",
  },
  {
    icon: "fa-list-check",
    role: "Project Management",
    text: "A single point of contact per project, weekly demos and written updates you can forward to your team.",
  },
  {
    icon: "fa-headset",
    role: "Support",
    text: "Post-launch maintenance, monitoring and a developer on call through monthly plans.",
  },
];

const values = [
  {
    icon: "fa-eye",
    title: "Say the real number",
    text: "Quotes and timelines are written down before work starts. If something will take longer, you hear it the week it happens, not at the deadline.",
  },
  {
    icon: "fa-key",
    title: "You own everything",
    text: "Source code, repository, hosting accounts and domains stay in your name. Nothing we build depends on you staying with us.",
  },
  {
    icon: "fa-ruler-combined",
    title: "Build it properly",
    text: "Performance, accessibility, security and SEO are part of the build, not upsells added after launch.",
  },
  {
    icon: "fa-comments",
    title: "Talk like humans",
    text: "No jargon walls, no account-manager relay. You speak to the people doing the work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(organizationSchema)}
      />
      <Script
        id="about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />

      <main className="min-h-screen bg-black">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black" />
          <Stars />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
                <i className="fas fa-building text-purple-400 text-sm"></i>
                <span className="text-sm font-medium text-purple-300">
                  About {company.name}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-purple-300 bg-clip-text text-transparent leading-tight">
                A development company built
                <br className="hidden sm:block" /> for remote delivery
              </h1>
              <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
                {company.name} designs, builds and ranks digital products for
                businesses around the world. Websites, Android and iOS apps,
                custom software and the SEO that puts them in front of
                customers — handled by one team, under one contract, with a
                fixed quote before anything starts.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-6 text-center"
                >
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {s.value}
                    {s.suffix}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="rounded-3xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-7 md:p-9">
                <h2 className="text-2xl font-bold text-white mb-4">
                  How we got here
                </h2>
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p>
                    We started in {company.founded} building websites for local
                    businesses. The work spread by referral — first to agencies
                    that needed a reliable development partner, then to clients
                    abroad who wanted the same quality without an in-house team.
                  </p>
                  <p>
                    Two things changed as we grew. Clients stopped asking only
                    for websites and started asking for apps, dashboards and
                    rankings too — so we built those capabilities in-house
                    rather than farming them out. And since nearly every client
                    was in a different country, we built the company around
                    remote delivery: written scopes, weekly demos, staging links
                    and time-zone aware support.
                  </p>
                  <p>
                    That is still how it runs today. There is no sales layer
                    between you and the people writing the code.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-7 md:p-9">
                <h2 className="text-2xl font-bold text-white mb-4">
                  What we do
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      icon: "fa-globe",
                      t: "Websites",
                      d: "Business sites, e-commerce, landing pages, portals and SaaS platforms on Next.js and the MERN stack.",
                    },
                    {
                      icon: "fa-mobile-screen-button",
                      t: "Mobile apps",
                      d: "React Native and Flutter apps for Android and iOS, including backend, admin panel and store launch.",
                    },
                    {
                      icon: "fa-gears",
                      t: "Custom software",
                      d: "CRMs, ERPs, internal tools and integrations that match how your business actually works.",
                    },
                    {
                      icon: "fa-chart-line",
                      t: "SEO & growth",
                      d: "Technical, on-page, local and international SEO with monthly reporting on rankings and leads.",
                    },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex gap-3 p-3 rounded-xl bg-white/3 border border-white/10"
                    >
                      <div className="w-9 h-9 rounded-lg bg-linear-to-br from-purple-600/40 to-pink-600/30 flex items-center justify-center shrink-0">
                        <i
                          className={`fas ${item.icon} text-purple-200 text-xs`}
                        ></i>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">
                          {item.t}
                        </div>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 mt-5"
                >
                  All {services.length} services
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>

            {/* Team functions */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  How the team is organised
                </h2>
                <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
                  Small, senior and remote. Every project gets the functions it
                  needs — not a fixed headcount you pay for regardless.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {teamFunctions.map((t) => (
                  <div
                    key={t.role}
                    className="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                      <i className={`fas ${t.icon} text-white text-sm`}></i>
                    </div>
                    <h3 className="text-white font-semibold">{t.role}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  What we hold to
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <i className={`fas ${v.icon} text-purple-400`}></i>
                      <h3 className="text-white font-semibold">{v.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Why clients stay
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {differentiators.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-2xl border border-white/10 bg-white/3 p-6"
                  >
                    <i
                      className={`fas ${d.icon} text-purple-400 text-lg mb-4 block`}
                    ></i>
                    <h3 className="text-white font-semibold text-sm">
                      {d.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement + global */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="rounded-3xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-7">
                <h2 className="text-xl font-bold text-white mb-5">
                  Ways to work with us
                </h2>
                <div className="space-y-4">
                  {engagementModels.map((m) => (
                    <div key={m.title}>
                      <div className="flex items-center gap-2 text-white text-sm font-semibold">
                        <i className={`fas ${m.icon} text-purple-400 text-xs`}></i>
                        {m.title}
                      </div>
                      <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-linear-to-br from-purple-900/20 to-black/40 p-7">
                <h2 className="text-xl font-bold text-white mb-3">
                  Where our clients are
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  We take projects from anywhere. These are the markets we work
                  in most — each has its own page covering currency, payment
                  gateways, time zones and search targeting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/web-development-company/${c.slug}`}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/4 border border-white/10 text-gray-300 hover:text-purple-200 hover:border-purple-500/50 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact strip */}
            <div className="rounded-3xl border border-purple-500/25 bg-linear-to-br from-purple-900/25 to-black/40 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Let&apos;s talk about your project
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
                Email{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-purple-300 hover:text-purple-200"
                >
                  {company.email}
                </a>{" "}
                or send the requirements through the form. Replies usually
                within six hours, any time zone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
                <Link href="/contact">
                  <button className="px-7 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                    Contact Us
                  </button>
                </Link>
                <Link href="/work">
                  <button className="px-7 py-3 rounded-full border border-purple-400/50 text-white text-sm font-semibold hover:bg-purple-600/10 transition-colors w-full sm:w-auto">
                    View Our Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
