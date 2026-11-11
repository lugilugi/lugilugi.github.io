import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luigi Cuansing — Portfolio",
  description:
    "Luigi Cuansing — BS Computer Engineering at De La Salle University. Embedded Systems, PCB Design, Board Bringup.",
  openGraph: {
    title: "Luigi Cuansing",
    description: "Embedded Systems, PCB Design, Board Bringup",
    images: ["/images/og.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
