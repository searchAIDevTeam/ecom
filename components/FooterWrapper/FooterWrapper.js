"use client";
import { usePathname } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(()=>import('../Footer/Footer'));

const FooterWrapper = () => {
  const pathname = usePathname();

  const routes = ["/ayatrio-map", "/", "/login"];
  if (routes.includes(pathname)) {
    return null;
  } else {
    return <Footer />;
  }
};

export default FooterWrapper;
