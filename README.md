# Scalidor website

A complete Next.js App Router website based on the supplied Scalidor content, electric-blue palette, and numbered technical-grid references.

## Start locally

Requires Node.js 22 or later and npm.

```bash
cd scalidor
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, replace the copy command with:

```powershell
Copy-Item .env.example .env.local
```

Open http://localhost:3000. The site works without SMTP configuration; the contact form will truthfully report that delivery is unavailable until email settings are supplied. It offers a local inquiry-copy download if delivery cannot be confirmed.

## Production

1. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or the hosting environment to your actual HTTPS origin, with no trailing slash. This is used for metadata, sitemap URLs, and contact request validation. Set it before building.
2. Configure the SMTP values below.
3. Run:

```bash
npm run typecheck
npm run build
npm run start
```

Deploy to a host that supports a Node.js Next.js application, such as Vercel, or your own Node.js server behind HTTPS. The contact endpoint requires a Node.js runtime; this project is not a static export and is not a Cloudflare Worker bundle. Port 3000 is the default.

## Connect the contact form

Use credentials for a real business mailbox or transactional email provider. Never commit `.env.local` or place SMTP credentials in a variable prefixed with `NEXT_PUBLIC_`.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | Your SMTP provider's hostname |
| `SMTP_PORT` | Usually `587` with STARTTLS or `465` with TLS |
| `SMTP_SECURE` | `false` for port 587; `true` for port 465 |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password or provider app password |
| `EMAIL_FROM` | A sender address verified by your provider |
| `CONTACT_TO` | Your business inbox for inquiries |

Use the provider's actual settings. The route requires encrypted SMTP, preserves the visitor's address as `Reply-To`, and never uses visitor input as the sender or recipient. Set up sender-domain verification, SPF, and DKIM with your provider.

After configuration, submit a real inquiry and confirm receipt and reply behavior in your inbox. A successful response means the SMTP server accepted the message, not that final inbox delivery is guaranteed. Delivery to your actual mailbox cannot be verified without your settings.

The endpoint validates all fields, consent, origin, content type, and request size. It includes a honeypot and per-process rate limits. For multi-instance deployments, configure shared rate limits or your hosting provider's ingress/WAF controls. There is no database, authentication, analytics, or external API needed for the presentation pages.

## Pages

- Home: `/`
- About: `/about`
- Services: `/services`
- Individual services: `/services/saas-development`, `/services/ai-automation`, `/services/custom-software`, `/services/product-engineering`, `/services/web-applications`, `/services/mobile-applications`, `/services/ui-ux-design`
- Products: `/products`
- Contact: `/contact`
- Privacy, terms, and cookies: `/privacy`, `/terms`, `/cookies`

The optional Insights section is omitted until real articles are available, as recommended in the supplied content. Product development labels and founder names follow that content. No customer logos, performance metrics, executive titles, launch dates, or testimonials have been invented.

## Edit content and branding

- Shared services, founders, industries, and descriptions: `lib/content.ts`.
- Page sections: `app/**/page.tsx`.
- Palette, layout, typography, and responsive rules: `app/globals.css`.
- Navigation and footer: `components/navigation.tsx`, `components/shared.tsx`.
- Contact delivery: `app/api/contact/route.ts`.
- Favicon: `public/favicon.svg`.

Typography uses locally bundled Manrope and IBM Plex Mono; visitors do not fetch fonts from Google. The small scaling-bars wordmark and favicon are an interim geometric identity because a separate Scalidor logo file was not included with this request. Replace them with the official logo when available.

The server illustration is original generated artwork. Real-estate interface and workflow visuals are expressly marked as concepts, not active product screens.

## Verification

TypeScript validation and the optimized production build pass. Public routes, local image/font references, security response headers, and invalid contact-request behavior are checked against the running production server. Browser-based visual QA was unavailable in this environment; inspect desktop, mobile, navigation, and the form on your target devices before public launch. No claim of pixel-perfect reproduction is made.

## License notes

Next.js and React use MIT licenses, Lucide uses ISC, Nodemailer uses MIT-0, Zod uses MIT, and the bundled fonts use the SIL Open Font License. See `THIRD_PARTY_NOTICES.md` and package licenses for details.
