import type { Metadata } from "next";
import { Inter, Lekton, Lexend_Zetta } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lekton = Lekton({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const lexendZetta = Lexend_Zetta({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Devan McGeer",
  description: "Site Reliability Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'"
        />
      </head>
      <body
        className={`${inter.variable} ${lekton.variable} ${lexendZetta.variable} font-body flex min-h-screen flex-col bg-white text-black antialiased`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          <Header />
          <hr className="border-black" />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
