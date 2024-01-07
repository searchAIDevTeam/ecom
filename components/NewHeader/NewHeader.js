"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NewHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const logoStyle =
    scrollY > 0 ? { width: 100, height: 16 } : { width: 150, height: 32 };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="sm:px-10 sm:pt-3 flex w-1/3 justify-start px-1 pt-2">
          <button className="flex gap-3">
            <span>
              <Image
                src="/NewHeaderIcons/IndianFlag.svg"
                width={25}
                height={25}
                alt="India"
              />
            </span>
            <span>
              <p className="text-sm justify-start">IN</p>
            </span>
          </button>
        </div>
        <div className="sm:gap-5 sm:px-10 sm:pt-3 flex flex-grow gap-2 justify-end px-1 pt-3">
          <div>
            <Image
              src="/NewHeaderIcons/search-icon.svg"
              width={25}
              height={25}
              alt="search"
            />
          </div>
          <div>
            <Image
              src="/NewHeaderIcons/location-pin-icon.svg"
              width={25}
              height={25}
              alt="location"
            />
          </div>
          <div>
            <Image
              src="/NewHeaderIcons/profile-icon.svg"
              width={25}
              height={25}
              alt="profile"
            />
          </div>
          <div>
            <Image
              src="/NewHeaderIcons/shopping-bag-icon.svg"
              width={25}
              height={25}
              alt="bag"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`flex justify-center ${logoStyle}`}
          style={{ transition: "width 0.3s, height 0.4s", ...logoStyle }}
        >
          <Link href="/">
            <Image
              src="/ayatriologo.png"
              width={logoStyle.width}
              height={logoStyle.height}
              alt="Ayatrio"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
