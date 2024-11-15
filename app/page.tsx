"use client";
import dynamic from "next/dynamic";
import Loader from "@/components/loader";
// import Landing from "@/screens/landing";
const Landing = dynamic(() => import("@/screens/landing"), { ssr: false });
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const handlePageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 2-second delay
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);
  return <>{loading ? <Loader /> : <Landing />}</>;
}
