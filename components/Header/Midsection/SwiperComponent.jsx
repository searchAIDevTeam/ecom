// components/Slider.js
import Link from "next/link";
import React from "react";
import temp from "../../../public/product/room.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar } from "swiper/modules";
import { roomOptions } from "@/Model/Dropdown/SliderData/SliderData";

const SwiperComponent = () => {
  return (
    <Swiper
      className="bg-white parent h-96 w-full gap-1"
      spaceBetween={20}
      slidesPerView={7}
      mousewheel={{ invert: true }}
      scrollbar={{
        hide: true,
        draggable: true,
      }}
      modules={[Scrollbar]}
    >
      {roomOptions.map((data, index) => (
        <SwiperSlide className="bg-white parent ">
          <Link
            key={index}
            href={`/rooms/${data.room.replace(/\s+/g, "-")}`}
            passHref
          >
            <div className=" child w-full h-full flex flex-col px-2 justify-start">
              <h3 className="text-lg font-semibold uppercase py-2 text-gray-900">
                {data.room}
              </h3>
              <div className="paren w-[10rem] h-[5rem]">
                <Image
                  src={temp}
                  width={0}
                  height={0}
                  // layout="fill"
                  className="child object-cover w-full h-full"
                  alt="Room Image"
                />
              </div>

              <div className=" text-gray-400 font-light text-[1rem] py-4 mb-2">
                <ul>
                  <li>{data.list1[1]}</li>
                  <li>{data.list1[2]}</li>
                  <li>{data.list1[3]}</li>
                  <li>{data.list1[4]}</li>
                </ul>
              </div>
              <div className=" text-gray-400 font-light text-[1rem]">
                <ul>
                  <li>{data.list2[1]}</li>
                  <li>{data.list2[2]}</li>
                  <li>{data.list2[3]}</li>
                </ul>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="swiper-scrollbar child w-full h-full bg-black rounded-full" />
    </Swiper>
  );
};

export default SwiperComponent;
