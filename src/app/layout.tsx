import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Polices auto-hébergées (licence SIL OFL 1.1, voir ./fonts/LICENSE-*.txt) :
// aucun téléchargement chez Google au build ni chez les visiteurs.
// Cormorant Garamond : seuls les poids 400 et 500 (normal + italique) sont utilisés
// sur le site. Pour un autre poids, ajoutez son fichier dans ./fonts et déclarez-le ici.
const display = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const sans = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
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
    images: [{ url: "/portrait.jpg", width: 1000, height: 1250 }],
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
