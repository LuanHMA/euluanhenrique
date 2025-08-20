import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ContactViewProvider } from "@/contexts/contact-context";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luan Henrique - Desenvolvedor Web",
  description: "Portfólio de Luan Henrique, desenvolvedor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${outfit.className} antialiased`}
      >
        <ContactViewProvider>
          {children}
        </ContactViewProvider>
      </body>
    </html>
  );
}
