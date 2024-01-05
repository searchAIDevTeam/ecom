import React, { useRef } from "react";
import "./FAQSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

const FAQSwiper = () => {
  const swiperRef = useRef(null);
  const handleWheel = (event) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (event.deltaX > 0) {
        swiperRef.current.swiper.slideNext();
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: ".my-swiper-button-next",
      prevEl: ".my-swiper-button-prev",
    },
  };

  const data = [
    {
      heading: "Caution against fake IKEA Website and Channel",
      text: "Update about fake IKEA website & social media channels",
    },
    {
      heading: "All you want to know about product assembly!",
      text: "Sometimes we all need that little help!",
    },
    {
      heading: "Assembly Videos of your favorite product",
      text: "Your search for the assembly videos of your favorite products ends here. Follow the video. VOILA!!! you have already assembled your...",
    },
    {
      heading: "Change of Mind – Article Return & refund request.",
      text: "Explore more about returns & under what guidelines do we accept returns. Together let's aim for a seamless process..",
    },
    {
      heading: "Refund policy",
      text: "Refund policy followed at IKEA India",
    },
    {
      heading: "I have received damaged articles.",
      text: "If you have received a damaged article(s), please check this reference for more help.",
    },
    {
      heading: "Payment methods accepted",
      text: "Payment methods applicable - Store",
    },
  ];

  return (
    <div
      className="border-2 overflow-hidden border-black relative w-full rounded-xl p-5 h-auto"
      onWheel={handleWheel}
    >
      <Swiper {...swiperParams} ref={swiperRef}>
        {data.map((curElement, index) => (
          <SwiperSlide className="my-swiper-slide" key={index}>
            <div className="flex flex-col items-start space-y-10 hover:underline cursor-pointer">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">{curElement.heading}</h3>
                <p>{curElement.text}</p>
              </div>
              <div className="flex">
                <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-swiper-button-prev" onClick={goPrev}></div>
      <div className="my-swiper-button-next" onClick={goNext}></div>
    </div>
  );
};

export default FAQSwiper;
