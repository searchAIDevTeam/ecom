import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css";
import Image from "next/image";
import { musicSwiperData } from "@/Model/MusicSectionData/MusicSwiperData";

const Double = () => {
  return (
    <div>
      <Swiper
        effect="coverflow"
        slidesPerView={3}
        // centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Navigation, Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          depth: 150,
          slideShadows: false,
        }}
      >
        {musicSwiperData.map((curElement) => {
          return (
            <SwiperSlide>
              <div className="mr-2 mt-6 ">
                <Image
                  width={208}
                  height={350}
                  src={curElement.imgSrc}
                  className="rounded-t-lg"
                  alt=""
                />
                <div className="bg-black sm:w-52 w-[134px] flex flex-col rounded-b-lg">
                  <div className="text-white text-sm pt-3  pl-4">
                    {curElement.title}
                  </div>
                  <div className="text-xs pb-3 pl-4">{curElement.subTitle}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <Image src='/svg/dropdown/rightvector.svg' width={30} height={30} alt="arrow" className="swiper-button-prev sm:-translate-y-[150px] rotate-180 sm:-translate-x-[585px] sm:block hidden"/>
        <Image src='/svg/dropdown/rightvector.svg' width={30} height={30} alt="arrow" className="swiper-button-next sm:-translate-y-[150px] sm:block hidden"/>
      </Swiper>
    </div>
  );
};
export default Double;
