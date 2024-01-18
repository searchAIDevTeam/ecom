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
    <div className="">
      <div className="flex items-center justify-center flex-row gap-1">
        {statuses === "succeeded" &&
          datas.map((item) => (
            <div
              onClick={() => handlenav(text._id)}
              className=" border flex flex-col gap-3"
              key={item._id}
            >
              <Image
                src={item.images[0]}
                alt={item.productTitle}
                width={150}
                height={150}
              />
              <p>{item.productTitle}</p>
              <p>{item.productDescription}</p>
              <p>
                {" "}
                Rs. <span className="text-3xl"> {item.totalPrice}</span>
              </p>
              <p className="text-sm flex flex-row gap-1 items-center text-black">
                <Image src="/star.svg" alt="star" width={15} height={15} />
                <Image src="/star.svg" alt="star" width={15} height={15} />
                <Image src="/star.svg" alt="star" width={15} height={15} />
                <Image src="/star.svg" alt="star" width={15} height={15} />
                <Image src="/half-star.svg" alt="star" width={15} height={15} />
                {item.count}
              </p>
              <div className="flex gap-3 items-center">
                <Image
                  src="/adtocart.svg"
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
