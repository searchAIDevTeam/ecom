'use client'
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { colorTiles } from "@/Model/data";
import Sidebar from "@/components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectVirtualData } from "@/components/Features/Slices/virtualSlice";
import { allSelectedData, selectBudget, selectCategory, selectColor, selectData, selectSelectiveProduct, selectStyle, setSelectedColor } from "@/components/Features/Slices/virtualDataSlice";

const Content2 = () => {
    const router = useRouter();
    const search = useSearchParams();
    const [data, setData] = useState([]);
    const dataSelector = useSelector(selectVirtualData);
    useEffect(() => {
      if(dataSelector===null||dataSelector===undefined||dataSelector.length===0){
        router.push("/virtualexperience/category");
      }
      else{
        let tempData = dataSelector?.filter((item) => item.category===search.get("category")?.toLocaleLowerCase());
        setData(tempData);
      }

    }, []);
  const prevHandler = () => {
    router.push("/virtualexperience/flooring");
  };
  const nextHandler = () => {
    router.push("/prodcut/virtualexperience/test");
  };

  
  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };
  const dispatch = useDispatch();
  const handleClick = (roomId,roomTitle) => {
    setSelectedActivity((prevSelectedRooms) => {
      const updatedSelectedRooms = {
        ...prevSelectedRooms,
        [roomId]: !prevSelectedRooms[roomId],
        [roomTitle]: !prevSelectedRooms[roomTitle],
      };
      dispatch(setSelectedColor(updatedSelectedRooms));
      return updatedSelectedRooms;
    });
    setShowCircle(!showCircle);
    setShowbuttoncontent(!showbuttoncontent);
  };

  const [selectedPage, setSelectedPage] = useState("content5");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };
  
  
  return (
    <div className="py-4 w-full h-full pb-4 bg-[#f4e3dd] text-sm">
      {/* <Header /> */}
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="grid grid-cols-4 sm:grid-cols-6 sm:gap-x-20 gap-x-7 gap-y-10  m-4 items-center justify-center ">
        {data?.[0]?.color.map((item) => (
          <div
            key={item.title}
            className="relative  overflow-hidden flex items-center justify-center flex-col"
          >
            {selectedActivity[item.title] && (
              <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}
            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                handleClick(item.title, item._id);
                handleSelect();
              }}
              className={`flex items-center justify-center rounded-full  relative p-1  w-12 h-12 
              
                    ${
                      selectedActivity[item.title]
                        ? " border-2 border-red-500"
                        : ""
                    }
              `}
            />
            <p>{item.title}</p>

            {selectedActivity[item.title] && (
              <div
                className="room-item absolute top-2 right-12 z-10  flex items-center opacity-50 justify-center"
               
              >
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

export default Content2;
