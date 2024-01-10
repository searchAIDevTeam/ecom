"use client";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { links } from "./images-links";
import { useRouter } from "next/navigation";
import CategoryContent from "../molecules/CategoryContent";
import FeaturedContent from "../molecules/FeaturedContent";
import { wallpaperFeaturedData } from "@/Model/Dropdown/FeaturedData/WallpaperFeaturedData";
import { wallpaperCategoryData } from "@/Model/Dropdown/CategoryData/WallpaperCategoryData";

function Filter({ isFilterHovered, onFilterHover }) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isBlur, setIsBlur] = useState(false);
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
  
  const handleFilterHover = (category) => {
    // const filteredContent = fetchFilteredContent(category);
    onFilterHover(category);
    // console.log("category is ",category)
    // console.log("isFilterHovered is ",isFilterHovered)
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

  //This data is not being used and might not be used from now on, so commenting it out
  // const collections = [
  //   "Fornasetti Senza Tempo II",
  //   "The Gardens",
  //   "Stella McCartney x Cole & Son",
  //   "Ardmore - Jabula",
  //   "Fornasetti",
  // ];

  //This data is not being used and might not be used from now on, so commenting it out
  // const styles = ["Animals", "Borders", "Conversational", "Damask", "Floral"];
  // const rooms = ["Lounge", "Kitchen", "Powder Room", "Bedroom", "Office"];

  const slide = (shift) => {
    const targetScroll = scrl.current.scrollLeft + shift;

    scrl.current.scrollTo({
      left: targetScroll,
      behavior: "smooth", // Use smooth scrolling
    });

    setScrollX(targetScroll);
  };
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 450
  );

  useEffect(() => {
    // Update isMobile state on window resize
    if (window) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 450);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <header
      className={`absolute top-20 w-full  filter-array transition-all ease-in-out duration-300  z-[20] bg-white
      ${isFilterHovered ? "backdrop-blur-lg" : ""}  
      `}
    >
      <div className="filter sm:mr-0 media" style={{ marginLeft: "0px" }}>
        <div className="Filter-array" ref={scrl}>
          <div
            className={` slider_lr_container arrow-left  ${
              scrollX === 0 ? "hidden" : ""
            }`}
          >
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
              onMouseEnter={() => {
                setActiveDropdown(idx);
                console.log(idx);
                setIsBlur(true);
                handleFilterHover(value.label);
                console.log(isBlur);
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {value && (
                <p
                  className={` sm:text-base text-sm Filter-array-element-lebel sm:block rounded-full flex items-center justify-center mx-2 sm:bg-white bg-gray-100 whitespace-nowrap ${
                    value.label === "Find Floor" ? "sm:hidden hidden" : "block"
                  }

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
                  className={`absolute left-0 mt-10 w-full bg-white shadow-md flex flex-col transition-all ease-linear duration-2000
                  ${isBlur ? " backdrop-blur-lg" : ""}  
                  `}
                  onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >
                  <div className="px-[50px] my-5">
                    <div className="filter_container flex">
                      <div className=" grid grid-cols-6 gap-10">
                        <div className="col-span-2">
                          <FeaturedContent 
                            featuredData={wallpaperFeaturedData} 
                            verticalSpacingBetween="space-y-8" 
                            imageWidth={200}
                            imageHeight={200}
                            textSize="text-xl"
                            textStyle="font-semibold"
                            parentCategory ={value.label}/>
                        </div>
                        {wallpaperCategoryData.map((category) => {
                          return (
                            <div className="col-span-1">
                              <CategoryContent
                                categoryHeading={category.categoryHeading}
                                categoryData={category.categoryData}
                                parentCategory ={value.label}
                                categoryGap="space-x-5"
                                headingColor="text-gray-500"
                                headingStyle="font-bold"
                                headingSize="text-md"
                                gapHeadingItems="space-y-8"
                                itemsGap="space-y-6"
                                textColor="text-black"
                              />
                            </div>
                          );
                        })}
                        {/* <div className="col-span-1"></div>
                        <div className="col-span-1">
                          <CategoryContent
                            categoryHeading={"SHOP BY STYLES"}
                            categoryData={styles}
                          parentCategory ={value.label}
                            categoryGap="space-x-5"
                            headingColor="text-gray-500"
                            headingStyle="font-bold"
                            headingSize="text-md"
                            gapHeadingItems="space-y-14"
                            itemsGap="space-y-6"
                            textColor="text-black"
                          />
                        </div>
                        <div className="col-span-1">
                          <Colours parentCategory ={value.label} categoryHeading={"SHOP BY ROOMS"} 
                          categoryData={rooms} />
                        </div>
                        <div className="col-span-1">
                          <CategoryContent
                            categoryHeading={"SHOP BY ROOMS"}
                            categoryData={rooms}
                          parentCategory ={value.label}
                            categoryGap="space-x-5"
                            headingColor="text-gray-500"
                            headingStyle="font-bold"
                            headingSize="text-md"
                            gapHeadingItems="space-y-14"
                            itemsGap="space-y-6"
                            textColor="text-black"
                          />
                        </div> */}
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
