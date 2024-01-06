'use client'
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
// import TopLoader from "../AddOn/TopLoader";
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
  const loginStatus = localStorage.getItem("Login");
  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = (path) => {
    setIsLoading(true);
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

  return (
    <header
      className={`fixed w-full sm:bg-none  top-0 transition-all ease-in-out duration-300  z-[99999]
       ${isScrolled ? "bg-white" : "bg-white"} 
      ${howMuchScrolled > 20 ? "hidden" : ""}`}
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
            <Link href="/virtualexperience/vrooms">
              <div className=" text-costom-co p-[7px] hover:bg-slate-200 hover:rounded-3xl whitespace-nowrap">
                Virtual Exprience{" "}
              </div>
            </Link>

            <div className=" text-costom-co p-[7px] hover:bg-slate-200 hover:rounded-3xl whitespace-nowrap">
              <Link href="/magazine">
                <div className="">Find the Right Floor</div>
              </Link>{" "}
            </div>
            {/* for only mobile search */}

            <div
              className="sm:hidden block  w-10 h-10 p-[7px]"
              onClick={handleModalOpen}
            >
              <img src="/profile.svg" alt="" className="header-div-icon" />
            </div>
          </div>

          <div className="mainlogo">
            <Link href="/">
              <img
                src="/images/ayatriologo.png"
                alt="logo"
                className="sm:w-48 w-52 m-2"
              />
            </Link>
          </div>
          <div className="right flex items-center sm:gap-4 gap-2">
            {/* map-icon */}

            <div className=" searchbar sm:block hidden pt-4 w-40 h-10 items-right justify-end ">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                placeholder="Search"
                className="searchTerm sm:block hidden relative font-semibold placeholder-gray-400 w-[12rem] h-10 bg-zinc-100 p-4 rounded-full active:border-none focus:outline-none hover:bg-slate-200 hover:rounded-3xl"
              />
              <img
                src="/search.svg"
                alt=""
                className="seachbar-div2-icon absolute z-10"
              />
            </div>
            <div className="sm:block hidden w-10 h-10 p-[7px] hover:bg-slate-200 hover:rounded-full cursor-pointer">
              <img src="/like.svg" alt="" className="header-div-icon" />
              <div className="cart-notification">12</div>
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
