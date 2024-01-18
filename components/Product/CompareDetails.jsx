"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectproductdata,
  selectproductstatus,
} from "../Features/Slices/compareSlice";
import { useRouter } from "next/navigation";

const CompareDetails = ({ filteredProducts }) => {
  const datas = useSelector(selectproductdata);
  const statuses = useSelector(selectproductstatus);

  const router = useRouter();
  const handlenav = (id) => {
    router.push(`/room/${id}`);
  };
  return (
    <div className="py-20">
      <div className="flex items-center justify-center flex-wrap gap-5 overflow-x-auto">
        {statuses === "succeeded" &&
          datas.map((item) => (
            <div
              onClick={() => handlenav(item._id)}
              className=" border flex flex-col gap-3"
              key={item._id}
            >
              <Image
                src={item.images[0]}
                alt={item.productTitle}
                width={350}
                height={250}
                className="sm:w-[350px] sm:h-[250px] w-[150px] h-[100px] "
              />
              <p>{item.productTitle}</p>
              <p>{item.productDescription}</p>
              <p>
                {" "}
                Rs. <span className="text-3xl"> {item.totalPrice}</span>
              </p>
              <p className="text-sm flex flex-row gap-1 items-center text-black">
                <Image
                  src="/svg/icon/star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
                <Image
                  src="/svg/icon/star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
                <Image
                  src="/svg/icon/star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
                <Image
                  src="/svg/icon/star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
                <Image
                  src="/svg/icon/half-star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
                {item.count}
              </p>
              <div className="flex gap-3 items-center">
                <Image
                  src="/svg/icon/adtocart.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CompareDetails;
