import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansCode = localFont({
  src: "../../public/fonts/Google_Sans_Code/static/GoogleSansCode-Regular.ttf",
  variable: "--font-google-sans-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://capital.danyakmallun.com'),
  title: {
    default: "Dany Capital - Bitcoin & Blockchain Investment",
    template: "%s | Dany Capital"
  },
  description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
  keywords: [
    "Dany Capital",
    "Bitcoin",
    "blockchain",
    "cryptocurrency",
    "BTC",
    "ETH", 
    "BNB",
    "Story Protocol",
    "investment",
    "conviction investing",
    "venture capital",
    "crypto VC",
    "decentralized finance",
    "DeFi"
  ],
  authors: [{ name: "Dany Capital" }],
  creator: "Dany Capital",
  publisher: "Dany Capital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://capital.danyakmallun.com",
    siteName: "Dany Capital",
    title: "Dany Capital - Bitcoin & Blockchain Investment",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dany Capital - Bitcoin & Blockchain Investment",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dany Capital - Bitcoin & Blockchain Investment",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    images: ["/twitter-image"],
    creator: "@danyakmallun",
    site: "@danyakmallun",
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
  },
  alternates: {
    canonical: "https://capital.danyakmallun.com", // Change to your actual website URL
      },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dany Capital",
    url: "https://capital.danyakmallun.com", // Change to your actual website URL
    logo: "https://capital.danyakmallun.com/images/og-image.png",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    foundingDate: "2024",
    industry: "Financial Services",
    speciality: ["Bitcoin Investment", "Blockchain Technology", "Cryptocurrency", "Venture Capital"],
    sameAs: [
      "https://twitter.com/danyakmallun",
      "https://linkedin.com/in/danyakmallun"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Investment Inquiries",
      url: "https://capital.danyakmallun.com" // Change to your actual website URL
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${googleSansCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
