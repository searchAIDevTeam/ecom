"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../Header";
import TopHeader from '../Header/TopHeader';

const HeaderWrapper = () => {
  const pathname = usePathname();

  const routes = ["/", "/login", "/sucess"];
  const route=["/"];
  if(route.includes(pathname)){
    return <TopHeader/>;
  }
  if (routes.includes(pathname)) {
    return null;
  } else {
    return <Header />;
  }
};

export default HeaderWrapper;
