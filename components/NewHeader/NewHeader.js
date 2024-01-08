"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import BasicMenu from "../Header/menu";
import SearchModal from "../../components/Header/MobileSearch";
import { useDispatch } from "react-redux";
const NewHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [searchEngine, SetSeacrhEngine] = useState("");
  const dispatch = useDispatch();
  const onClose = () => {
    SetSeacrhEngine("");
  };
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

  const [isModalOPen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = (event) => {
    event.stopPropagation();
    setModalOpen(false);
    onClose();
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="sm:px-10 sm:pt-3 flex w-1/3 justify-start px-1 pt-2">
          <button className="flex gap-3">
            <span>
              <BasicMenu />
            </span>
          </button>
        </div>
        <div className="sm:gap-5 sm:px-10 sm:pt-3 flex flex-grow gap-2 justify-end px-1 pt-3">
          <div onClick={handleModalOpen} className="cursor-pointer">
            <Image
              src="/NewHeaderIcons/search.svg"
              width={25}
              height={25}
              alt="search"
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
          {isModalOPen && (
            <SearchModal
              isOpen={isModalOPen}
              onClose={handleModalClose}
              onSearch={(e) => dispatch(searchProductsRequest(e.target.value))}
            />
          )}
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
