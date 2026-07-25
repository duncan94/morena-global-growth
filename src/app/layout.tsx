import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Morena Global Growth Coaching | Esther Murina",
    template: "%s | Morena Global Growth Coaching",
  },
  description:
    "Coaching en training die mensen helpt groeien — in werk, onderneming en leven. Warm, scherp en gericht op blijvende verandering. Opgericht door Esther Murina, Nederland.",
  keywords: [
    "business coaching",
    "training",
    "Esther Murina",
    "Morena Global Growth",
    "coaching Nederland",
    "ondernemers coaching",
    "integratie arbeidsmarkt",
  ],
  openGraph: {
    title: "Morena Global Growth Coaching | Esther Murina",
    description:
      "Coaching en training die mensen helpt groeien. Warm, scherp en gericht op blijvende verandering.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
