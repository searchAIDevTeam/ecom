import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosAddCircle, IoMdContacts } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import Image from "next/image";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Multicard = () => {
  const swiper1Ref = useRef(null);

  return (
    <div>
      <div className="bg-zinc-50 pt-[5rem] pb-[2rem] sm:pl-[50px] pl-[20px] overflow-x-auto">
        <div className="sm:text-3xl text-xl font-medium w-full pb-8">
          Why Ayatrio so innovative
          <br />
          for home furnishing.
        </div>
        <Swiper
          ref={swiper1Ref}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}

          navigation={{
          nextEl: ".right",
          prevEl: ".back",
        }}

          draggable={true}
          style={{ "--swiper-navigation-size": "24px" }}
          breakpoints={{
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            <div className=" relative bg-white  sm:w-[100%] w-[100%] sm:h-300px p-2 mb-24">
              <div className="mt-8 ml-6">
                <CiDeliveryTruck size={52} />
              </div>
              <h2 className="text-xl font-medium ml-6 mr-12">
                Get flexible delivery and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose two-hour delivery from an Apple Store, free delivery, or
                easy pickup options.
              </div>

              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white  sm:w-[100%] w-[80vw] sm:h-300px p-2 ">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <IoChatbubblesOutline size={46} />
              </div>
              <h2 className="text-xl font-medium ml-6 mr-12">
                Shop with a specialist over video.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose your next Mac in a  guided, one-way video session. or
                easy pickup options.
              </div>

              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white sm:w-[100%] w-[80vw] sm:h-300px p-2 ">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <IoMdContacts size={48} />
              </div>
              <h2 className="text-xl font-medium ml-6 mr-12">
                Get to know your new Mac. need to added
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Learn how to get the most out of your new Mac with a free
                one-on-one Personal Session.
              </div>

              <div className="absolute bottom-1 right-10 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white  sm:w-[100%] w-[80vw] sm:h-300px p-2 ">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <MdMenuBook size={44} />
              </div>
              <h2 className="text-xl font-medium ml-6 mr-12">
                Get flexible delivery and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12" style={{ overflow: 'hidden' }}>
                Learn how to get the most out of your new Mac with a free
                one-on-one Personal Session.
              </div>

              <div className="absolute bottom-1 right-12 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white sm:w-[100%] w-[80vw] sm:h-300px p-2">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <MdMenuBook size={44} />
              </div>
              <h2 className="text-xl font-medium ml-6 mr-12">
                Get flexible delivery and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12" style={{ overflow: 'hidden' }}>
                Learn how to get the most out of your new Mac with a free
                one-on-one Personal Session.
              </div>

              <div className="absolute bottom-1 right-12 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <div className="flex flex-row items-end justify-end gap-4">
          <Image src='/leftvector.svg' width={20} height={20} alt="Arrow" className="back bg-gray-300 rounded-full h-7 w-7"/>
<Image src='/rightvector.svg' width={20} height={20} alt="Arrow" className='right mr-16  bg-gray-300 rounded-full h-7 w-7'/>
</div>
        </Swiper>
      </div>
    </div>
  );
};

export default Multicard;
