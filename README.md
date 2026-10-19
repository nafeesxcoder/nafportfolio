# Unique Web Layer — Company Website

Next.js 15 company site for **Unique Web Layer**: web development, mobile app
development (React Native / Flutter), custom software and SEO — positioned for
clients in every country.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit what

| What you want to change | File |
| --- | --- |
| Company name, contact, stats, process, tech stack, industries | `app/data/site.ts` |
| Services (adds them to header, footer, /services and sitemap) | `app/data/services.ts` |
| Portfolio projects on `/work` and the home page | `app/data/projects.ts` |
| Country landing pages (`/web-development-company/<country>`) | `app/data/countries.ts` |
| FAQ (page, home-page schema and the chatbot) | `app/data/faq.json` |
| Chatbot pricing answers | `app/data/pricing.json` |
| SEO defaults, schema, hreflang | `app/layout.tsx` + `app/lib/seo.ts` |

### Add a portfolio project

1. Drop the screenshot into `/public`, e.g. `public/myproject.png`
2. Open `app/data/projects.ts`
3. Fill in one of the four `Project Title 1-4` templates (or copy a block):
   `title`, `category`, `type` (`web` | `app` | `seo`), `description`,
   `image`, `tags`, `liveLink`
4. Add `featured: true` to also show it on the home page

### Add a service

Add an entry to `app/data/services.ts`, then create
`app/services/<slug>/page.tsx` (copy `app/services/seo/page.tsx` as a template).
The header, footer, services page and sitemap pick it up automatically.

### Add a country

Add an entry to `app/data/countries.ts`. The landing page, its metadata, FAQ
schema and the sitemap entry are generated for you.

## Social share cards

The Open Graph images are **pre-rendered JPEGs in `/public/og`** — `default.jpg`
for the site and one per country (`united-states.jpg` …).

They are static on purpose: `next/og` (dynamic image generation) crashes during
`next build` on Windows in Next 15.2.x, and these cards only change when the
company name or country list changes. If you add a country to
`app/data/countries.ts` without adding a matching image, that page falls back to
`default.jpg` — nothing breaks.

## Dark / light mode

The site is authored dark-first. The light theme works by redefining Tailwind's
colour variables under `:root[data-theme="light"]` in `app/globals.css`, so
`bg-black` / `text-white` flip automatically instead of needing hundreds of
`dark:` classes. If a section looks wrong on light, adjust the variable rather
than the component.

- Toggle: `app/components/ThemeToggle.tsx` (in the header)
- First visit follows the OS setting, then the choice is saved in localStorage
- An inline script in `app/layout.tsx` applies the theme before first paint

## SEO notes

- `metadataBase` and all canonical URLs come from `SITE_URL` in `app/data/site.ts`
- JSON-LD: Organization, ProfessionalService (worldwide `areaServed`), WebSite,
  Service, FAQPage, HowTo, BreadcrumbList and per-country Service schema
- hreflang alternates for en-US / GB / CA / AU / IN / AE / SG / ZA / IE / NZ + x-default
- `app/sitemap.ts` and `app/robots.ts` are generated from the data files
- Add your Google Search Console code to `metadata.verification` in `app/layout.tsx`

## Environment variables

```
RESEND_API_KEY=            # contact form email (resend.com)
CONTACT_TO_EMAIL=          # where quote requests land
TURNSTILE_SECRET_KEY=      # Cloudflare Turnstile (bot check)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

The contact API fails gracefully when `RESEND_API_KEY` is missing — the build
no longer breaks without it.

## Before going live

- Replace the placeholder figures in `stats` (`app/data/site.ts`) with your real numbers
- Replace the testimonials in `app/components/Testimonials.tsx` with real client feedback
- Fill in the four project templates in `app/data/projects.ts`
