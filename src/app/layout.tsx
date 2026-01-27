import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESEI Barcelona | Student Portal",
  description: "ESEI Business School Student Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased p-0 md:p-6 lg:p-10`}>
        {children}
      </body>
    </html>
  );
}
