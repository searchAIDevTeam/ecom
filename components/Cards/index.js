"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useMemo } from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
// import Imagechanger from "../Imagechanger/Imagechanger";
const Imagechanger = dynamic(() => import("../Imagechanger/Imagechanger"));
// import Multicard from "../Imagechanger/Multicard";
const Multicard = dynamic(() => import("../Imagechanger/Multicard"));
// import Footer from "../Footer";
// import Tabs from "./Tabs";
const Tabs = dynamic(() => import("./Tabs"));
// import Profile from "./Profile";
const Profile = dynamic(() => import("./Profile"));
// import Image from "../Imagechanger/Image";
const Image = dynamic(() => import("../Imagechanger/Image"));
// import Phone from "./Phone";
const Phone = dynamic(() => import("./Phone"));
// import DoubleComp from "./DoubleComp";
const DoubleComp = dynamic(() => import("./DoubleComp"));
// import Trending from "./Trending";
const Trending = dynamic(() => import("./Trending"));
// import Dataslider from "./Dataslider";
const Dataslider = dynamic(() => import("./Dataslider"));
// import NewMainSlider from "../MainSlider/NewMainSlider";
const NewMainSlider = dynamic(() => import("../MainSlider/NewMainSlider"));

function Cards() {

  const [recommended, setRecommended] = useState([]);

  if (typeof window !== "undefined") {
    var id = localStorage.getItem("deviceId");
  }
  useEffect(() => {
    // setDeviceId(id);
    const getRecommendedData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getRecommendation?deviceId=${id}`
      );
      setRecommended(response.data);
    };

    getRecommendedData();
  }, []);

  const Partdata = (cat) => {
    return recommended?.products?.filter((item) => item.category === `${cat}`);
  };
  const categories = recommended?.products?.map((item) => item.category);
  let uniqueCategories = [...new Set(categories)];

  //memo hook
  const MemoizedMainSlider = useMemo(() => <NewMainSlider />, []);
  const MemoizedProfileContent = useMemo(() => <Profile />, []);
  const MemoizedTrendingProducts = useMemo(() => <Trending />, []);
  const datasliderRefs = useRef([]);
  useEffect(() => {
    datasliderRefs.current = uniqueCategories.map(() => React.createRef());
  }, [uniqueCategories]);
  return (
    <div className="">
      {MemoizedMainSlider}
      {MemoizedTrendingProducts}
      <div className="h-40 my-10 sm:px-[50px] px-[50px]">
        <img
          src="/images/salesoffer.webp"
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      {/* 1st */}
      <Image />
      {uniqueCategories?.map((item, index) => {
        return (
          // // <Dataslider
          // //   key={`dataslider-${index}`}
          // //   category={item}
          // //   sliderIndex={index}
          // //   data={Partdata(item)}
          // //   ref={datasliderRefs.current[index]} // Pass the ref to Dataslider
          // />
          <p>hi</p>
        );
      })}

      <Multicard />
      {/* removed for overlape sm:h-[80vh] */}
      <div className="w-full sm:px-[50px] px-[20px] py-20  h-auto">
        <Imagechanger />
      </div>
      <DoubleComp />
      {MemoizedProfileContent}
      <Tabs />
      <Phone />
    </div>
  );
}
export default Cards;
