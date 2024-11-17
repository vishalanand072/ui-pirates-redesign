import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { SpeedInsights } from "@vercel/speed-insights/next";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg",
//   },
// };

export const metadata: Metadata = {
  title: "UI Pirate",
  description: "UI Pirate Description",
  openGraph: {
    title: "UI Pirate",
    description: "UI Pirate",
    url: "https://uipirate.com",
    siteName: "uipirate",
    images: [
      {
        url: "https://res.cloudinary.com/damm9iwho/image/upload/v1731044026/newfavicon_ibmap0.svg",
        width: 800,
        height: 600,
        alt: "Default Image",
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
          <div
            className="sticky top-0  "
            style={{ zIndex: 999999999999999999 }}
          >
            <Navbar />
          </div>
          <main className="">{children}</main>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
