import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: "YASCON - Youth for Conservation",
  description: "National Youth Association for Conservation of Nature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}