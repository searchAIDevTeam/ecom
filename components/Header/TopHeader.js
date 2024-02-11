import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const homeRoute = '/home';
  return (
    <div>
      <div className={`bg-zinc-100 ${homeRoute===pathname?'fixed':''} z-[99999] w-full flex flex-row justify-between`}>
        <div className="pl-10  py-[4px]">
          <Image
            src="/logo/favicon-32x32.png"
            height={22}
            width={22}
            alt="logo"
          />
        </div>
        <div>
          <div className="flex flex-row gap-3 items-center text-black text-sm  px-[30px] py-[4px]">
            <Link href="/" >
            Free Design Request &nbsp; &nbsp;|
            </Link>
            <Link href="/" >
            Free Sample Request &nbsp; &nbsp;| 
            </Link>
            <Link href="/" >
              Join Ayatrio Family
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
