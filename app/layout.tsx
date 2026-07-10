import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./footer-reference.css";
import "./home-reference.css";
import { ClientEffects } from "@/components/ClientEffects";

export const metadata: Metadata = {
  title: "Rumax | Expert Care Delivered at Home",
  description:
    "CQC-registered domiciliary care, supported living and specialist clinical trial home nursing across Essex and the UK."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
