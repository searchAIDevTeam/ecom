"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import "../../../components/styles/virtualexperience.css";
import Sidebar from "@/components/sidebar";
import { dataRooms } from "@/Model/data";
const Rooms = () => {
  const router = useRouter();

  const nextHandler = () => {
    if (selectedPage === "vrooms") {
      router.push("/virtualexperience/activities");
    }
  };

  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const [selectedPage, setSelectedPage] = useState("vrooms");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };

  const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
    setSelectedActivity((prevSelectedRooms) => {
      if (prevSelectedRooms[roomId]) {
        const updatedSelectedRooms = { ...prevSelectedRooms };
        delete updatedSelectedRooms[roomId];
        return updatedSelectedRooms;
      } else {
        return {
          ...prevSelectedRooms,
          [roomId]: {
            id: roomId,
            price: roomPrice,
            title: roomTitle,
            image: roomImage,
          },
        };
      }
    });

    setShowCircle((prevShowCircle) => !prevShowCircle);

    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  };

  const addToCart = () => {
    SetIsOPen(true);
    console.log("selectedrooms", selectedActivity);
  };

  return (
    <div className="py-4 relative w-full h-full flex flex-col justify-center bg-[#f4e3dd]">
      {/* <Header /> */}

      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      <Image
        src="/svg/icon/adtocart.svg"
        width={30}
        height={30}
        onClick={() => {
          addToCart();
          setShowbuttoncontent(false);
        }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
        {dataRooms.map((item) => (
          <div
            key={item.id}
            className=" relative  overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                handleClick(item.id, item.img, item.price, item.title);
                handleSelect();
              }}
              className={`room-item rounded-2xl object-cover w-full opactiy-100 h-full block p-1
             
            ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${
                selectedActivity[item.id] ? " border-2 border-red-500 " : ""
              }

              `}
            />

            <h3
              className={` p-1 rounded-sm absolute right-0 bottom-0
              ${
                selectedActivity[item.id]
                  ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                  : "bg-white"
              }
              `}
            >
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center">
                <div className="circle-container relative flex justify-center items-center">
                  <Image
                    src="/svg/icon/tick.svg"
                    alt="tick"
                    width={30}
                    height={30}
                    className=" opacity-100"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
    </div>
  );
};

export default Rooms;
