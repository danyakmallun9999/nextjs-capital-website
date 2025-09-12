import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSansCode = Google_Sans_Code({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-google-sans-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dany Capital - Bitcoin & Blockchain Investment",
  description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
  keywords: "Dany Capital, Bitcoin, blockchain, cryptocurrency, BTC, ETH, BNB, Story Protocol, investment, conviction investing",
  openGraph: {
    title: "Dany Capital - Bitcoin & Blockchain Investment",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
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
      <body
        className={`${googleSansCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
