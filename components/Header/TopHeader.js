import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const homeRoute = "/home";
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`bg-zinc-200 ${
          homeRoute === pathname ? "fixed" : ""
        } z-[99999] w-full flex flex-row justify-between 
      ${isFilterVisible ? "block" : "hidden"}
      `}
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
          <div className="flex flex-row gap-2 text-gray-500 text-sm pt-2 pr-4">
            <Link href="/virtualexperience/category">Virtual Experience |</Link>
            <Link href="/designservice">Free Design |</Link>
            <Link href="/freesample">Free Sample |</Link>
            <Link href="/login">Join Ayatrio Family</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
