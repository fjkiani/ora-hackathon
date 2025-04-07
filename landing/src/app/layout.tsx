import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sans',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "AI-Powered Crypto Hedge Fund | Next Generation DeFi Platform",
  description: "Our AI-powered crypto hedge fund delivers risk-optimized returns through advanced machine learning, ORA integration, and institutional-grade risk management.",
  keywords: "crypto, hedge fund, AI, DeFi, ORA, investment, blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body className="bg-gray-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
