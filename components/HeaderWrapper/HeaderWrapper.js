"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <Header />;
};

export default HeaderWrapper;
