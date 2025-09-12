import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansCode = localFont({
  src: "../../public/fonts/Google_Sans_Code/static/GoogleSansCode-Regular.ttf",
  variable: "--font-google-sans-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://capital.danyakmallu.com'),
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
    url: "https://capital.danyakmallu.com",
    siteName: "Dany Capital",
    title: "Dany Capital - Bitcoin & Blockchain Investment",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dany Capital - Bitcoin & Blockchain Investment",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dany Capital - Bitcoin & Blockchain Investment",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    images: ["/og-image.png"],
    creator: "@danycapital",
    site: "@danycapital",
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
  },
  alternates: {
    canonical: "https://capital.danyakmallu.com", // Change to your actual website URL
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
    url: "https://dany-capital.vercel.app", // Change to your actual website URL
    logo: "https://dany-capital.vercel.app/og-image.png",
    description: "I believe wholeheartedly in Bitcoin and blockchain technology. Investing in the decentralized revolution with conviction-based capital deployment.",
    foundingDate: "2024",
    industry: "Financial Services",
    speciality: ["Bitcoin Investment", "Blockchain Technology", "Cryptocurrency", "Venture Capital"],
    sameAs: [
      "https://twitter.com/danycapital",
      "https://linkedin.com/company/dany-capital"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Investment Inquiries",
      url: "https://dany-capital.vercel.app" // Change to your actual website URL
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
        <meta name="theme-color" content="#000000" />
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
