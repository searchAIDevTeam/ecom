import Card from "./card";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar, Mousewheel, FreeMode } from "swiper/modules";

const Dataslider = ({ category, data, sliderIndex }) => {
  const swiperRef = useRef(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const swiperOptions = {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
    navigation: {
      nextEl: `.custom-next-button-${sliderIndex}`,
      prevEl: `.custom-prev-button-${sliderIndex}`,
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,
  };

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setProductData(data);
  }, [data]);

  return (
    <div>
      <div className="my-10 bg-white sm:px-[50px] px-[20px]">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl">{category}</h2>
          <div className="Slidenav flex text-2xl cursor-pointer text-white rounded-full gap-2">
            <div
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className={`custom-prev-button-${sliderIndex} hover:bg-400 hover:scale-110 hover:text-slate-100`}
            >
              <img className="w-8 h-8" src="/images/back.png" alt="Previous " />
            </div>
            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className={`custom-next-button-${sliderIndex} hover:bg-400 hover:scale-110 hover:text-slate-100`}
            >
              <img className="w-7 h-9" src="/images/right.png" alt="Next" />
            </div>
          </div>
        </div>

        <Swiper
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          slideNextClass={`custom-next-button-${sliderIndex}`}
          slidePrevClass={`custom-prev-button-${sliderIndex}`}
          ref={swiperRef}
          {...swiperOptions}
          className="mySwiper pl-5"
        >
          {!productData ? (
            <div>
              <h1>loading</h1>
            </div>
          ) : (
            productData.map((product) => (
              <SwiperSlide key={product._id}>
                <div className="grid grid-cols-1 mt-2 h-full fade-in">
                  <Card
                    cardkey={product._id}
                    title={product.productTitle}
                    price={product.perUnitPrice}
                    desc={product.subcategory}
                    productId={product.productId}
                    imgSrc={product.images}
                    rating={product.ratings}
                    id={product._id}
                    setPopupVisible={setPopupVisible}
                    cssClass={"card1flex"}
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Dataslider;
