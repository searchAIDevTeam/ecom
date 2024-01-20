"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/virtualexperience.css";
import { dataRooms } from "@/Model/data";
import { datarooms, dataTiles, colorTiles } from "@/Model/sampledata";

const FreeSample = () => {

  const [selectedActivity, setSelectedActivity] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);
  const [count, setCount] = useState(0);

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

    // Toggle showCircle state
    setShowCircle((prevShowCircle) => !prevShowCircle);
    // Toggle showButtonContent state
    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);

    // Update selectedImage state
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === roomImage ? null : roomImage
    );
  };

  const handleres = (roomId, roomPrice, roomTitle, roomImage) => {
    setSelectedActivity((prevSelectedRooms) => {
      if (prevSelectedRooms[roomId]) {
        // Unselect the room
        const updatedSelectedRooms = { ...prevSelectedRooms };
        delete updatedSelectedRooms[roomId];

        // Decrease the count
        setCount((prev) => prev - 1);
        return updatedSelectedRooms;
      } else {
        // Select the room
        setCount((prev) => prev + 1);

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

    // Toggle showCircle state
    setShowCircle((prevShowCircle) => !prevShowCircle);

    // Toggle showButtonContent state
    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  };
  const router = useRouter();
  const handleAddress = () => {
    router.push('/cart')
  }

  return (
    <div className='m-[3rem]'>
      <div className='relative'>
        <Image src='/customerservice/shoppingInfo/shop.avif' height={500} width={1200} alt='sample' className='h-[34rem] relative flex' />
        <div className='absolute top-0 left-0 flex flex-col w-1/4 bg-zinc-100 h-max m-8 p-12'>
          <div className='text-4xl font-bold mb-4'>Free<br />Samples</div>
          <div className='mb-8'>There is a floor for every style and budget and finding the right one has never been easier
            with our free flooring samples. We offer hundreds of samples to choose from, making it easy to
            find the right floor.</div>
          <div><button className='bg-stone-700 rounded-md text-white pl-5 pr-5 pt-3 pb-3 text-sm'>SHOP FREE SAMPLES</button></div>
        </div>
      </div>
      <div className='mt-12'>
        <div>
          <div className='text-3xl font-bold flex justify-center items-center'>Shop Flooring by Category</div>
          <div className="py-4 relative w-full h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
              {datarooms.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
                >
                  {/* Your existing code for displaying room item images */}
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => {
                      handleClick(item.id, item.img, item.price, item.title);
                    }}
                    className={`room-item rounded-2xl object-cover w-full opacity-100 h-full block p-1
                  ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${selectedActivity[item.id] ? " border-2 border-black " : ""
                      }`}
                  />

                  {/* Your existing code for displaying room item title */}
                  <h3
                    className={`p-1 rounded-sm absolute right-0 bottom-0
                  ${selectedActivity[item.id]
                        ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                        : "bg-white"
                      }`}
                  >
                    {item.title}
                  </h3>

                  {/* Your existing code for displaying the tick icon */}
                  {selectedActivity[item.id] && (
                    <div className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center">
                      <div className="circle-container relative flex justify-center items-center">
                        <Image
                          src="/svg/icon/tick.svg"
                          alt="tick"
                          width={30}
                          height={30}
                          className="opacity-100"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Display the selected image at the bottom */}
          {/* {selectedImage && (
        <div className="selected-image-container">
          <img src={selectedImage} alt="Selected Image"/>
        </div>
      )} */}
        </div>
      
      {/* shop by room */}
        <div>
          <div className='text-3xl font-bold flex justify-center items-center mt-12'>Shop Flooring by Room</div>
          <div className="py-4 relative w-full h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
              {dataTiles.map((item) => (
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
             
            ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${selectedActivity[item.id] ? " border-2 border-black " : ""
                      }

              `}
                  />

                  <h3
                    className={` p-1 rounded-sm absolute right-0 bottom-0
              ${selectedActivity[item.id]
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
          </div>
        </div>

      {/* shop by color */}

        <div>
          <div className='text-3xl font-bold flex justify-center items-center mt-12'>Shop Flooring by Color</div>
          <div className="py-4 relative w-full h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
              {colorTiles.map((item) => (
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
             
            ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${selectedActivity[item.id] ? " border-2 border-black " : ""
                      }

              `}
                  />

                  <h3
                    className={` p-1 rounded-sm absolute right-0 bottom-0
              ${selectedActivity[item.id]
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
          </div>
        </div>

      {/* selected data */}
      <div>
  <div className='text-xl font-bold flex justify-center items-center mt-12'>
    Styles we think you'll love
  </div>
  <div className="flex flex-row sticky top-0 pt-3 pb-2 bg-white z-10">
    <div className="text-red-400">*Select at least 4 images to proceed</div>
    <button
      className={`ml-auto text-white rounded-full pt-2 pb-2 pl-4 pr-4 ${
        count < 8 ? 'bg-gray-200' : 'bg-black'
      }`}
      disabled={count < 8}
      onClick={handleAddress}
    >
      Address
    </button>
  </div>
          {selectedImage ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
              {dataRooms.map((item) => (
                <div
                  key={item.id}
                  className=" relative  overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => {
                      handleres(item.id, item.img, item.price, item.title);
                      handleSelect();
                    }}
                    className={`room-item rounded-2xl object-cover w-full opactiy-100 h-full block p-1
             
            ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${selectedActivity[item.id] ? " border-2 border-black " : ""
                      }

              `}
                  />

                  <h3
                    className={` p-1 rounded-sm absolute right-0 bottom-0
              ${selectedActivity[item.id]
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
          ) : (<div></div>)}

        </div>
      </div>
    </div>
  )
}

export default FreeSample
