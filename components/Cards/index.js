// import Card from "./card";
// import { list } from "../../assets/cards-list";
// import Offer from "../../assets/salesoffer.jpg";
import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import PopUp from "../Reviews/PopUp";
import "./styles.css";
import MainSlider from "../MainSlider/MainSlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
// import {
//   Pagination,
//   Scrollbar,
//   Mousewheel,
//   FreeMode,
// } from "swiper/modules";
// import "react-loading-skeleton/dist/skeleton.css";
// import Imagechanger from "../Imagechanger/Imagechanger";
// import Skeleton from "react-loading-skeleton";
// import Skeletoncard from "../Skeleton/Skeletoncard";
// import { useDispatch, useSelector } from "react-redux";
// import { selectRecommendedProduct } from "../../Features/Slices/recommendationSlice";
// import Doublecard from "../Doublecard/Doublecard";
// import Multicard from "../Imagechanger/Multicard";
// import Footer from "../Footer";
import Tabs from "./Tabs";
import Profile from "./Profile";
// import Image from "../Imagechanger/Image";
import Phone from "./Phone";
import DoubleComp from "./DoubleComp";
// import { CardData } from "../../Features/Slices/FIrstCardSlice";
// import { selectSliderData } from "../../Features/Slices/sliderSlice";
import { useMemo } from "react";
import Trending from "./Trending";
import Flooring from "./Flooring";
import Blinds from "./Blinds";
import Curtains from "./Curtains";
import Sports from "./Sports";

function Cards() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  // const handleImageClick = () => {
  //   setPopupVisible(true);
  // };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const [trendingData, setTrendingData] = useState([]);

  // useEffect(() => {
  //   setTrendingData(trendingSelect);
  // }, [trendingSelect]);
  // console.log(trendingSelect);
  // const recommendedProducts = useSelector(selectRecommendedProduct);
  const recommendedProductsDataFromLocalStorage = JSON.parse(
    localStorage.getItem("recommendedProducts")
  );

  // useEffect(() => {
  //   if (recommendedProductsDataFromLocalStorage !== recommendedProducts) {
  //     localStorage.setItem(
  //       "recommendedProducts",
  //       JSON.stringify(recommendedProducts)
  //     );
  //   }
  // }, [recommendedProducts]);

  function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
  }
  useEffect(() => {
    const datax = localStorage.getItem("recommendedProducts");
    const x = JSON.stringify(datax);
    console.log(datax);
  }, []);

  //memo hook
  const MemoizedMainSlider = useMemo(() => <MainSlider />, []);
  const MemoizedProfileContent = useMemo(() => <Profile />, []);
  const MemoizedTrendingProducts = useMemo(() => <Trending />, []);
  return (
    <div className="">
      {MemoizedMainSlider}
      {MemoizedTrendingProducts}
      <div className="h-40 my-10 sm:px-[50px] px-[50px]">
        <img
          src="/images/salesoffer.jpg"
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      {/* 1st */}
      {/* <Image /> */}

      <Flooring />
      <Blinds />
      <Curtains />
      <Sports />

      {/* <Multicard /> */}
      {/* removed for overlape sm:h-[80vh] */}
      <div className="w-full bg-zinc-100 sm:px-[50px] px-[20px] py-20  h-auto">
        {/* <Imagechanger /> */}
      </div>
      <DoubleComp />
      {MemoizedProfileContent}
      <Tabs />
      <Phone />
    </div>
  );
}
export default Cards;
