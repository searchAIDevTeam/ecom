'use client'
import Card from "@/components/Room/Other/Card";
import Reviews from "@/components/Room/Other/Reviews";
import RoomImageList from "@/components/Room/RoomImageList";
import RoomInfo from "@/components/Room/RoomInfo";
import React, { useEffect, useState } from "react";
import ImageCaresoul from "@/components/Room/imagecaresoul";
// import Card from "../components/Room/Other/Card";
const RoomPage = () => {
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);

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
              <RoomImageList />
              <ImageCaresoul />
              {/* <div className="sm:hidden flex">
                <Card/>
              </div> */}
              <RoomInfo />
            </div>
            <div className="sm:basis-1/3 flex flex-col  ">
              <div className="sm:sticky flex top-12 mb-16 ml-0">
                <Card />
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
