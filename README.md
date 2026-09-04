# JKINFINIT

Premium Engineering Consultancy Website.

Specializing in automotive engineering, engine and product design, electrical/electronics systems, validation, reliability, manufacturing industrialization, and supplier development.

## Tech Stack

- **Framework**: [Next.js 14 / App Router](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Engine**: [Three.js](https://threejs.org/) / [@react-three/fiber](https://r3f.docs.pmnd.rs/) / [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: Decoupled JSON architecture located in `/content`

## Content Architecture

All section copy, navigation items, and founder details can be directly managed and updated within the [`/content`](./content) folder:
- `content/navigation.json` - Company header, brand tagline, section anchors
- `content/home.json` - Hero title, subtitle, CTAs
- `content/about.json` - Focus areas, engineering domains
- `content/capabilities.json` - Capabilities overview
- `content/founder.json` - Founder photo, bio, credentials, LinkedIn
- `content/contact.json` - Contact information

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Production Build & Deployment

```bash
npm run build
```

This repository is configured for seamless zero-config deployment on [Vercel](https://vercel.com).
