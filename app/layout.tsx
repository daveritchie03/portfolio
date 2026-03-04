import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dave Nalluri — Senior Software Engineer",
  description:
    "Senior Software Engineer specialising in Salesforce architecture, Apex, LWC, and full-stack web development. Available for projects at hello@davenalluri.com.",
  metadataBase: new URL("https://davenalluri.com"),
  openGraph: {
    title: "Dave Nalluri — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in Salesforce architecture, Apex, LWC, and full-stack web development.",
    url: "https://davenalluri.com",
    siteName: "Dave Nalluri",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
