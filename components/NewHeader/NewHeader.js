"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BasicMenu from "../Header/menu";

const NewHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  // const [showMenu, setShowMenu] = useState(false);

  const handleLoginNav = () => {
    router.push("/login");
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // const handleMapNav = () => {
  //   router.push('/ayatrio-map');
  // }

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
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="sm:px-10 sm:pt-3 flex w-1/3 justify-start px-1 pt-2">
            <button onClick={handleMenuClick} className="flex gap-3">
              <span>
                <BasicMenu />
              </span>
            </button>
          </div>
          <div className="sm:gap-5 sm:px-10 sm:pt-3 flex flex-grow gap-2 justify-end px-1 pt-3">
            <div className="cursor-pointer">
              <Image
                src="/NewHeaderIcons/search.svg"
                width={25}
                height={25}
                alt="search"
              />
            </div>
            <div
              // onClick={handleMapNav}
              className="cursor-pointer"
            >
              <Image
                src="/NewHeaderIcons/location-pin-icon.svg"
                width={25}
                height={25}
                alt="location"
              />
            </div>
            <div onClick={handleLoginNav} className="cursor-pointer">
              <Image
                src="/NewHeaderIcons/profile.svg"
                width={25}
                height={25}
                alt="profile"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/NewHeaderIcons/adtocart.svg"
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
      {/* {showMenu ?  : ""} */}
    </>
  );
};

export default NewHeader;
