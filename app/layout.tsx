import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivheal.com"),
  title: {
    default: "RivHeal | Electronic Medical Records and Patient Management",
    template: "%s | RivHeal",
  },
  description:
    "RivHeal helps healthcare facilities manage patient records, consultations, billing, pharmacy, laboratory, radiology and other healthcare workflows in one platform.",
  authors: [{ name: "RivHeal" }],
  creator: "RivHeal",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rivheal.com",
    siteName: "RivHeal",
    title: "RivHeal | Electronic Medical Records and Patient Management",
    description:
      "RivHeal helps healthcare facilities manage patient records, consultations, billing, pharmacy, laboratory, radiology and other healthcare workflows in one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RivHeal Healthcare Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RivHeal | Electronic Medical Records and Patient Management",
    description:
      "Manage patient records, consultations, billing, pharmacy, laboratory and radiology in one platform.",
    images: ["/og-image.png"],
    creator: "@rivheal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/rivheal.png",
    shortcut: "/rivheal.png",
    apple: "/rivheal.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RivHeal",
  description:
    "Healthcare management software for hospitals and clinics in Nigeria.",
  url: "https://rivheal.com",
  logo: "https://rivheal.com/rivheal.png",
  areaServed: { "@type": "Country", name: "Nigeria" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Yoruba", "Hausa", "Igbo"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HR8CYX9E8N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HR8CYX9E8N');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
