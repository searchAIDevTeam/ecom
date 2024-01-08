'use client'
import Card from "@/components/Room/Other/Card";
import Reviews from "@/components/Room/Other/Reviews";
import RoomImageList from "@/components/Room/RoomImageList";
import RoomInfo from "@/components/Room/RoomInfo";
import React, { useEffect, useState } from "react";
import ImageCaresoul from "@/components/Room/imagecaresoul";
import axios from "axios";
const RoomPage = ({params}) => {
  let url = "http://43.204.166.53:8080/api/getSingleProduct?id="
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
   const getRoomData = async () => {
    const response = await axios.get(`${url}${params.id}`);
    setData(response.data);
    console.log("room response ",response.data)
    }
    getRoomData();
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHowMuchScrolled(window.scrollY);
      } else {
        setHowMuchScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [howMuchScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  return (
    <>
      <div className="container-rooms flex sm:block items-center ">
        {/* {isFilterVisible && <Header />} */}
        <div className="sm:px-[50px] px-[20px] mt-[65px]">
          <div className="flex sm:flex-row flex-col">
            <div className="sm:basis-2/3 flex flex-col  sm:flex-grow">
              <RoomImageList images={data.images} />
              <ImageCaresoul />
              {/* <div className="sm:hidden flex">
                <Card/>
              </div> */}
              <RoomInfo data={data} />
            </div>
            <div className="sm:basis-1/3 flex flex-col  ">
              <div className="sm:sticky flex top-12 mb-16 ml-0">
                <Card data={data} />
              </div>
            </div>
          </div>
         
            <Reviews />
{/*           
            <Mobileswiper/> */}
           
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default RoomPage;
