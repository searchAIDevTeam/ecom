import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const homeRoute = "/home";
  return (
    <div>
      <div
        className={`bg-zinc-100 h-[30px] ${
          homeRoute === pathname ? "fixed" : ""
        } z-[99999] w-full flex justify-between`}
      >
        <div className="pt-1 pb-1 pl-[37.5px]">
        <Link className="pr-[20px] text-sm underline underline-offset-4" href="#">For You</Link>
        <Link className="text-sm" href="category/virtualexperience">For business</Link>
        </div>
        <div>
          <div className="flex flex-row gap-2 p-[5px] text-black  text-[12px] pr-5 ">
            <div className="pr-3 border-r border-black underline-offset-1">
              <Link href="category/virtualexperience">My choises</Link>
            </div>
            <div className="pr-3 border-r border-black underline-offset-1">
              <Link href="category/freedesign">Designer request</Link>
            </div>
            <div className="pr-3 border-r border-black underline-offset-1">
              <Link href="category/freesample">Sample request</Link>
            </div>
            <div>
              <Link href="/login">Help</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
