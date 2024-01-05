// import * as React from "react";
import React, { useState } from "react";
import "./styles.css";
import { GrMenu } from "react-icons/gr";
import Styles from "../Dropitems/Styles";
import Colours from "../Dropitems/Colours";
import Rooms from "../Dropitems/Rooms";
import Collections from "../Dropitems/Collections";
// import arrow from "../../assets/icon/backarrow.svg";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectectedMenu, setSelectedmenu] = useState(null);
  // const open = Boolean(anchorEl);

  const [mainContent, SetMainContent] = useState(true);

  const handleClick = (index) => {
    setSelectedmenu(index);
    setIsMenuOpen(true);
    SetMainContent(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedmenu(null);
    SetMainContent(true);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenmenu = () => {
    setIsMenuOpen(true);
    SetMainContent(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    SetMainContent(true);
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
  };
  const [openchild, setOPenchild] = useState(false);
  const handleOpenmenuchild = () => {
    setOPenchild(true);
    SetMainContent(true);
  };
  const handleClosemenuchild = () => {
    setOPenchild(false);
    SetMainContent(true);
  };

  const menutext = [
    {
      index: 1,
      lebel: "SHOP BY COLLECTION",
      item: [
        "Fornasetti",
        "Senza Tempo II",
        "The Gardens",
        "Stella McCartney x Cole & Son",
        "Ardmore - Jabula",
        "Fornasetti",
        "12 More",
        "All Collections",
      ],
    },
    {
      index: 2,
      lebel: "SHOP BY STYLE",
      item: [
        "Animals",
        "Borders",
        "Conversational",
        "Damask",
        "Floral",
        "11 More",
        "All Styles",
      ],
    },
    {
      index: 3,
      lebel: "SHop by color",
      item: [
        "Animals",
        "Borders",
        "Conversational",
        "Damask",
        "Floral",
        "11 More",
        "All Styles",
      ],
    },
    {
      index: 4,
      lebel: "SHop by animal",
      item: [
        "dodo",
        "tiger",
        "mamoth",
        "hathi",
        "Floral",
        "11 More",
        "All Styles",
      ],
    },
  ];
  return (
    <div>
      <GrMenu
        className="font-bold text-2xl"
        onClick={(event) => {
          setAnchorEl(!anchorEl);
          handleOpenmenu();
          event.stopPropagation();
        }}
      />

      {anchorEl ? (
        <>
          <div
            className={`absolute dropdown-content z-50 h-[90vh] overflow-auto top-16 left-0 w-full bg-white shadow-md flex flex-col
transition-all ease-linear duration-2000 
${mainContent ? "block" : "hidden"}
`}
            onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
          >
            {/* for desktop */}
            <div className="px-[30px] my-5 sm:flex hidden">
              <div className="filter_container flex gap-32">
                <div className="menuLog flex flex-col gap-4">
                  <Link href="/virtualexperience/vrooms">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                      Virtual Experience
                    </button>
                  </Link>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                    Sign In
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-red-600">
                    Sign Up
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-green-600 hover:text-white">
                    Airbnb your home
                  </button>{" "}
                  <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-yellow-600 hover:text-white">
                    Help Centre
                  </button>
                </div>

                <Collections />
                <Styles />
                <Colours />
                <Rooms />
              </div>
            </div>

            {/* for mobile only */}

            <div className="sm:hidden flex">
              {isMenuOpen && (
                <div className="menu-overlay overflow-y-auto  border-2 fixed  w-[80vw] top-0 right-0    h-full">
                  <div
                    className="menu-option bg-white  pt-5  w-[100%] h-[100vh] border-slate-600"
                    onClick={handleMenuClick}
                  >
                    <div className="flex flex-col px-4 gap-6 justify-evenly">
                      {menutext.map((text, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-between"
                        >
                          <p>{text.lebel}</p>
                          <img
                            src="/backarrow.svg"
                            className="w-5 h-5 rotate-180"
                            alt=""
                            onClick={() => {
                              handleClick(index);
                              handleOpenmenuchild();
                            }}
                          />

                          {openchild && selectectedMenu === index && (
                            <div className="menu-overlay overflow-y-auto  border-2 fixed z-10 w-[80vw] top-0 right-0   bg-white h-full">
                              <div
                                className={`flex flex-col px-4 gap-6 justify-evenly pt-5 ${
                                  selectectedMenu === index ? "flex" : "hidden"
                                }`}
                              >
                                {text.item.map((txt, idx) => (
                                  <p key={idx}>{txt}</p>
                                ))}
                              </div>
                              <div>
                                <button
                                  onClick={handleClosemenuchild}
                                  className="border m-auto relative top-6 px-3 py-1 bg-black text-white font-bold flex rounded-2xl justify-center items-center "
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      <Link href="/virtualexperience/vrooms">
                        <button className="bg-blue-500 whitespace-nowrap text-white sm:px-4 px-1 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                          Virtual Experience
                        </button>
                      </Link>
                      <button className="bg-blue-500 whitespace-nowrap w-20 h-auto text-white sm:px-4 px-1 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                        Sign In
                      </button>
                      <button className="bg-red-500 text-white w-24 h-auto px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-red-600">
                        Sign Up
                      </button>
                      <button className="border w-44 h-auto border-green-600 text-green-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-green-600 hover:text-white">
                        Airbnb your home
                      </button>{" "}
                      <button className="border w-32 border-yellow-600 text-yellow-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-yellow-600 hover:text-white">
                        Help Centre
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleCloseMenu();
                          handleClose();
                        }}
                        className="border m-auto relative top-6 px-3 py-1 bg-black text-white font-bold flex rounded-2xl justify-center items-center "
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
