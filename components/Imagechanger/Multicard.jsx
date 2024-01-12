import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosAddCircle, IoMdContacts } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Multicard = () => {
  const swiper1Ref = useRef(null);

  return (
    <div>
      <div className="bg-zinc-50 rounded-lg h-120 sm:px-[50px] px-[20px] overflow-x-auto">
        <div className="sm:text-5xl text-2xl font-bold w-full pt-12 pb-8">
          Why Ayatrio so innovative
          <br />
          for home furnishing.
        </div>
        <Swiper
          ref={swiper1Ref}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
       
          navigation={{ clickable: true }}
         
    
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className=" relative bg-white rounded-2xl sm:w-[100%] w-[100%] sm:h-300px  h-76 pt-2 mb-24">
              <div className="mt-8 ml-6">
                <CiDeliveryTruck size={52} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Get flexible delivery <br/>and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose two-hour delivery from an<br/> Apple Store, free delivery, or
                easy<br/> pickup options.
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-76 pt-2">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <IoChatbubblesOutline size={46} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Shop with a <br/>Specialist<br/> over video.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose your next Mac in a<br/> guided, one-way video session.
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-76 pt-2">
              <div className="mt-8 ml-6 mr-12 mb-2">
                <IoMdContacts size={48} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Get to know your<br/> new Mac.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Learn how to get the most out of <br/>your new Mac with a free
                one-on-<br/>one Personal Session.
              </div>
              <br />
              <div className="absolute bottom-1 right-10 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
  <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-76 pt-2">
    <div className="mt-8 ml-6 mr-12 mb-2">
      <MdMenuBook size={44} />
    </div>
    <h2 className="text-2xl font-bold ml-6 mr-12">
      Get flexible delivery <br/>and easy pickup.
    </h2>
    <div className="mt-2 ml-6 mr-12 mb-12" style={{ overflow: 'hidden' }}>
      Learn how to get the most out of<br/> your new Mac with a free
      one-on-<br/>one Personal Session.
    </div>
    <br />
    <div className="absolute bottom-1 right-12 mb-8">
      <IoIosAddCircle size={34} />
    </div>
  </div>
</SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default Multicard;
