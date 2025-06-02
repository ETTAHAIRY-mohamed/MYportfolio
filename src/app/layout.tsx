import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ettahairy Mohamed - Développeur Full Stack",
  description:
    "Portfolio de Ettahairy Mohamed, Développeur Full Stack expérimenté spécialisé  Spring Boot,Angular  et développement d'applications performantes.",
  keywords:
    "Développeur Full Stack, Spring Boot, Android, portfolio, Ettahairy Mohamed",
  authors: [{ name: "Ettahairy Mohamed " }],
  viewport: "width=device-width, initial-scale=1",
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
