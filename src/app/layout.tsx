import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Ettahairy Mohamed – Développeur Full-Stack & Mobile";
const description =
  "Portfolio de Ettahairy Mohamed, développeur Full-Stack & Mobile (Flutter, Spring Boot, Angular), en Master 2 à l'Université de Rouen et à la recherche d'un stage de fin d'études (PFE).";

export const metadata: Metadata = {
  metadataBase: new URL("https://ettahairy-mohamed.github.io/MYportfolio/"),
  title,
  description,
  keywords:
    "Développeur Full-Stack, Développeur Mobile, Flutter, Spring Boot, Angular, stage PFE, Rouen, portfolio, Ettahairy Mohamed",
  authors: [{ name: "Ettahairy Mohamed" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/portrait.jpg", width: 600, height: 600 }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/portrait.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen">
        <Providers>
          <ScrollProgress />
          <Navigation />
          <main className="w-full overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
