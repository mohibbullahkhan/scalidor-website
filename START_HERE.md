# Start your Scalidor website

1. Extract this ZIP.
2. Open a terminal inside the `scalidor` folder.
3. Install Node.js 22 or later if needed.
4. Run:

```bash
npm ci
```

5. Copy `.env.example` to `.env.local`. On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

On Linux/macOS:

```bash
cp .env.example .env.local
```

6. Start the website:

```bash
npm run dev
```

7. Open http://localhost:3000.

The website pages work immediately. To deliver contact inquiries, fill in the SMTP and mailbox values in `.env.local` using your email provider’s settings. See `README.md`. No test or placeholder mailbox has been published.

Before deployment, set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain and run:

```bash
npm run typecheck
npm run build
npm run start
```

Use hosting that supports Next.js with Node.js. The contact form needs its server endpoint.

Design notes: the site uses your seven-color palette, Manrope headings/body, IBM Plex Mono accents, Lucide icons, numbered rails, technical grids, light/dark sections, and an original server illustration. The brand mark is a simple interim scaling motif; replace it with your official logo.

All five primary pages and seven service detail pages are included. Insights is intentionally omitted until articles are available. Setup, editing, email configuration, deployment notes, and verification limitations are in `README.md`.
