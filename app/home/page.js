// import HomePage from "@/components/home/HomePage";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/home/HomePage"), {
  ssr: false,
});

import SaveDeviceIdLocalstorage from "@/utils/SaveDeviceIdLocalstorage ";
import React from "react";

const page = () => {
  return (
    <>
      <SaveDeviceIdLocalstorage />
      <HomePage />
    </>
  );
};

export default page;
