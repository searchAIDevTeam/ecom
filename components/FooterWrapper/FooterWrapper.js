"use client";
import { usePathname } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(()=>import('../Footer/Footer'),{
  ssr: false
});

const FooterWrapper = () => {
  const pathname = usePathname();

  const routes = ["/ayatrio-map","/home", "/login", "success"];
  if (routes.includes(pathname)) {
    return null;
  } else {
    return <Footer />;
  }
};

export default FooterWrapper;
