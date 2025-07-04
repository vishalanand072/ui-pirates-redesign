import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "UI Pirate by Vishal Anand | AI & SaaS UI/UX Design Expert",
  description:
    "Enterprise UI/UX designer specializing in AI SaaS applications and digital experiences. Trusted by top brands for high-performance design systems.",
  keywords:
    "AI UX design, enterprise UI design, SaaS product design, AI application UX, enterprise software UX, Vishal Anand, UI Pirate",
  openGraph: {
    title: "UI Pirate | AI SaaS UI/UX Expert",
    description:
      "Helping AI & SaaS enterprises craft seamless, high-converting UI/UX designs. 9+ years of experience in enterprise-grade product design.",
    url: "https://uipirate.com",
    siteName: "UI Pirate by Vishal Anand",
    images: [
      {
        url: "https://res.cloudinary.com/dkziil6io/image/upload/v1742919377/ui-pirate-website_amh6qb.png",
        width: 1200,
        height: 630,
        alt: "UI Pirate - AI SaaS Design Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1731044026/newfavicon_ibmap0.svg", // Path for the favicon.ico file
    apple:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731044026/newfavicon_ibmap0.svg", // For Apple devices, if available
    shortcut:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731044026/newfavicon_ibmap0.svg", // For older browsers
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="msvalidate.01" content="367497DBA609A56C845E2A1D4ECC5F42" />

        {/* AI Crawler Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="ai-content-declaration" content="ai-assisted" />
        <meta name="content-type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Vishal Anand - UI Pirate" />
        <meta
          name="subject"
          content="UI/UX Design Services, SaaS Design, AI Application Design"
        />
        <meta name="classification" content="Business, Design, Technology" />
        <meta
          name="keywords"
          content="UI design, UX design, UI development, graphic design, motion graphics, design systems, AI SaaS app design, mobile app design, enterprise design, USA UK Singapore India Australia, enterprise clients, startup design, tech company design, Vishal Anand, UI Pirate"
        />
        <meta name="geo.region" content="US, GB, SG, IN, AU" />
        <meta
          name="geo.placename"
          content="United States, United Kingdom, Singapore, India, Australia"
        />
        <meta
          name="target-audience"
          content="Enterprise clients, SaaS companies, Tech startups, Mobile app companies"
        />

        {/* AI Data Reference */}
        <link rel="alternate" type="application/ld+json" href="/ai-data.json" />
        <link
          rel="alternate"
          type="application/ld+json"
          href="/enterprise-schema.json"
        />

        {/* Hreflang for international targeting */}
        <link rel="alternate" hrefLang="en-us" href="https://uipirate.com/" />
        <link rel="alternate" hrefLang="en-gb" href="https://uipirate.com/" />
        <link rel="alternate" hrefLang="en-sg" href="https://uipirate.com/" />
        <link rel="alternate" hrefLang="en-in" href="https://uipirate.com/" />
        <link rel="alternate" hrefLang="en-au" href="https://uipirate.com/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://uipirate.com/"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={clsx(
          "min-h-screen  font-sans antialiased bg-[#F5F5F5]",
          fontSans.variable
        )}
      >
        <div className="relative flex flex-col">
          <div className="sticky top-0  " style={{ zIndex: 9999 }}>
            <Navbar />
          </div>
          <main className="">{children}</main>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
