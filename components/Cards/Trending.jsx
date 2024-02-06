import Card from "./card";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopUp from "../Reviews/PopUp";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import {
  Pagination,
  Navigation,
  Scrollbar,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import axios from "axios";

const Trending = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleImageClick = () => {
    setPopupVisible(true);
  };
  const [trendingData, setTrendingData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trending-products`
      );
      setTrendingData(response.data);
      setLoading(false);
    };
    if(trendingData.length===0){
      fetchData();
      //Why is this function being called again
      //when there is a condition that it should only fetch when array length is 0
      //trending Data length is zero everytime
      // console.log("trending fetch function called")
    }
  }, []);
  const swiperUseref = useRef(null);
  const swiperOptions2 = {
    slidesPerView: 4.08,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  return (
    <div>
      <div className="pt-12  mb-20  bg-white sm:px-[50px] px-[20px]">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl">
            {trendingData && trendingData.length === 0
              ? "Trending Products(Empty)"
              : "Trending Product"}
          </h2>
          <div className="Slidenav flex  bg-white text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper1Ref.current.swiper.slidePrev()}
              className="custom-prev-button bg-slate-500  rounded-full  hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <Image src="/svg/dropdown/leftvector.svg" height={10} width={10} alt="arrow" />
            </div>
            <div
              onClick={() => swiper1Ref.current.swiper.slideNext()}
              className="custom-next-button bg-slate-500  rounded-full hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <Image
                src="/svg/dropdown/rightvector.svg"
                height={10}
                width={10}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <PopUp isPopupVisible={isPopupVisible} closePopup={closePopup} />
        <Swiper
          ref={swiper1Ref}
          {...swiperOptions2}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          freeMode={{
            enabled: false,
            sticky: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 1,
            },

            // 640: {
            //   slidesPerView: 1.25,
            //   spaceBetween: 5,
            // },
            1024: {
              slidesPerView: 4.07,
              spaceBetween: 1,
            },
          }}
          allowSlideNext={true}
          allowSlidePrev={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          onSwiper={setSwiperRef}
          className="px-10"
        >
          {!trendingData ? (
            <SwiperSlide>
              <div className="flex"></div>
            </SwiperSlide>
          ) : (
            trendingData.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className="">
                  <div className="grid grid-cols-1 mt-2 w-full  h-full fade-in ">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.perUnitPrice}
                      desc={product.productTitle}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      id={product._id}
                      productId={product.productId}
                      setPopupVisible={setPopupVisible}
                      cssClass={"card1flex"}
                    />
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
