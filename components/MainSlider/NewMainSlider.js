import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
SwiperCore.use([Autoplay, Navigation]);
import { selectSliderData } from "../Features/Slices/sliderSlice";

export default function NewMainSlider() {
  const dispatch = useDispatch();
  const SliderViewData = useSelector(selectSliderData);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!SliderViewData || SliderViewData.length === 0) {
      fetchData();
      console.log("mainslider data fetched")
    }
  }, [page]);
  const fetchData = () => {
    dispatch({
      type: "FETCH_SLIDER_VIEW_REQUEST",
      payload: {
        page: page,
        limit: 4,
      },
    });
  };
  const [sliderApiData, setSliderApiData] = useState([]);
  useEffect(() => {
    if (SliderViewData && SliderViewData.result) {
      setSliderApiData(SliderViewData.result);
    }
  }, [SliderViewData]);
  const router = useRouter();
  const handleTab = () => {
    router.push("/room");
  };
  const [hov, setHov] = React.useState(false);
  const handleEnter = () => {
    setHov(true);
  };
  const handleLeave = () => {
    setHov(false);
  };
  return (
    <div>
      <Swiper
        className="swiper-slider"
        centeredSlides={true}
        grabCursor={true}
        // freeMode={false}
        loop={true}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        style={{
          marginLeft: -60,
        }}
        // Enabled autoplay mode
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // If we need navigation
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        // Responsive breakpoints
        breakpoints={{
          412: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 1.25,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 1.72,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide key={sliderApiData[0]?._id}>
          <div className="relative group sm:h-[425px] h-[200px]">
            <Image
              src={sliderApiData[0]?.imgSrc}
              width={500}
              height={330}
              alt="Swiper"
              className="swiper-slide"
            />
            <div className="absolute bottom-4 left-4 flex text-lg text-white">
              {sliderApiData[0]?.imgTitle}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div onMouseEnter={handleEnter} className="cursor-pointer">
                <div className="carcular-conui top-28 left-40 absolute rounded-full w-[30px] h-[30px]">
                  <div className=" bg-white h-3 w-3 absolute rounded-full carcular-ui"></div>
                </div>
              </div>
              {hov && (
                <div
                  className={`flex-row z-10 p-2 sm:-ml-[350px] sm:-mt-[100px] flex items-center pb-3 bg-white cursor-pointer`}
                  onClick={handleTab}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex flex-row relative">
                    <div
                      className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                      key={sliderApiData[0]?._id}
                    >
                      <h2 className="font-bold pt-1 pr-2">
                        {sliderApiData[0]?.circles[0].circles[0].productTitle}
                      </h2>
                      <p className="font-normal pb-2">
                        {
                          sliderApiData[0]?.circles[0].circles[0]
                            .productCategory
                        }
                      </p>
                      <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                        ₹{sliderApiData[0]?.circles[0].circles[0].productPrice}
                      </p>
                    </div>
                    <div className="absolute right-0 top-0 border-l border-gray-200 flex justify-end items-center h-full pr-1">
                      <Image
                        className="flex ml-2"
                        src="/icon/arrow_right.svg"
                        height={20}
                        width={20}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={sliderApiData[1]?._id}>
          <div className="relative group sm:h-[425px] h-[200px]">
            <Image
              src={sliderApiData[1]?.imgSrc}
              width={500}
              height={330}
              alt="Swiper"
              className="swiper-slide"
            />
            <div className="absolute bottom-4 left-4 flex text-lg text-white">
            {sliderApiData[1]?.imgTitle}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div onMouseEnter={handleEnter} className="cursor-pointer">
                <div className="carcular-conui top-28 left-40 absolute rounded-full w-[30px] h-[30px]">
                  <div className=" bg-white h-3 w-3 absolute rounded-full carcular-ui"></div>
                </div>
              </div>
              {hov && (
                <div
                  className={`flex-row z-10 p-2 sm:-ml-[350px] sm:-mt-[100px] flex items-center pb-3 bg-white cursor-pointer`}
                  onClick={handleTab}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex flex-row relative">
                    <div
                      className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                      key={sliderApiData[1]?._id}
                    >
                      <h2 className="font-bold pt-1 pr-2">
                        {sliderApiData[1]?.circles[0].circles[0].productTitle}
                      </h2>
                      <p className="font-normal pb-2">
                        {sliderApiData[1]?.circles[0].circles[0].productTitle}
                      </p>
                      <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                        {sliderApiData[1]?.circles[0].circles[0].productTitle}
                      </p>
                    </div>
                    <div className="absolute right-0 top-0 border-l border-gray-200 flex justify-end items-center h-full pr-1">
                      <Image
                        className="flex ml-2"
                        src="/icon/arrow_right.svg"
                        height={20}
                        width={20}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={sliderApiData[2]?._id}>
          <div className="relative group sm:h-[425px] h-[200px]">
            <Image
              src={sliderApiData[2]?.imgSrc}
              width={500}
              height={330}
              alt="Swiper"
              className="swiper-slide"
            />
            <div className="absolute bottom-4 left-4 flex text-lg text-white">
            {sliderApiData[2]?.imgTitle}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div onMouseEnter={handleEnter} className="cursor-pointer">
                <div className="carcular-conui top-28 left-40 absolute rounded-full w-[30px] h-[30px]">
                  <div className=" bg-white h-3 w-3 absolute rounded-full carcular-ui"></div>
                </div>
              </div>
              {hov && (
                <div
                  className={`flex-row z-10 p-2 sm:-ml-[350px] sm:-mt-[100px] flex items-center pb-3 bg-white cursor-pointer`}
                  onClick={handleTab}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex flex-row relative">
                    <div
                      className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                      key={sliderApiData[2]?._id}
                    >
                      <h2 className="font-bold pt-1 pr-2">
                        {sliderApiData[2]?.circles[0].circles[0].productTitle}
                      </h2>
                      <p className="font-normal pb-2">
                        {sliderApiData[2]?.circles[0].circles[0].productTitle}
                      </p>
                      <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                        {sliderApiData[2]?.circles[0].circles[0].productTitle}
                      </p>
                    </div>
                    <div className="absolute right-0 top-0 border-l border-gray-200 flex justify-end items-center h-full pr-1">
                      <Image
                        className="flex ml-2"
                        src="/icon/arrow_right.svg"
                        height={20}
                        width={20}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        {sliderApiData?.slice(3).map((data) => (
          <SwiperSlide key={data._id}>
            <div className="relative group sm:h-[425px] h-[200px]">
              <Image
                src={data.imgSrc}
                width={500}
                height={330}
                alt="Swiper"
                className="swiper-slide"
              />
              <div className="absolute bottom-4 left-4 flex text-lg text-white">
              {data?.imgTitle}
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div onMouseEnter={handleEnter} className="cursor-pointer">
                  <div className="carcular-conui top-28 left-40 absolute rounded-full w-[30px] h-[30px]">
                    <div className=" bg-white h-3 w-3 absolute rounded-full carcular-ui"></div>
                  </div>
                </div>
                {hov && (
                  <div
                    className={`flex-row z-10 p-2 sm:-ml-[350px] sm:-mt-[100px] flex items-center pb-3 bg-white cursor-pointer`}
                    onClick={handleTab}
                    onMouseLeave={handleLeave}
                  >
                    <div className="flex flex-row relative">
                      <div
                        className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                        key={data._id}
                      >
                        <h2 className="font-bold pt-1 pr-2">
                          {data.circles[0].circles[0].productTitle}
                        </h2>
                        <p className="font-normal pb-2">
                          {data.circles[0].circles[0].productCategory}
                        </p>
                        <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                          ₹{data.circles[0].circles[0].productPrice}
                        </p>
                      </div>
                      <div className="absolute right-0 top-0 border-l border-gray-200 flex justify-end items-center h-full pr-1">
                        <Image
                          className="flex ml-2"
                          src="/icon/arrow_right.svg"
                          height={20}
                          width={20}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <Image
           src="/icon/arrow_right.svg"
          width={30}
          height={30}
          alt="arrow"
          className="swiper-button-next sm:-translate-y-[150px]"
        />
      </Swiper>
    </div>
  );
}