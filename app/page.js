"use client";
import Splashscreen from "@/components/Splashscreen/Splashscreen";
import HomePage from "@/components/home/HomePage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/home");
    }, 3000);
  }, []);

  return <>{loading && <Splashscreen />}</>;
}
