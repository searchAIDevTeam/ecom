import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { links } from "./images-links";
import Collections from "../Dropitems/Collections";
import Styles from "../Dropitems/Styles";
import Colours from "../Dropitems/Colours";
import Rooms from "../Dropitems/Rooms";
import Featured from "../Dropitems/Featured";
import { useRouter } from "next/navigation";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  const router = useRouter();

  const handleDropdownClick = (event, idx) => {
    event.stopPropagation();
    if (activeDropdown === idx) {
      setActiveDropdown(null);
    } else {
      setSelectedFilter(idx);
      setActiveDropdown(idx);
    }
  };

  // function getLabelMargin(label) {
  //   const marginMap = {
  //     "Wallpaper": "ml-[17rem] mr-[-4rem]",
  //     "Flooring": "mr-[-5rem]",
  //     "Curtains": "mr-[-5rem]",
  //     "Blinds": "mr-[-5rem]",
  //     "Hardwood": "ml-[-1px] mr-[-4rem]",
  //     "Inspiration": "mr-[-4rem]",
  //     "Lakewood": "mr-[-4rem]",
  //   };
  //   return marginMap[label] || "block";
  // }

  const slide = (shift) => {
    const targetScroll = scrl.current.scrollLeft + shift;

    scrl.current.scrollTo({
      left: targetScroll,
      behavior: "smooth", // Use smooth scrolling
    });

    setScrollX(targetScroll);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`absolute top-16 w-full  filter-array transition-all ease-in-out duration-300  z-[20] bg-white
      `}
    >
      <div className="filter sm:mr-0 pr-20 media" style={{ marginLeft: "0px" }}>
        <div className="Filter-array" ref={scrl}>
          <div
            className={` slider_lr_container arrow-left  ${
              scrollX === 0 ? "hidden" : ""
            }`}
          >
            {/* <img
              src={backarrow}
              alt=""
              className="riht-arrow-sty"
              onClick={() => slide(-250)}
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            /> */}
          </div>
          {links.map((value, idx) => (
            <div
              key={idx}
              className={`Filter-array-element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ent ${
                idx === selectedFilter ? "selected-array-element" : ""
              }`}
              {...(!isMobile
                ? { onClick: (event) => handleDropdownClick(event, idx) }
                : { onClick: () => navigate(`/${value.label}`) })}
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {value && (
                <p
                  className={` sm:text-base text-sm Filter-array-element-lebel sm:block rounded-full flex items-center justify-center mx-2 sm:bg-white bg-gray-100 whitespace-nowrap ${
                    value.label === "Find Floor" ? "sm:hidden hidden" : "block"
                  }
  ${value.label === "Sport & Gyn Flooring" ? " w-40 h-8" : "w-20 h-6"}
  `}
                >
                  {value.label}
                </p>
              )}
              {/* {value && (
                <p className="Filter-array-element-lebel">{value.label}</p>
              )} */}

              {activeDropdown === idx && (
                <div
                  className="absolute dropdown-content top-7 left-0 mt-10 w-full bg-white shadow-md flex flex-col
                 transition-all ease-linear duration-2000 
                  "
                  onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >
                  <div className="px-[50px] my-5">
                    <div className="filter_container flex gap-32">
                      <div className="grid grid-cols-6">
                        <div className="col-span-2">
                          <Featured />
                        </div>
                        <div className="col-span-1 ml-[-40px]">
                          <Collections />
                        </div>
                        <div className="col-span-1">
                          <Styles />
                        </div>
                        <div className="col-span-1">
                          <Colours />
                        </div>
                        <div className="col-span-1">
                          <Rooms />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* <div className="slider_lr_container arrow-right-filter">
             <img
              src={rightarrow}
              alt=""
              className="riht-arrow-sty"
              onClick={() => slide(+250)}
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            /> 
          </div> */}
        </div>
        {/* <div className="after-arrow sm:block hidden">
           <div className="at h-[40px]">
            <img src={filter} alt="" className="seachbar-div2-icon" />
            Filters
          </div> 
           <Link to="/magazine">
            <div className="at">
              {" "}
              <img
                src={choserightfloor}
                alt=""
                className="seachbar-div2-icon"
              />{" "}
              Find the Right Floor
            </div>
          </Link> 
        </div> */}
        <div className="sm:hidden block">
          {/* <Link to="/magazine">
            <div className="at">
              {" "}
              <img
                src={choserightfloor}
                alt=""
                className="seachbar-div2-icon"
              />{" "}
              
            </div>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Filter;
