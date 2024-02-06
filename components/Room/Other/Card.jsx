"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import IncDecCounter from "@/components/Count/Count";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useState, useEffect } from "react";
import Calculation from "./Calculation";
import { useDispatch, useSelector } from "react-redux";
import { selectQuantity } from "@/components/Features/Slices/calculationSlice";
import {
  selectRoomData,
  selectRoomStatus,
} from "@/components/Features/Slices/roomSlice";
import "../styles.css";
import axios from "axios";
import Image from "next/image";

const Card = ({ data }) => {
  const quantity = useSelector(selectQuantity);
  const router = useRouter();
  const [widthstate, setwidthstate] = useState(0);
  const [heightstate, setheightstate] = useState(0);
  const [pricestate, setpricestate] = useState(0);
  const [coststate, setcoststate] = useState(7000);
  const [rollstate, setrollstate] = useState(0);

  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const [hidden, setHidden] = useState(false);
  const handlefunc = () => {
    setHidden(!hidden);
  };

  const priceCal = () => {
    const area = (widthstate * heightstate) / 50;
    const calculatedPrice = area * coststate;
    setpricestate(calculatedPrice.toFixed(2));
    setrollstate(area.toFixed(2));
  };
  useEffect(() => {
    priceCal();
  }, [widthstate, heightstate, coststate]);

  const colorSep = data?.colors?.[0]?.split(",");

  const roomData = useSelector(selectRoomData);
  const roomStatus = useSelector(selectRoomStatus);
  //posting data to database
  if (typeof window !== "undefined") {
    var id = localStorage.getItem("deviceId");
    // console.log("deviceId : ", id);
  }
  const postUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart`;
  const postRoomData = async () => {
    try {
      console.log("Posting room data:", {
        deviceId: id,
        productId: roomData._id,
        quantity: quantity,
      });

      const postData = {
        deviceId: id,
        productId: roomData._id,
        quantity: quantity,
      };

      const response = await axios.post(postUrl, postData);
    } catch (error) {
      console.error("Error posting room data:", error);
    }
  };

  const handleClickDB = async () => {
    try {
      // Validate quantity, productId, and deviceId
      if (quantity <= 0) {
        console.error("Invalid quantity");
        return;
      }

      if (!roomData.productId) {
        console.error("Invalid productId");
        return;
      }

      if (!id) {
        console.error("Invalid deviceId");
        return;
      }

      // Post data to the database
      await postRoomData();

      // Redirect to the checkout page
    } catch (error) {
      console.error("Error handling click:", error);
    }
  };
  //posting data to database

  const handleClicks = () => {
    router.push("/checkout");
  };
  return (
    <>
      <div className="flex justify-start gap-4 sm:w-[25vw]  w-[70vw] sm:ml-[45px] ml-0">
        <div className=" mt-5  prefence-text">
          <div className="textHolders flex flex-col gap-3 pt-[30px] ">
            <h1 className="text-2xl mt-5 font-bold mb-2">
              {data?.productTitle}
            </h1>
            <div className="font-bold flex mb-1">
              <span>Collection: </span>
              <h3>{data?.collectionName}</h3>
            </div>
            <div className="font-bold flex mb-1">
              <span>Pattern Number: </span>
              <h3>{data?.patternNumber}</h3>
            </div>
            <div className="price">
              <div className="font-bold flex mt-[15px]">
                <span>Rs. &nbsp;</span>
                <h2 className="text-3xl leading-[0.5] tracking-wide">
                  {" "}
                  {data?.perUnitPrice}
                </h2>{" "}
                <span> &nbsp;/roll</span>
              </div>
              <h5 className="">Price incl. of all taxes</h5>

              <IncDecCounter />
            </div>
          </div>

          {/* color-container */}
          <div className="colorContainer flex flex-col mt-4 sm:w-auto w-[80vw]">
            <h1 className="mb-2 font-bold">Colours</h1>
            <div className="colors flex gap-3">
              {colorSep?.map((color, index) => (
                <div
                  key={index}
                  className={`
                    w-[60px]
                    h-[60px]
                    border-b-2
                    border-black
                    text-gray-900
                    text-center 
                    text-xs
                    flex 
                    justify-center
                    items-center
                    `}
                  style={{
                    backgroundColor: color,
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* calculations */}
          <div className="border border-gray-300 w-[100%] rounded-xl mt-[30px] pt-[30px] pb-4 sm:pl-3">
            <div className="flex items-center">
              <div className="pl-3">
                <Calculation priceData={data} />
              </div>
            </div>

            <hr />
            <div className="flex items-center pt-3">
              <div>
                <Image
                  src="/rooms/truck-delivery-icon.svg"
                  width={25}
                  height={25}
                  alt="delivery"
                />
              </div>
              <div className="pl-3">Delivery</div>
            </div>
            <div className="pl-60 -ml-3 -mt-1">
              {!visible ? (
                <div className="mt-1 sm:mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-right-icon.svg"
                    width={25}
                    height={25}
                    alt="arrow right"
                    onClick={handleClick}
                  />
                </div>
              ) : (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-down.svg"
                    width={25}
                    height={25}
                    alt="arrow down"
                    onClick={handleClick}
                  />
                </div>
              )}
            </div>
            <div className="pb-3 text-gray-600 pl-8 -mt-4">
              Check availability
            </div>
            {visible && (
              <div>
                <div className="pl-7">Enter pincode:</div>
                <input
                  type="number"
                  name="pincode"
                  value=""
                  className="border border-black ml-8 mb-2"
                />
              </div>
            )}
            <hr />
            <div className="flex pt-3">
              <div className="sm:pr-3">
                <Image
                  src="/rooms/store-icon.svg"
                  width={25}
                  height={25}
                  alt="store"
                />
              </div>
              <div className="pl-3">In-store</div>
            </div>
            <div className="pl-60 -ml-3 -mt-1">
              {!hidden ? (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-right-icon.svg"
                    width={25}
                    height={25}
                    alt="arrow right"
                    onClick={handlefunc}
                  />
                </div>
              ) : (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-down.svg"
                    width={25}
                    height={25}
                    alt="arrow down"
                    onClick={handlefunc}
                  />
                </div>
              )}{" "}
            </div>
            <div className="text-gray-600 pl-9 -mt-4">Check in-store stock</div>
            {hidden && (
              <div>
                <div className="pl-7">Enter city:</div>
                <input
                  type="text"
                  name="city"
                  value=""
                  className="border border-black ml-8 mb-2"
                />
              </div>
            )}
          </div>

          {/* //buttons */}
          <div className="buttons mt-4 sm:w-auto w-[100%] sm:block flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: "/checkout",
                query: {
                  search: "rooms",
                },
              }}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white sm:w-80 w-40 sm:h-14 h-8 rounded-full hover:bg-gray-900 transition duration-300">
                Buy Now
              </button>
            </Link>
            <Link
              href={{
                pathname: "/checkout",
                query: {
                  search: "sample",
                },
              }}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white  sm:w-80 w-40 sm:h-14 h-6 rounded-full  transition duration-300">
                Buy Now with in-store request
              </button>
            </Link>
            <div className="guestCheckout flex justify-center items-center ">
              <button
                onClick={() => {
                  handleClickDB();
                  {
                    roomStatus === "succeeded" &&
                      toast.success("Succesfully added", {
                        toastId: "success1",
                      });
                  }
                }}
                className="bg-black text-white  sm:w-80 w-40 sm:h-14 h-8 rounded-full transition duration-300"
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={true}
          theme="light"
          style={{ zIndex: "9999999999999" }}
        />
      </div>
    </>
  );
};

export default Card;
