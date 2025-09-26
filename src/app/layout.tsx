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
    default: "Dany Capital - Investasi Bitcoin & Blockchain",
    template: "%s | Dany Capital"
  },
  icons: {
    icon: [
      { url: '/dany.png', sizes: '32x32', type: 'image/png' },
      { url: '/dany.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/dany.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/dany.png'
  },
  description: "Saya percaya sepenuh hati pada Bitcoin dan teknologi blockchain. Berinvestasi dalam revolusi desentralisasi dengan penempatan modal berbasis keyakinan.",
  keywords: [
    "Dany Capital",
    "Bitcoin",
    "blockchain",
    "cryptocurrency",
    "mata uang kripto",
    "BTC",
    "ETH", 
    "BNB",
    "Story Protocol",
    "investasi",
    "investasi keyakinan",
    "modal ventura",
    "crypto VC",
    "keuangan terdesentralisasi",
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
    title: "Dany Capital - Investasi Bitcoin & Blockchain",
    description: "Saya percaya sepenuh hati pada Bitcoin dan teknologi blockchain. Berinvestasi dalam revolusi desentralisasi dengan penempatan modal berbasis keyakinan.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dany Capital - Investasi Bitcoin & Blockchain",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dany Capital - Investasi Bitcoin & Blockchain",
    description: "Saya percaya sepenuh hati pada Bitcoin dan teknologi blockchain. Berinvestasi dalam revolusi desentralisasi dengan penempatan modal berbasis keyakinan.",
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
    description: "Saya percaya sepenuh hati pada Bitcoin dan teknologi blockchain. Berinvestasi dalam revolusi desentralisasi dengan penempatan modal berbasis keyakinan.",
    foundingDate: "2024",
    industry: "Layanan Keuangan",
    speciality: ["Investasi Bitcoin", "Teknologi Blockchain", "Mata Uang Kripto", "Modal Ventura"],
    sameAs: [
      "https://twitter.com/danyakmallun",
      "https://linkedin.com/in/danyakmallun"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Pertanyaan Investasi",
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
