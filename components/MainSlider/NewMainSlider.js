import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function Demo() {

  return (
    <div className="mt-4">
      <Swiper
        className="swiper-slider"
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        freeMode={false}
        loop={true}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        // Enabled autoplay mode
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // If we need pagination
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true,
        }}
        // If we need navigation
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Responsive breakpoints
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <img src="./map1.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./map1.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="map3.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./map1.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./map1.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="map3.avif" alt="Swiper" className="swiper-slide" />
        </SwiperSlide>

        <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-prev"></div> */}
        <div className="swiper-button-next sm:-translate-y-[150px]"></div>
      </Swiper>
 </div>
);
}