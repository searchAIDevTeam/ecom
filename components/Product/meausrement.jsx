import React from "react";
// import { IoArrowForwardCircle } from "react-icons/io5";
import Image from "next/image";

// import Curtain from "../../assets/product/the-bottom-of-a-beige-curtain-and-a-sheer-white-silverloenn--78a01828702a4e6707ed5b193abb8aa1.avif";
const meausrement = () => {
  return (
    <div className="flex sm:flex-row w-full flex-col sm:px-[50px] px-[20px] relative h-[500px] ">
      {/* <div className=""> */}
      <Image
        src="/product/curtain.avif"
        alt="curtain"
        width={700}
        height={200}
        className="mb-20"
      />
      {/* </div> */}
      <div className="sm:w-1/3  sm:h-auto mb-20 sm:flex-grow bg-slate-300 sm:text-[30px] text-[20px] font-bold px-10 sm:py-10 py-5">
        <div className="flex flex-col sm:gap-48 gap-20 justify-between">
          <div>
            <p> Tips for choosing the right curtain length</p>
          </div>

          <div>
            <Image src="/arrow.svg" width={50} height={50} alt="arrow" className=" rotate-180" />
            {/* <IoArrowForwardCircle size={55} className="absolute bottom-7" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default meausrement;
