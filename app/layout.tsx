import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ETTAHAIRY MOHAMED - Portfolio',
  description: 'Portfolio de ETTAHAIRY MOHAMED, Développeur Full Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
} 