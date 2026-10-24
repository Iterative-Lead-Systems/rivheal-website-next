import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "RivHeal | Healthcare Technology and Infrastructure",
    template: "%s | RivHeal",
  },
  description:
    "Discover RivHeal, a healthcare technology platform building connected experiences for healthcare providers and patients.",
  authors: [{ name: "RivHeal" }],
  creator: "RivHeal",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rivheal.com/",
    siteName: "RivHeal",
    title: "RivHeal | Healthcare Technology and Infrastructure",
    description:
      "Explore RivHeal's approach to connected healthcare technology, patient management, and healthcare infrastructure.",
    images: [
      {
        url: "/rivheal.png",
        width: 1200,
        height: 630,
        alt: "RivHeal Healthcare Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RivHeal | Healthcare Technology and Infrastructure",
    description:
      "Discover RivHeal, a healthcare technology platform building connected experiences for healthcare providers and patients.",
    images: ["/rivheal.png"],
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
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Yoruba", "Hausa", "Igbo"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>

        <GoogleAnalytics gaId="G-HR8CYX9E8N" />
      </body>
    </html>
  );
}
