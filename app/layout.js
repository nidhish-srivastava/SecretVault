import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SecretVault | Secure Your Memories",
  description:
    "Unlock the door to your memories and secrets with SecretVault. Store cherished moments, heartfelt letters, and personal narratives in this secure digital sanctuary.",
  keywords: [
    "SecretVault",
    "memory storage",
    "digital vault",
    "personal journal",
    "secure notes",
    "digital memories",
    "time capsule",
  ],
  authors: [{ name: "SecretVault Team", url: "https://reminx.vercel.app" }],
  creator: "SecretVault",
  openGraph: {
    title: "SecretVault | Secure Your Memories",
    description:
      "A secure space to preserve your memories and secrets. Revisit your cherished moments anytime with SecretVault.",
    url: "https://reminx.vercel.app",
    siteName: "SecretVault",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://reminx.vercel.app" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#FF6B00" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
