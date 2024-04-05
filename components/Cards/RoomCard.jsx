import React, { useEffect, useState } from "react";

import Image from "next/image";
import TabImage from "../Cards/TabImage";
import banner from "../../public/images/banner.jpg";
import Loading from "../PopUp/Loading";

const RoomCard = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gallary, setGallary] = useState([]);

  const gallaryData = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getnewProductSection`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setGallary(data))
      .catch((error) => console.error("Error fetching images data:", error));

    // console.log("gallary data:", response);
  };

  // console.log(gallary);
  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rooms`;
    gallaryData();
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRoomData(data?.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // console.log("roomData", roomData);
  if (roomData.length === 0) {
    // console.log("No data");
  }

  return (
    <>
      <div className=" w-[78rem] flex justify-between mx-auto my-8">
        <div className=" w-full flex justify-center h-[38rem] ">
          <div className="w-full grid grid-cols-4 gap-4 ">
            {/* 1 */}
            <div className="parent col-start-1 col-end-3 row-start-1 row-end-8">
              {gallary.length > 0 ? (
                <>
                  <div className="parent relative w-full h-[38rem]">
                    <Image
                      className="child object-cover rounded-sm"
                      src={gallary[0].img}
                      layout="fill"
                      alt="Image"
                    />
                    <div className="absolute top-[20rem] left-0 right-0 bottom-0 flex flex-col justify-center items-center p-2">
                      <h2 className="text-white text-center text-3xl  mb-4">
                        Trend asds ffsdfing and Chooses
                      </h2>
                      <button className="bg-black hover:bg-zinc-300 text-white  py-2 px-10 h-12 rounded-full">
                        Offer
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="child w-full h-full bg-gray-300 flex justify-center items-center">
                    <p>Data Loading...</p>
                  </div>
                </>
              )}
            </div>
            {/* 2 */}
            <div className="   parent col-start-3 col-end-4 row-start-1 row-end-4">
              {loading === true ? (
                <>
                  <div className="child w-full h-full bg-gray-300 flex justify-center items-center">
                    <p>Data Loading...</p>
                  </div>
                </>
              ) : (
                <>
                  <TabImage
                    src={roomData[0].imgSrc}
                    alt={`Image  of Children`}
                    width={1000}
                    height={300}
                    labelData={roomData[0].children}
                  />
                </>
              )}
            </div>
            {/* 3 */}
            <div className=" parent col-start-4 col-end-5 row-start-1 row-end-6">
              {loading === true ? (
                <>
                  <div className="child w-full h-full bg-gray-300 flex justify-center items-center">
                    <p>Data Loading...</p>
                  </div>
                </>
              ) : (
                <>
                  <TabImage
                    src={roomData[1].imgSrc}
                    alt={`Image  of Children`}
                    width={1000}
                    height={300}
                    labelData={roomData[1].children}
                  />
                </>
              )}
            </div>
            {/* 4 */}
            <div className=" parent col-start-3 col-end-4 row-start-4 row-end-8">
              {loading === true ? (
                <>
                  <div className="child w-full h-full bg-gray-300 flex justify-center items-center">
                    <p>Data Loading...</p>
                  </div>
                </>
              ) : (
                <>
                  <TabImage
                    src={roomData[2].imgSrc}
                    alt={`Image  of Children`}
                    width={1000}
                    height={300}
                    labelData={roomData[2].children}
                  />
                </>
              )}
            </div>
            {/* 5 */}
            <div className=" parent col-start-4 col-end-5 row-start-6 row-end-8">
              {loading === true ? (
                <>
                  <div className="child w-full h-full bg-gray-300 flex justify-center items-center">
                    <p>Data Loading...</p>
                  </div>
                </>
              ) : (
                <>
                  <TabImage
                    src={roomData[3].imgSrc}
                    alt={`Image  of Children`}
                    width={1000}
                    height={300}
                    labelData={roomData[3].children}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
