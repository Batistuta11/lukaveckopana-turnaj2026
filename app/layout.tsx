import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turnaj2026.lukaveckopana.cz"),
  title: {
    default: "25. ročník turnaje O pohár obce Lukavec",
    template: "%s | Turnaj Lukavec 2026",
  },
  description:
    "Informace k 25. ročníku turnaje v malé kopané O pohár obce Lukavec. Termín, propozice, registrace mužstev a historie vítězů.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Turnaj Lukavec 2026",
    title: "25. ročník turnaje O pohár obce Lukavec",
    description:
      "Samostatná prezentační stránka jubilejního turnaje v malé kopané v Lukavci.",
    images: [
      {
        url: "/images/lukavec2026.webp",
        width: 1200,
        height: 630,
        alt: "25. ročník turnaje O pohár obce Lukavec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "25. ročník turnaje O pohár obce Lukavec",
    description:
      "Termín, propozice, registrace mužstev a historie vítězů turnaje v Lukavci.",
    images: ["/images/lukavec2026.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100">{children}</body>
    </html>
  );
}
