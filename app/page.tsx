"use client";
import dynamic from "next/dynamic";
import Loader from "@/components/loader";
import { Metadata } from "next";
import Seo from "@/components/seo";

// Use React.ComponentType to explicitly type the dynamic component
const Landing = dynamic(() => import("@/screens/landing"), {
  ssr: false,
}) as React.FC;

import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

// Add metadata for better SEO targeting global markets
export const metadata: Metadata = {
  title:
    "UI Pirate | Enterprise UI/UX Design & Development | USA, UK, Singapore, India, Australia",
  description:
    "Leading UI/UX design agency serving enterprise clients globally. Specializing in UI development, graphic design, motion graphics, design systems, AI/SaaS apps, and mobile applications. Trusted by Fortune 500 companies across USA, UK, Singapore, India, and Australia.",
  keywords:
    "enterprise UI design, UI development, graphic design, motion graphics, design systems, AI SaaS app design, mobile app design, enterprise clients USA UK Singapore India Australia, Fortune 500 design, startup design agency",
  openGraph: {
    title: "UI Pirate | Global Enterprise UI/UX Design & Development Agency",
    description:
      "Transform your business with world-class UI/UX design and development. Serving enterprise clients across USA, UK, Singapore, India & Australia. Specializing in AI/SaaS apps, mobile design, and design systems.",
    url: "https://uipirate.com",
    siteName: "UI Pirate by Vishal Anand",
    images: [
      {
        url: "https://res.cloudinary.com/dkziil6io/image/upload/v1742919377/ui-pirate-website_amh6qb.png",
        width: 1200,
        height: 630,
        alt: "UI Pirate - Global Enterprise Design Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Pirate | Enterprise Design Agency - Global Services",
    description:
      "World-class UI/UX design & development for enterprise clients. AI/SaaS apps, mobile design, motion graphics. Serving USA, UK, Singapore, India, Australia.",
    images: [
      "https://res.cloudinary.com/dkziil6io/image/upload/v1742919377/ui-pirate-website_amh6qb.png",
    ],
  },
  alternates: {
    canonical: "https://uipirate.com",
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const handlePageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 3-second delay
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <>
      <Seo />
      {loading ? <Loader /> : <Landing />}
    </>
  );
}
