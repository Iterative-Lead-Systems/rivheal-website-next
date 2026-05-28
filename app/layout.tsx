import type { Metadata } from "next";
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
    default: "RivHeal — The Operating System for Nigerian Healthcare",
    template: "%s | RivHeal",
  },
  description:
    "RivHeal digitizes the entire Nigerian healthcare journey — smart appointment booking, live queue tracking, digital medical records, telemedicine, and emergency network. Trusted by hospitals and patients across Nigeria.",
  keywords: [
    "healthcare Nigeria",
    "hospital management",
    "patient app Nigeria",
    "telemedicine Nigeria",
    "medical records Nigeria",
    "appointment booking Nigeria",
    "EMR Nigeria",
    "RivHeal",
  ],
  authors: [{ name: "RivHeal" }],
  creator: "RivHeal",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rivheal.com",
    siteName: "RivHeal",
    title: "RivHeal — The Operating System for Nigerian Healthcare",
    description:
      "Smart appointments, live queue tracking, digital records, telemedicine & emergency network — all in one platform.",
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
    title: "RivHeal — Nigerian Healthcare Platform",
    description:
      "Smart appointments, live queue, digital records & emergency network for Nigeria.",
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
  "@type": "MedicalOrganization",
  name: "RivHeal",
  description: "The Operating System for Nigerian Healthcare",
  url: "https://rivheal.com",
  logo: "https://rivheal.com/rivheal.png",
  areaServed: { "@type": "Country", name: "Nigeria" },
  serviceType: [
    "Hospital Management",
    "Patient Portal",
    "Telemedicine",
    "Emergency Network",
  ],
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
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
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
