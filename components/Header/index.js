"use client";
import React from "react";
import "./styles.css";
// import mainlogo from "../../assets/ayatriologo.png";
// import adtocart from "../../assets/icon/adtocart.svg";
// import liketocart from "../../assets/icon/like.svg";
// import userprofile from "../../assets/icon/profile.svg";
// import search from "../../assets/icon/search.svg";
import SearchModal from "./MobileSearch";
// import ayatrio_store from "../../assets/icon/ayatrio_store.svg";
// import SimpleBottomNavigation from "./bottombar";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./menu";
import { useEffect, useState } from "react";

import Expandedbar from "./Expandedbar";
//import axios from "axios";
// import { useDispatch } from "react-redux";
// import { searchProductsRequest } from "../../Features/search/searchSlice";
import TopLoader from "../AddOn/TopLoader";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchEngine, SetSeacrhEngine] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(searchProductsRequest(searchQuery));
  // }, [dispatch, searchQuery]);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    router.push("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    handleLinkClick("/profile");
  };
  const onClose = () => {
    setSearchQuery("");
    SetSeacrhEngine("");
  };
  const loginStatus =
    typeof window !== "undefined" ? localStorage.getItem("Login") : null;

  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = (path) => {
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 1310);
  };

  const [isModalOPen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = (event) => {
    event.stopPropagation();
    setModalOpen(false);
    onClose();
  };

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
    <header
      className={`fixed w-full sm:bg-none  top-0 transition-all ease-in-out duration-300  
       ${isScrolled ? "bg-white" : "bg-white"} 
      
      
      ${isFilterVisible ? "block" : "hidden"}
      `}
    >
      {isLoading && <TopLoader />}
      {!searchQuery ? (
        <div
          className={`navbar ${
            isScrolled ? " border-b-[0.5px] border-slate-200" : ""
          }  sm:px-[30px] px-[10px] py-0 flex justify-between items-center w-full`}
        >
          <div className="left flex items-center sm:gap-5 gap-1 ">
            <div className="profile-menu font-bold p-[7px] hover:bg-slate-200 hover:rounded-full">
              <Menu />
            </div>
            {/* for only mobile search */}

            <div
              className="sm:hidden block  w-10 h-10 p-[7px]"
              onClick={handleModalOpen}
            >
              <img src="/search.svg" alt="" className="header-div-icon" />
            </div>
          </div>

          <div className="mainlogo">
            <Link href="/">
              <img
                onClick={() => handleLinkClick("/")}
                src="/images/ayatriologo.png"
                alt="logo"
                className="sm:w-48 w-52 m-2"
              />
            </Link>
          </div>
          <div className="right flex items-center sm:gap-4 gap-2">
            <div
              onClick={handleModalOpen}
              className="w-10 h-10 p-[7px] -mr-4 hover:bg-slate-200 hover:rounded-full cursor-pointer sm:block hidden"
            >
              <img
                src="/search.svg"
                alt=""
                className="seachbar-div2-icon absolute z-10"
              />
            </div>
            <div
              className="w-10 h-10 p-[7px] hover:bg-slate-200 hover:rounded-full cursor-pointer"
              onClick={() => handleLinkClick("/cart")}
            >
              <img src="/adtocart.svg" alt="" className="header-div-icon" />
              <div className="cart-notification">3</div>
            </div>
            {loginStatus === "true" ? (
              <div
                className="pro flex p-[7px] hover:bg-slate-200 hover:rounded-full whitespace-nowrap "
                onClick={handleProfileNav}
              >
                <img src="/profile.svg" alt="" className="header-div-icon" />
              </div>
            ) : (
              <img
                src="/profile.svg"
                onClick={handleLoginNav}
                alt=""
                className="header-div-icon"
              />
            )}
            {/* for only mobole search */}
            {isModalOPen && (
              <SearchModal
                isOpen={isModalOPen}
                onClose={handleModalClose}
                onSearch={(e) =>
                  dispatch(searchProductsRequest(e.target.value))
                }
              />
            )}
          </div>
        </div>
      ) : (
        <Expandedbar
          searchQuery={searchQuery}
          onClose={onClose}
          onSearch={handleSearchChange}
        />
      )}
    </header>
  );
}
export default Header;
