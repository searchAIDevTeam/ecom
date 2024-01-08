"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NewHeader from "../NewHeader/NewHeader";

const HeaderWrapper = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <NewHeader />;
};

export default HeaderWrapper;
