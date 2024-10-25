"use client";
import Loader from "@/components/loader";
import Landing from "@/screens/landing";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 2 seconds
    });

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return <>{loading ? <Loader /> : <Landing />}</>;
}
