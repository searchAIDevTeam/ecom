"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  srtarr,
  typeContent,
  typearr,
  categoryarr,
  colorarr,
  htarr,
  wdharr,
} from "./tabsArray";
import {
  renderType,
  renderTypeContent,
  rendersizeheight,
  rendercategory,
  rendersizewidth,
  renderSortItem,
} from "./tabsRender";
const Tabs = ({ filteredProducts }) => {
  console.log("Filtered products:", filteredProducts);
  const router = useRouter();
  const handlenav = (id) => {
    router.push(`/room/${id}`);
  };
  const [filterData,setFilterdata]= useState([])
  useEffect(() => {
    setFilterdata(filteredProducts)
  }, [filteredProducts])
  const srtarr = [
    {
      id: 1,
      name: "Best match",
      value: "1",
    },
    {
      id: 2,
      name: "Price: low to high",
      value: "2",
    },
    {
      id: 3,
      name: "Price: high to low",
      value: "3",
    },
    {
      id: 4,
      name: "Newest",
      value: "4",
    },
    {
      id: 5,
      name: "Customer rating",
      value: "5",
    },
    {
      id: 6,
      name: "Name",
      value: "6",
    },
    {
      id: 7,
      name: "Most popular",
      value: "7",
    },
    {
      id: 8,
      name: "Width",
      value: "8",
    },
    {
      id: 9,
      name: "Length",
      value: "9",
    },
  ];
  const wdharr = [
    {
      id: 1,
      name: "0-119 cm",
      value: "2",
    },
    {
      id: 2,
      name: "120 -129 cm",
      value: "2",
    },
    {
      id: 3,
      name: "130-139",
      value: "3",
    },
    {
      id: 4,
      name: "140-149",
      value: "82",
    },
    {
      id: 5,
      name: "150+",
      value: "6",
    },
  ];
  const htarr = [
    {
      id: 1,
      name: "100 cm",
      value: "1",
    },
    {
      id: 2,
      name: "150 cm",
      value: "17",
    },
    {
      id: 3,
      name: "250 cm",
      value: "76",
    },
    {
      id: 4,
      name: "310 cm",
      value: "1",
    },
    {
      id: 5,
      name: "1000 cm",
      value: "1",
    },
  ];
  const colorarr = [
    {
      id: 1,
      class:
        "rounded-full bg-white border border-slate-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "White",
      value: "36",
    },
    {
      id: 2,
      class:
        "rounded-full bg-gray-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Grey",
      value: "22",
    },
    {
      id: 3,
      class:
        "rounded-full bg-yellow-100 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Beige",
      value: "17",
    },
    {
      id: 4,
      class:
        "rounded-full bg-blue-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Blue",
      value: "16",
    },
    {
      id: 5,
      class:
        "rounded-full bg-green-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Green",
      value: "10",
    },
    {
      id: 6,
      class:
        "rounded-full bg-red-600 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Red",
      value: "8",
    },
    {
      id: 7,
      class:
        "rounded-full bg-white hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 border border-slate-300 w-14 h-14",
      name: "Multicolor",
      value: "4",
    },
    {
      id: 8,
      class:
        "rounded-full bg-yellow-900 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Brown",
      value: "3",
    },
    {
      id: 9,
      class:
        "rounded-full bg-black hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Black",
      value: "3",
    },
    {
      id: 10,
      class:
        "rounded-full bg-yellow-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Yellow",
      value: "2",
    },
    {
      id: 11,
      class:
        "rounded-full bg-emerald-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Turquiose",
      value: "2",
    },
    {
      id: 12,
      class:
        "rounded-full bg-orange-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
      name: "Orange",
      value: "36",
    },
    {
      id: 13,
      class:
        "rounded-full bg-red-200 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
      name: "Pink",
      value: "1",
    },
  ];
  const categoryarr = [
    {
      id: 1,
      name: "Heading tape",
      value: "39",
    },
    {
      id: 2,
      name: "Slot heading",
      value: "32",
    },
    {
      id: 3,
      name: "Tab heading",
      value: "13",
    },
    {
      id: 4,
      name: "Eyelet",
      value: "10",
    },
    {
      id: 5,
      name: "Curtains, 1 pair",
      value: "4",
    },
    {
      id: 6,
      name: "Panel curtains",
      value: "1",
    },
  ];

  const typearr = [
    {
      id: 1,
      name: "Heading tape",
      value: "39",
    },
    {
      id: 2,
      name: "Slot heading",
      value: "32",
    },
    {
      id: 3,
      name: "Tab heading",
      value: "13",
    },
    {
      id: 4,
      name: "Eyelet",
      value: "10",
    },
    {
      id: 5,
      name: "Curtains, 1 pair",
      value: "4",
    },
  ];

  const typeContent = [
    {
      id: 1,
      name: "Sheer curtains, 1 pair",
      value: "3",
    },
    {
      id: 2,
      name: "Block-out curtains, 1 pair",
      value: "1",
    },
    {
      id: 3,
      name: "Curtain",
      value: "1",
    },
    {
      id: 4,
      name: "Iron-on hemming strip",
      value: "1",
    },
    {
      id: 5,
      name: "Sound absorbing panel",
      value: "1",
    },
    {
      id: 6,
      name: "Tie heading",
      value: "0",
    },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("all");

  const [openSort, setOpenSort] = React.useState(false);

  const handleOpen = () => {
    setOpenSort(!openSort);
  };
  const [openAllsort, setopenallsort] = useState(false);
  const handleAllsort = () => {
    setopenallsort(!openAllsort);
  };
  // const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [openSize, setOpenSize] = useState(false);

  const handleSize = () => {
    setOpenSize(!openSize);
  };
  const [openAllSize, setOpenAllSIze] = useState(false);
  const handleAllSize = () => {
    setOpenAllSIze(!openAllSize);
  };
  const [openWidth, setOpenWidth] = useState(false);
  const handleWidth = () => {
    setOpenWidth(!openWidth);
  };

  const [openHeight, setOpenHeight] = useState(false);
  const handleHeight = () => {
    setOpenHeight(!openHeight);
  };

  const [opencolor, setOpenColor] = useState(false);
  const handlecolor = () => {
    setOpenColor(!opencolor);
  };

  const [openAllcolor, setOpenAllcolor] = useState(false);
  const handleAllcolor = () => {
    setOpenAllcolor(!openAllcolor);
  };
  const [openCaategory, setOpenCategory] = useState(false);
  const handleCategory = () => {
    setOpenCategory(!openCaategory);
  };
  const [openAllCategory, setOpenAllCategory] = useState(false);
  const handleAllCategory = () => {
    setOpenAllCategory(!openAllCategory);
  };
  const [openAllType, setOpenAllType] = useState(false);
  const handleAllType = () => {
    setOpenAllType(!openAllType);
  };

  const [selectedCircle, setSelectedCircle] = useState([]);
  const handleClick = (idx) => {
    if (selectedCircle.includes(idx)) {
      setSelectedCircle(selectedCircle.filter((item) => item !== idx));
    } else {
      setSelectedCircle([...selectedCircle, idx]);
    }
  };

  const [openType, setOpenType] = useState(false);
  const handleType = () => {
    setOpenType(!openType);
  };
  const [openContent, setOpenCOntent] = useState(false);
  const handleContent = () => {
    setOpenCOntent(!openContent);
  };

  const [openAll, setOpenAll] = useState(false);
  const handleAll = () => {
    setOpenAll(true);
  };
  const closeAll = () => {
    setOpenAll(false);
    setOpenAllType(false);
    setOpenAllCategory(false);
    setOpenAllcolor(false);
    setOpenAllSIze(false);
    setopenallsort(false);
  };

  const renderSortItem = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label htmlFor="age1" className="">
        {text.name}
      </label>
      <input type="radio" id="age1" name="age" value="30" />
    </div>
  );
  const rendersizewidth = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );
  const rendercategory = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );

  const rendersizeheight = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );
  const renderTypeContent = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );

  const renderType = (text, idx) => (
    <div className={`flex justify-between`} key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );

  const commonClasses =
    "px-3 py-2 mr-2.5 rounded-full flex items-center  bg-gray-100 whitespace-nowrap";

  // logic for stikey
  useEffect(() => {
    const handleScroll = () => {
      const firstDiv = document.querySelector(".bloc-tabs2");
      const thirdDiv = document.querySelector(".main-image-pdt");

      if (firstDiv && thirdDiv) {
        const firstDivHeight = firstDiv.offsetHeight;
        const thirdDivBottom =
          thirdDiv.getBoundingClientRect().bottom + window.scrollY;
        const windowBottom = window.scrollY;

        if (thirdDivBottom <= windowBottom + firstDivHeight) {
          firstDiv.style.position = "relative"; // Stop being sticky
        } else {
          firstDiv.style.position = "sticky"; // Be sticky
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper mb-20 sm:px-[50px] px-[20px] py-20 w-full h-full">
        <div>
          <h2 className="text-xl font-bold mb-5">More ideas and inspiration</h2>
        </div>
        <div
          className={`
          sidebarforstickey
           cursor-pointer sm:mb-0 
      
       `}
        >
          <div className={`bg-white py-5 bloc-tabs2 flex flex-row`}>
            {/* dropdown1 */}
            <div className="dropdown1">
              <div>
                <button
                  onClick={() => {
                    if (window.innerWidth <= 450) {
                      handleAll();
                      handleTabClick();
                      handleAllsort();
                    } else {
                      handleOpen();
                      handleTabClick();
                    }
                  }}
                  className={` Tabbtn 
                  ${
                    openSort
                      ? `active-tabs  border border-black ${commonClasses} `
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
                >
                  Sort
                  <Image
                    src="/backarrow.svg"
                    width={40}
                    height={40}
                    className={`w-6 h-6  mt-1 sm:block hidden
                ${openSort ? " rotate-90" : "-rotate-90"}
                
                `}
                    alt=""
                  />
                </button>
                {openSort  ? (
                  <div  className=" border opensort flex flex-col gap-7 py-5 bg-white rounded-2xl w-52 h-40 overflow-y-auto px-5">
                    {srtarr.map(renderSortItem)}
                  </div>
                ) : null}
              </div>
            </div>

            {/* dropdown2 */}

            <div className="dropdown2 ">
              <button
                onClick={() => {
                  if (window.innerWidth <= 450) {
                    handleAll();
                    handleTabClick();
                    handleAllSize();
                  } else {
                    handleSize();
                    handleTabClick();
                  }
                }}
                className={`Tabbtn 
                  ${
                    openSize
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
              >
                Size &nbsp;
                <Image
                  src="/backarrow.svg"
                  width={40}
                  height={40}
                  className={`w-6 h-6  mt-1 sm:block hidden
                ${openSize ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>

              {openSize ? (
                <div className="border flex flex-col gap-7 py-5 bg-white rounded-2xl w-64 h-80 overflow-y-auto px-5 ">
                  <hr />
                  <div
                    className="flex justify-between"
                    onClick={(event) => {
                      handleWidth();
                      event.stopPropagation();
                    }}
                  >
                    <label for="age11" className=" underline">
                      width
                    </label>
                    <Image
                      src="/backarrow.svg"
                      width={40}
                      height={40}
                      className={`w-6 h-6  mt-1
                  ${openWidth ? " rotate-90" : "-rotate-90"}
                  `}
                      alt=""
                    />
                  </div>

                  {/* ******************************************** */}
                  {openWidth ? (
                    <div className="flex flex-col gap-4">
                      {wdharr.map(rendersizewidth)}
                    </div>
                  ) : null}

                  {/* ********************************************** */}
                  <hr />
                  <div
                    className="flex justify-between"
                    onClick={(event) => {
                      handleHeight();
                      event.stopPropagation();
                    }}
                  >
                    <label for="age11" className=" underline">
                      Height
                    </label>
                    <Image
                      src="/backarrow.svg"
                      width={40}
                      height={40}
                      className={`w-6 h-6  mt-1
                  ${openHeight ? " rotate-90" : "-rotate-90"}
                  `}
                      alt=""
                    />
                  </div>

                  {/* ******************************************** */}
                  {openHeight ? (
                    <div className="flex flex-col gap-4">
                      {htarr.map(rendersizeheight)}
                    </div>
                  ) : null}
                  <hr />
                </div>
              ) : null}
            </div>

            {/* dropdown3 */}

            <div>
              <button
                onClick={() => {
                  if (window.innerWidth <= 450) {
                    handleAll();
                    handleTabClick();
                    handleAllcolor();
                  } else {
                    handlecolor();
                    handleTabClick();
                  }
                }}
                className={`Tabbtn 
                  ${
                    opencolor
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
              >
                Color &nbsp;
                <Image
                  src="/backarrow.svg"
                  width={40}
                  height={40}
                  className={`w-6 h-6  mt-1 sm:block hidden
                ${opencolor ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {opencolor ? (
                <div
                  className=" flex flex-col bg-white items-center  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5"
                  style={{ zIndex: "1000" }}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {colorarr.map((text, idx) => (
                      <div
                        className="flex flex-col items-center justify-center"
                        key={idx}
                      >
                        <div
                          onClick={() => handleClick(idx)}
                          className={`${text.class}  ${
                            selectedCircle.includes(idx)
                              ? "outline outline-2"
                              : ""
                          } `}
                        ></div>
                        <p>{text.name}</p>
                        <p>{text.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* dropdown4 */}
            <div>
              <button
                onClick={() => {
                  if (window.innerWidth <= 450) {
                    handleAll();
                    handleTabClick();
                    handleAllCategory();
                  } else {
                    handleCategory();
                    handleTabClick();
                  }
                }}
                className={`Tabbtn 
                  ${
                    openCaategory
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
              >
                Category &nbsp;
                <Image
                  src="/backarrow.svg"
                  width={40}
                  height={40}
                  className={`w-6 h-6  mt-1 sm:block hidden
                ${openCaategory ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {openCaategory ? (
                <div className=" bg-white flex flex-col  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
                  {categoryarr.map(rendercategory)}
                </div>
              ) : null}
            </div>
            {/* dropdown5 */}
            <div>
              <button
                onClick={() => {
                  if (window.innerWidth <= 450) {
                    handleAll();
                    handleTabClick();
                    handleAllType();
                  } else {
                    handleType();
                    handleTabClick();
                  }
                }}
                className={`Tabbtn 
                  ${
                    openType
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
              >
                Type &nbsp;
                <Image
                  src="/backarrow.svg"
                  width={40}
                  height={40}
                  className={`w-6 h-6  mt-1 sm:block hidden
                ${openType ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {openType ? (
                <div className="bg-white  flex flex-col  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
                  {typearr.map(renderType)}

                  <button
                    className={`text-left underline
                  ${openContent ? "hidden" : "block"}
                  `}
                    onClick={handleContent}
                  >
                    +7 more
                  </button>
                  {openContent ? typeContent.map(renderTypeContent) : null}

                  <button
                    onClick={handleContent}
                    className={`text-left underline ${
                      openContent ? "block" : "hidden"
                    }`}
                  >
                    Less
                  </button>
                </div>
              ) : null}
            </div>

            {/* ddropdown6 */}
            <div>
              <button
                onClick={() => {
                  handleAll();
                  handleTabClick();
                }}
                className={`Tabbtn z-0 
                  ${
                    openAll
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
              >
                All Filters &nbsp;
                <Image
                  src="/choserightfloor.svg"
                  width={40}
                  height={40}
                  className={`w-6 h-6  sm:block hidden
                
                
                `}
                  alt=""
                />
              </button>
              {openAll ? (
                <div className="menu-overlay overflow-y-auto bg-white  border-2 fixed  sm:w-[30vw] w-[100vw] sm:h-auto h-[80vh]  right-0 sm:top-16 bottom-0 z-[5000] rounded-2xl">
                  <div className="menu-option bg-white  pt-5  w-[100%] h-[100vh] border-slate-600 z-10">
                    <div className="flex flex-col px-4 gap-6">
                      <div className="flex justify-between gap-32">
                        <p>Filter and sort</p>
                        {/* <IoMdClose size={20} onClick={closeAll} color="black" /> */}

                        <Image
                          src="/close.svg"
                          width={24}
                          height={24}
                          onClick={closeAll}
                          color="black"
                        />
                      </div>
                      <hr />
                      {/* 1stt div */}
                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllsort}
                          className="text-left flex justify-between"
                        >
                          Sort &nbsp;
                          <Image
                            src="/backarrow.svg"
                            width={40}
                            height={40}
                            className={`w-6 h-6  mt-1
                ${openAllsort ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllsort ? (
                          <div className="flex flex-col gap-7">
                            {srtarr.map(renderSortItem)}
                          </div>
                        ) : null}
                      </div>
                      <hr />
                      {/* 2nd div */}

                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllSize}
                          className="text-left flex justify-between"
                        >
                          Size &nbsp;
                          <Image
                            src="/backarrow.svg"
                            width={40}
                            height={40}
                            className={`w-6 h-6  mt-1
                ${openAllSize ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllSize ? (
                          <div className="flex flex-col gap-7">
                            <p className="text-left font-semibold">Width</p>
                            {wdharr.map(rendersizewidth)}

                            <p className="text-left font-semibold">Height</p>
                            {htarr.map(rendersizewidth)}
                          </div>
                        ) : null}
                      </div>
                      <hr />
                      {/* ****************************** */}
                      {/* 3rd div */}
                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllcolor}
                          className="text-left flex justify-between"
                        >
                          Color &nbsp;
                          <Image
                            src="/backarrow.svg"
                            width={40}
                            height={40}
                            className={`w-6 h-6  mt-1
                ${openAllcolor ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllcolor ? (
                          <div className="flex flex-col gap-7">
                            {srtarr.map(renderSortItem)}
                          </div>
                        ) : null}
                      </div>
                      <hr />

                      {/* 4th div */}
                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllCategory}
                          className="text-left flex justify-between"
                        >
                          Category &nbsp;
                          <Image
                            src="/backarrow.svg"
                            width={40}
                            height={40}
                            className={`w-6 h-6  mt-1
                ${openAllCategory ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllCategory ? (
                          <div className="flex flex-col gap-7">
                            {categoryarr.map(rendercategory)}
                          </div>
                        ) : null}
                      </div>
                      <hr />
                      {/* 5th div */}
                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllType}
                          className="text-left flex justify-between"
                        >
                          Type &nbsp;
                          <Image
                            src="/backarrow.svg"
                            width={40}
                            height={40}
                            className={`w-6 h-6  mt-1
                ${openAllType ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllType ? (
                          <div className="flex flex-col gap-7">
                            {typearr.map(renderType)}

                            <button
                              className={`text-left underline
                  ${openContent ? "hidden" : "block"}
                  `}
                              onClick={handleContent}
                            >
                              +7 more
                            </button>
                            {openContent
                              ? typeContent.map(renderTypeContent)
                              : null}

                            <button
                              onClick={handleContent}
                              className={`text-left underline ${
                                openContent ? "block" : "hidden"
                              }`}
                            >
                              Less
                            </button>
                          </div>
                        ) : null}
                      </div>
                      <hr />
                    </div>
                    <div className="pt-10 flex items-center justify-center flex-row gap-3">
                      <button className="w-36 h-14 bg-blue-900 text-white rounded-full">
                        View 96
                      </button>
                      <button className="w-36 h-14 bg-blue-900 text-white rounded-full">
                        Clear all
                      </button>
                    </div>
                  </div>
                  {/* sdm;lsmd */}
                </div>
              ) : null}
            </div>
          </div>

          <hr />
          {/* iimages */}
          <div className="image-product">
            <div className="main-image-pdt pt-[32px] grid sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-0">
              {filterData.map((text, idx) => (
                <div
                  className="flex p-3 flex-col gap-3 hover-divnine sm:border-none border-b border-r"
                  key={idx}
                  onClick={() => handlenav(text._id)}
                >
                  <div className="flex justify-between text-black checkbox-div">
                    <input type="checkbox" />
                    <label htmlFor="">Compare</label>
                  </div>
                  <img src={text.images[0]} alt="" />
                  <p className="text-sm font-semibold">{text.productTitle}</p>
                  <p className="text-sm">{text.productDescription}</p>
                  <p className="text-sm price-box font-semibold  w-28 h-10 bg-yellow-400 flex items-center justify-center">
                    Rs. <span className="text-3xl"> {text.totalPrice}</span>
                  </p>
                  <p className="text-sm flex flex-row gap-1 items-center text-black">
                    {/* <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}

                    <FaStarHalfAlt /> &nbsp;  */}
                    <Image src="/star.svg" alt="star" width={15} height={15} />
                    <Image src="/star.svg" alt="star" width={15} height={15} />
                    <Image src="/star.svg" alt="star" width={15} height={15} />
                    <Image src="/star.svg" alt="star" width={15} height={15} />
                    <Image
                      src="/half-star.svg"
                      alt="star"
                      width={15}
                      height={15}
                    />
                    ({text.count})
                  </p>
                  <div className="flex gap-3 items-center">
                    <Image
                      src="/adtocart.svg"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                      alt=""
                    />
                    {/* <img src={liketocart} className="w-5 h-5" alt="" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
