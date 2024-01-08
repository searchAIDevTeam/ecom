"use client";
import Splashscreen from "@/components/Splashscreen/Splashscreen";
import HomePage from "@/components/home/HomePage";
import SaveDeviceIdLocalstorage from "@/utils/SaveDeviceIdLocalstorage ";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        createPortal(
          <main className="absolute w-screen h-screen z-[9999] bg-white top-0 left-0 right-0 bottom-0">
            <Splashscreen />
          </main>,
          document.body
        )
      ) : (
        <>
          <SaveDeviceIdLocalstorage />
          <HomePage />
        </>
      )}
    </>
  );
}
