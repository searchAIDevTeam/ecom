"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectFormData } from "../Features/Slices/formSlice";
import { selectRoomData, selectRoomStatus } from "../Features/Slices/roomSlice";
import Image from "next/image";
import OrderSum from "./OrderSum";

const Arrive = () => {
  // let navigate = useNavigate();
  const router = useRouter();
  const handleClick = () => {
    // navigate("/payment");
    router.push("/payment");
  };

  const roomData = useSelector(selectRoomData);
  console.log("roomData in cart page", roomData);
  const roomStatus = useSelector(selectRoomStatus);
  console.log("roomstatus", roomStatus);
  const formadata = useSelector(selectFormData);
  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-7">
        <div className="col-span-1 order-2 sm:order-1">
          <h3 className="mb-4">When would you like to get your order?</h3>
          <div className="col-span-2"></div>
          <div className="mb-10 flex items-center deliver border-black rounded-xl h-14 sm:w-80 w-[80vw] border-solid border-2 p-1">
            <a className="flex-grow pl-4 text-sm" href="#">
              Arrives Thu, 14 Dec - Wed, 3 Jan
            </a>
            <p className="flex items-end pr-4 text-gray-500 text-sm">1250.00</p>
          </div>
          {roomStatus === "succeeded" && (
            <div>
              <div>
                <h1>Personal Details:- </h1>
                <p>
                  Name : {formadata.first} {formadata.last}{" "}
                </p>
                <p>Adress: {formadata.add1} </p>
                <p>Postal Code: {formadata.postal} </p>
                <p>Locality: {formadata.local} </p>
                <p>State/Territory: {formadata.state} </p>
                <p>Country: {formadata.country} </p>
                <h2>Contact Details</h2>
                <p>Email: {formadata.email} </p>
                <p>Mobile Number: {formadata.number} </p>
                <p>PAN Number: {formadata.pan} </p>
              </div>

              <div>
                <h3 className="mb-4">Arrives Thu,14 Dec-Wed,3 Jan</h3>
                {/* <img src={shoe} alt="shoe" className="h-20 w-20" /> */}
                <Image
                  src={roomData.images[0]}
                  alt="shoe"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          )}
          <h6 className="mt-4 text-gray-500 text-sm">
            This is an international shipment requiring customers clearance
          </h6>
          <button
            className="mt-4 bg-black text-white py-2 px-4 rounded-full sm:w-96 w-[70vw] sm:mb-0 mb-5"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
        <div className="col-span-1 order-1 sm:order-2">
          <OrderSum />
        </div>
      </div>
    </div>
  );
};

export default Arrive;
