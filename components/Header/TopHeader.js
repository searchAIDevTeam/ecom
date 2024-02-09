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
        className={`bg-zinc-200 ${
          homeRoute === pathname ? "fixed" : ""
        } z-[99999] w-screen flex flex-row justify-between`}
      >
        <div className="pl-8 pt-2 pb-2">
          <Image
            src="/logo/favicon-32x32.png"
            height={20}
            width={20}
            alt="logo"
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 text-gray-500 text-sm pt-2 pr-5">
            <Link href="/">Virtual Experience |</Link>
            <Link href="/">Free Design |</Link>
            <Link href="/">Free Sample |</Link>
            <Link href="/">Join Ayatrio Family</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
