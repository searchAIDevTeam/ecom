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
        <div className="pt-1 pb-1 pl-8">
          <Image
            src="/logo/favicon-32x32.png"
            height={20}
            width={20}
            alt="logo"
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 pt-2 pr-5 text-xs tracking-wide text-black">
            <div className="pr-3 border-r border-gray-400">
              <Link href="/virtualexperience/category">Virtual Experience</Link>
            </div>
            <div className="pr-3 border-r border-gray-400 tracki">
              <Link href="/designservice">Free Design Request</Link>
            </div>
            <div className="pr-3 border-r border-gray-400">
              <Link href="/freesample">Free Sample Request</Link>
            </div>
            <div>
              <Link href="/login">Join Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
