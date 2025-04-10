# CryptoHedgeFund Landing Page

A modern, responsive landing page for CryptoHedgeFund - an AI-powered crypto investment platform.

## Features

- Modern React with TypeScript implementation
- Responsive design using Tailwind CSS
- Interactive components and animations
- Mobile-friendly navigation
- SEO optimized structure

## Project Structure

```
crypto-hedge-fund-landing/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── TechnologySection.tsx
│   │       ├── TokenomicsSection.tsx
│   │       ├── RoadmapSection.tsx
│   │       └── ContactSection.tsx
│   ├── assets/
│   │   └── images and other static files
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/crypto-hedge-fund-landing.git
cd crypto-hedge-fund-landing
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the landing page in your browser.

## Build for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Deployment

The landing page can be deployed to various hosting platforms:

### Netlify

1. Create a new site in Netlify
2. Connect your GitHub repository
3. Set the build command to `npm run build` or `yarn build`
4. Set the publish directory to `build`

### Vercel

1. Import your repository on Vercel
2. Vercel will detect React and set up the build automatically
3. Deploy

## Integration with Application

This landing page is designed to work alongside the CryptoHedgeFund application. The main application is accessible at `https://app.cryptohedgefund.com`, while this landing page serves as the marketing site at the root domain `https://cryptohedgefund.com`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please reach out to the team at team@cryptohedgefund.com