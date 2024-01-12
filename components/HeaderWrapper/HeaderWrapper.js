"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  // if (pathname === "/") {
  //   return null;
  // }
  console.log(pathname);
  return <Header />;
};

export default HeaderWrapper;
