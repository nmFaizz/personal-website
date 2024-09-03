import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/components/NavigationBar";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import Footer from "@/components/Footer";
import { siteConfig } from "@/constant/config";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), 
  title: {
    default: "Nur Muhammad Faiz",
    template: "%s | Nur Muhammad Faiz",
  },
  description: "Faiz personal page to show his projects, get to know more about faiz and some of his article",
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    siteName: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
  icons: {
    icon: "/NMFAIZZ-ICON.png",
    apple: "/NMFAIZZ-ICON.png",
    shortcut: "/NMFAIZZ-ICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} bg-main-black text-main-white`}>
        <ReactQueryProvider>
          <NavigationBar />
          {children}  
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
