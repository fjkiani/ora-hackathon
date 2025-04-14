import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import MainLayoutClient from "@/components/MainLayoutClient";
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
  title: "DefiKSA | Intelligent Sharia-Compliant Financial Solutions",
  description: "Discover DefiKSA: Leveraging AI and blockchain for secure, transparent, and Sharia-compliant financial solutions tailored for the KSA market.",
  keywords: "DefiKSA, Sharia compliant, AI finance, KSA finance, blockchain, financial solutions, Islamic finance, Saudi Arabia, features, technology, agents, tokenomics, roadmap, team, about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body className="bg-gray-900 text-white antialiased">
        <MainLayoutClient>{children}</MainLayoutClient>
      </body>
    </html>
  );
}
