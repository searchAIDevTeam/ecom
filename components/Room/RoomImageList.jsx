import React from "react";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";
// import "swiper/css/mousewheel";
// import "swiper/css/scrollbar";
// import "swiper/swiper-bundle.css";
import "./styles.css";
export default function RoomImageList() {
  // const image = [
  //   "https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720",
  //   "https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720",
  //   "https://a0.muscache.com/im/pictures/4ee98f0f-73df-41fe-8006-4484413a1249.jpg?im_w=720",
  //   "https://a0.muscache.com/im/pictures/dbbab7f7-c01c-4802-9ad9-f87def795edc.jpg?im_w=720",
  //   "https://a0.muscache.com/im/pictures/miso/Hosting-855668970469413787/original/15a0762f-b9ca-40a1-b596-900e9450d181.jpeg?im_w=720",
  // ];
  return (
    <>
      {/* ------------------  room/place heading ------------------  */}
      <div className="room-heading  sm:flex hidden sm:flex-row flex-col gap-5 justify-between align-middle mt-[1.5rem] mb-12  sm:w-auto w-[100%]">
        <div className="sm:text-sm text-sm   tracking-[.012rem]  sm:font-normal  flex ">
          <div className="hover:underline">Beautiful 4 BHK villa</div>
          <div>&gt;</div> <div className="hover:underline">Mountain view</div>
          <div>&gt;</div>
          <div className="hover:underline">Swimming pool</div>
        </div>
      </div>

      {/* ------------------  room/place image gallery ------------------  */}
      <div className="imggallery  sm:h-[55vh]  w-[60vw] ">
        <div className="sm:grid hidden sm:grid-cols-2 sm:grid-rows-2 gap-3">
          <div className="sm:col-span-1">
            <img
              className="sm:w-full w-[80vw] h-[22rem] object-cover"
              src="https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="sm:col-span-1">
            <img
              className="sm:w-full w-[80vw] h-[22rem] object-cover"
              src="https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="sm:col-span-1 sm:row-start-2">
            <img
              className="sm:w-full w-[80vw] h-[22rem] object-cover"
              src="https://a0.muscache.com/im/pictures/4ee98f0f-73df-41fe-8006-4484413a1249.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="sm:col-start-1 sm:row-start-2">
            <img
              className="sm:w-full w-[80vw] h-[22rem] object-cover"
              src="https://a0.muscache.com/im/pictures/dbbab7f7-c01c-4802-9ad9-f87def795edc.jpg?im_w=720"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
