import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Instituto Costa da Mina | Cultura, Educacao e Reexistencia",
  description:
    "O Instituto Costa da Mina e um territorio de reexistencia e futuro na Zona Sul de Sao Paulo, onde conhecimento, cultura e educacao se tornam ferramentas de libertacao e pertencimento.",
  keywords: [
    "Instituto Costa da Mina",
    "cultura afro-brasileira",
    "educacao",
    "Cidade Ademar",
    "Sao Paulo",
  ],
};

export const viewport: Viewport = {
  themeColor: "#6A0D74",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
