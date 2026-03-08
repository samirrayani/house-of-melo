import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://house-of-melo.vercel.app"),
  title: {
    default: "House of Melo | The Carmelo Anthony Archive",
    template: "%s | House of Melo",
  },
  description:
    "The definitive digital archive honoring 2025 NBA Hall of Famer Carmelo Anthony. From Baltimore to the Hall of Fame — a legacy preserved.",
  openGraph: {
    title: "House of Melo | The Carmelo Anthony Archive",
    description:
      "The definitive digital archive honoring 2025 NBA Hall of Famer Carmelo Anthony. From Baltimore to the Hall of Fame.",
    type: "website",
    siteName: "House of Melo",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
