'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Sidebar from "@/components/sidebar";

const Budget = () => {
    const router = useRouter();

  const prevHandler = () => {
    router.push("/virtualexperience/activities");
  };

  const nextHandler = () => {
    router.push("/virtualexperience/flooring");
  };

  const [selectedPage, setSelectedPage] = useState("budget");
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [selectedActivity, setSelectedActivity] = useState(false);

  const handleClick = (index) => {
 
    if (selectedActivity === index) {
       
        setSelectedActivity(null);
      } else {
     
        setSelectedActivity(index);
      }

  };

  return (
    <div className="pt-4 pb-28 flex flex-col w-full h-full justify-center bg-[#f4e3dd]">
      {/* <Header /> */}
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="grid grid-cols-2 gap-y-4 place-items-center sm:grid-cols-4 mb-10">
        {[
          { label: "$", index: "first" },
          { label: "$$", index: "second" },
          { label: "$$$", index: "third" },
          { label: "$$$$", index: "fourth" },
        ].map(({ label, index }) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={` relative flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 p-5 rounded-t-full rounded-b-full
              ${selectedActivity === index ? " border-2 border-red-500" : ""}
            `}
          >
            {selectedActivity === index && (
              <div className="overlay rounded-full absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}

            <p className="text-lg">{label}</p>

            {selectedActivity === index && (
              <div className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center">
                <div className="circle-container relative flex justify-center items-center">
                  
                  <Image src="/svg/icon/tick.svg" alt="tick" width={30} height={30} className=" opacity-100" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 mt-10">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <p>
            Products Available (728){" "}
            <span>
              {" "}
              <a href="/" className="text-underline underline">
                Skip to results
              </a>{" "}
            </span>
          </p>

          <button
            onClick={nextHandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
