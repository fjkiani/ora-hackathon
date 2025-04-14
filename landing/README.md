# DefiKSA Landing Page

A modern, responsive landing page for DefiKSA - an AI-powered, Sharia-compliant financial platform tailored for the KSA market.

Built with [Next.js](https://nextjs.org/) (App Router) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Modern Stack:** Next.js 14+ with React & TypeScript.
- **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices using Tailwind CSS.
- **Multi-Page Structure:** Clear navigation through dedicated pages for Features, Technology, AI Agents, Platform, Tokenomics, Roadmap, Team, About, and Whitepaper.
- **Sharia-Compliant Focus:** Messaging and features tailored for the KSA market and Islamic finance principles.
- **AI Agent Showcase:** Highlights the capabilities of specialized AI agents.
- **Interactive Elements:** Smooth transitions and potentially animations (using Framer Motion where applicable).
- **SEO Friendly:** Leverages Next.js features for search engine optimization.
- **Verifiable Technology:** Built upon the principles of the ORA Framework (though details might be in the main app/whitepaper).

## Project Structure

```
landing/
├── public/             # Static assets (favicon, images, fonts)
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── (pages)/    # Route groups for each page (e.g., /about, /features)
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── features/
│   │   │   │   └── page.tsx
│   │   │   ├── ... (other pages)
│   │   │   └── layout.tsx  # Shared layout (Header, Footer)
│   │   └── page.tsx      # Home page (/
│   │   └── globals.css # Global styles
│   ├── components/     # Reusable components
│   │   ├── sections/   # Page sections (e.g., FeaturesSection.tsx)
│   │   ├── ui/         # General UI elements (Buttons, Cards - if any)
│   │   └── MobileMenu.tsx
│   │   └── ...
│   └── data/           # Static data (e.g., whitepaperData.ts)
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  **Navigate to the landing directory:**
    ```bash
    cd landing
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

## Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create a `.next` folder with the production build.

## Deployment

This Next.js application is ready for deployment on platforms like:

- **Vercel:** (Recommended) Connect your Git repository for automatic builds and deployments.
- **Netlify:** Configure build command (`npm run build`) and publish directory (`.next`).
- Other Node.js hosting platforms.

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Purpose

This landing page serves as the primary marketing website for the DefiKSA platform. It aims to introduce the project, highlight its key features and benefits (especially its Sharia compliance and AI capabilities), showcase the team, and direct users to the main application and the whitepaper.
