import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Curtain from "../../assets/product/the-bottom-of-a-beige-curtain-and-a-sheer-white-silverloenn--78a01828702a4e6707ed5b193abb8aa1.avif";
const meausrement = () => {
  const circled = [
    {
      top: 50,
      left: 68,
      productTitle: "Bedroom 1bhk Room",
      productCategory: "Mountain view",
      price: 1900,
    },
  ];
  const router = useRouter();
  const handleTab = () => {
    router.push("/room");
  };
  return (
    <div className="flex sm:flex-row w-full h-auto flex-col sm:px-[50px] px-[20px] relative overflow-hidden ">
      <div className="relative max-h-[500px] ">
        <Image
          src="/product/curtain.avif"
          alt="curtain"
          width={700}
          height={300}
          style={{objectFit:"cover"}}
        />
        <div className="text-md text-black absolute top-16 left-48  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
          <div
            className={`flex-row z-10 mt-4 w-36 h-32 flex items-center pb-2 bg-white cursor-pointer`}
            onClick={handleTab}
          >
            <div className="flex flex-row relative">
              {circled.map((data) => (
                <div
                  className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                  key={data.productId}
                >
                  <h2 className="font-bold pt-1 pr-2">{data.productTitle}</h2>
                  <p className="font-normal pb-2">{data.productCategory}</p>
                  <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                    ₹{data.price}
                  </p>
                </div>
              ))}
              <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-1">
                <Image
                  className="flex ml-2 mr-2"
                  src="/backarrowRevarce.svg"
                  height={20}
                  width={20}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-md text-black absolute top-8 left-[26rem]  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
          <div
            className={`flex-row z-10 mt-4 w-36 h-32 flex items-center pb-2 bg-white cursor-pointer`}
            onClick={handleTab}
          >
            <div className="flex flex-row relative">
              {circled.map((data) => (
                <div
                  className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                  key={data.productId}
                >
                  <h2 className="font-bold pt-1 pr-2">{data.productTitle}</h2>
                  <p className="font-normal pb-2">{data.productCategory}</p>
                  <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                    ₹{data.price}
                  </p>
                </div>
              ))}
              <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-1">
                <Image
                  className="flex ml-2 mr-2"
                  src="/backarrowRevarce.svg"
                  height={20}
                  width={20}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
