import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

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
  description: "Default Description",
  openGraph: {
    title: "Default Title",
    description: "Default Description",
    url: "https://example.com",
    siteName: "Example Site",
    images: [
      {
        url: "https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg",
        width: 800,
        height: 600,
        alt: "Default Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg", // Path for the favicon.ico file
    apple:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg", // For Apple devices, if available
    shortcut:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg", // For older browsers
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
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <div className="relative flex flex-col">
          <div className="sticky top-0 " style={{ zIndex: 999999999999999999 }}>
            <Navbar />
          </div>
          <main>{children}</main>
          {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer> */}
        </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
