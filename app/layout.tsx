import type React from "react";
import type { Metadata } from "next";
import { Inter, Fira_Code, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${firaCode.variable} ${inconsolata.variable} font-mono`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Ajnash - AI Driven Software Engineer & SaaS Developer",
  icons: {
    icon: "/favicon.ico", 
  },
  description:
    "AI Driven Software Engineer and SaaS Developer with 6+ years of expertise in building scalable microservices and AI-integrated web applications.",
};
