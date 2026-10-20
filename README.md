# Lennox Digital Labs Website

Website for **Lennox Digital Labs**, the technology studio of Lennox Group: www.lennoxdigitallabs.com

Static site built with [Vite](https://vitejs.dev/): `index.html`, a stylesheet (`src/styles/global.css`) and a small script (`src/index.js`) for the mobile menu, scroll reveals and the contact form.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the build
```

## Deployment (Vercel)

- Framework: Vite · Build command: `npm run build` · Output directory: `dist`
- Domains: `www.lennoxdigitallabs.com` (primary) and `lennoxdigitallabs.com` (redirects to www)

## Links to the Lennox Group site

Set the `GROUP_URL` environment variable in Vercel (for example `https://www.example.com`) to the Lennox Group website address. Until it is set, the "Lennox Group" links are left out of the build.

## Before launch

- Make sure the `hello@lennoxdigitallabs.com` mailbox exists, or change the address in `index.html`.
- The contact form opens the visitor's email app (`mailto:`). Swap in a form backend to collect submissions directly.
