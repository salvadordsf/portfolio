import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Salvador Di Sabatto · Fullstack Developer",
  description: "Portfolio de desarrollo web — Next.js, TypeScript, Node.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}