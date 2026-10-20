# Lennox Group Website

Website for **Lennox Group**, the holding company behind Lennox Digital Labs, TravelVibe, ParkingVibe, Lennox Global Technologies, NexDrive and ALL Protocol.

Lennox Digital Labs has its own site and repository (`dre060/lennox-digital-labs`, www.lennoxdigitallabs.com). This site links to it.

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
- Domain: to be decided. Once it is set, also set `GROUP_URL` on the Lennox Digital Labs Vercel project so its "Lennox Group" links point here.

## Before launch

- Replace `hello@lennoxgroup.com` with the real contact address once the Group domain is chosen.
- The contact form opens the visitor's email app (`mailto:`). Swap in a form backend to collect submissions directly.
