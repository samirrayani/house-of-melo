import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://house-of-melo.vercel.app"),
  title: "House of Melo | Where Tomorrows Are Promised",
  description:
    "An interactive tribute and community empowerment symposium honoring 2025 NBA Hall of Famer Carmelo Anthony and his hometown Baltimore, MD. Enoch Pratt Free Library.",
  openGraph: {
    title: "House of Melo | Where Tomorrows Are Promised",
    description:
      "An interactive tribute and community empowerment symposium honoring 2025 NBA Hall of Famer Carmelo Anthony and his hometown Baltimore, MD.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
