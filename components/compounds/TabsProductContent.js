"use client";

import React from "react";
import "@/components/Product/styles.css";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const TabsProductContent = (props) => {
  const {
    key,
    commonClasses,
    filterName,
    isFilterOpen,
    handleAll,
    handleTabClick,
    handleFilter,
    handleAllFilter,
    filterArr,
    renderFilter,
    openContent,
    handleContent,
    typeContent,
    renderTypeContent,
    stickyDrop,
  } = props;

  return (
    <div>
      <Popover
        placement="bottom-start"
        isOpen={isFilterOpen}
        onOpenChange={() => {
          if (typeof window !== "undefined" && window.innerWidth <= 450) {
            handleAll();
            handleTabClick();
            handleAllFilter();
          } else {
            handleFilter();
            handleTabClick();
          }
        }}
        className={`${stickyDrop}`}
      >
        <PopoverTrigger>
          <button
            className={`
                      ${
                        isFilterOpen
                          ? `active-tabs  border border-black ${commonClasses}`
                          : `tabS  border border-white ${commonClasses}`
                      }
                      ${() =>
                        typeof window !== "undefined" &&
                        window.innerWidth <= 450
                          ? " justify-center"
                          : " justify-between"}
                      `}
          >
            {filterName} &nbsp;
            <Image
              src="/svg/dropdown/backarrow.svg"
              width={40}
              height={40}
              className={`w-6 h-6  mt-1 sm:block hidden
                    ${isFilterOpen ? " rotate-90" : "-rotate-90"}
                    
                    `}
              alt=""
            />
          </button>
        </PopoverTrigger>

        <PopoverContent>
          {isFilterOpen ? (
            <div className="flex flex-col px-5 py-5 overflow-y-auto bg-white border gap-7 rounded-2xl w-72 h-80">
              {filterArr.map(renderFilter)}
              {filterName === "Type" ? (
                <button
                  className={`text-left underline
                      ${openContent ? "hidden" : "block"}
                      `}
                  onClick={handleContent}
                >
                  +7 more
                </button>
              ) : null}
              {openContent ? typeContent.map(renderTypeContent) : null}

              {filterName === "Type" && openContent ? (
                <button
                  onClick={handleContent}
                  className={`text-left underline ${
                    openContent ? "block" : "hidden"
                  }`}
                >
                  Less
                </button>
              ) : null}
            </div>
          ) : null}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TabsProductContent;
