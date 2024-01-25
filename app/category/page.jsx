"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const page = () => {
  const searchparams = useSearchParams();
  const text = searchparams.get("search");
  const [selected, setSelected] = useState("");

  return (
    <div className="py-20 text-center ">
      <h1>Choose Your Category</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <div
          onClick={() => setSelected("Curtains")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex items-center justify-center ${
            selected === "Curtains"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Curtains
        </div>
        <div
          onClick={() => setSelected("Wallpaper")}
          className={` ${
            selected === "Wallpaper"
              ? "outline outline-offset-4 outline-black"
              : ""
          } w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center`}
        >
          Wallpaper
        </div>
        <div
          onClick={() => setSelected("Blinds")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center ${
            selected === "Blinds"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Blinds
        </div>
        <div
          onClick={() => setSelected("Flooring")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center ${
            selected === "Flooring"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Flooring
        </div>
      </div>
      <Link
        href={{
          pathname: `/${text}`,
          query: {
            search: text,
            search1: selected,
          },
        }}
      >
        <div className="bg-gray-500 text-white whitespace-nowrap py-2 px-4 inline-flex rounded-md mt-10">
          Go to {text}
        </div>
      </Link>
    </div>
  );
};

export default page;
