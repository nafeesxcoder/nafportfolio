import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Stars } from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nafees Ahmad | MERN Stack Developer Portfolio",
  description: "Professional MERN Stack Developer Portfolio",
  keywords: "MERN Stack, React, Node.js, MongoDB, Express",
  authors: [{ name: "Nafees Ahmad" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ✅ Fixed: Added data-scroll-behavior attribute
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} custom-scrollbar antialiased`}>
        <Stars />
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
