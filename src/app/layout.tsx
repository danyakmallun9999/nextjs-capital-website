import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansCode = localFont({
  src: "../../public/fonts/Google_Sans_Code/static/GoogleSansCode-Regular.ttf",
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
