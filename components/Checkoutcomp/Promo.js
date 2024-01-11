"use client";
import React from "react";
import OrderSum from "./OrderSum";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectRoomData, selectRoomStatus } from "../Features/Slices/roomSlice";
import { selectFormData } from "../Features/Slices/formSlice";
import { selectQuantity } from "../Features/Slices/calculationSlice";
const Promo = () => {
  const [form, setForm] = React.useState({
    promo: "",
    cname: "",
    cno: "",
    mmyy: "",
    cvv: "",
  });
  const handlefunc = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
      setForm((prev) => {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        };
      });
    }
  };
  const quantity = useSelector(selectQuantity);
  const router = useRouter();
  const handleClick = () => {
    router.push("/success");
  };
  const handleEdit = () => {
    router.push("/checkout");
  };
  const handleEditshipping = () => {
    router.push("/shipping");
  };

  const roomData = useSelector(selectRoomData);
  // console.log("roomData in cart page", roomData);
  const roomStatus = useSelector(selectRoomStatus);
  // console.log("roomstatus", roomStatus);
  const formadata = useSelector(selectFormData);

  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-8">
        <div className="col-span-1 order-2 sm:order-1">
          <h3>Have a promo code?</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Promo"
              onChange={handlefunc}
              name="promo"
              value={form.promo}
              required
              className="form-input mb-6 mt-4 flex items-center deliver border border-gray-400 rounded-md h-12 w-80 border-solid p-1"
            />
          </div>
          <h3>How would you like to pay?</h3>
          <div className="flex items-center">
            <h3 className="mb-4 mt-2 px-4 flex items-center deliver  border-black rounded-md h-12 w-80 border-2 border-solid p-1">
              <svg
                className="h-4 w-4 text-black mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
              </svg>
              Credit or Debit card
            </h3>
          </div>
          <h3 className="mb-10 px-4 flex items-center deliver border border-gray-500 rounded-md h-12 w-80 border-solid p-1">
            Gpay
          </h3>
          <br />
          <h3>Enter your payment details:</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name on card"
              onChange={handlefunc}
              name="cname"
              value={form.cname}
              required
              className="form-input mb-6 mt-4 flex items-center deliver border border-gray-400 rounded-md h-12 w-80 border-solid p-1"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              pattern="0-9*"
              placeholder="Card number"
              onChange={handlefunc}
              name="cno"
              value={form.cno}
              required
              className="form-input mb-6 mt-2 flex items-center deliver border border-gray-400 rounded-md h-12 w-80 border-solid p-1"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div>
              <input
                type="text"
                placeholder="MM/YY"
                onChange={handlefunc}
                name="mmyy"
                value={form.mmyy}
                required
                className="form-input mb-10 mt-2 flex items-center deliver border border-gray-400 rounded-md h-12 w-40 border-solid p-1"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="CVV"
                onChange={handlefunc}
                pattern="0-9*"
                name="cvv"
                value={form.cvv}
                max="999"
                min="100"
                required
                className="form-input border-gray-600 mb-6 mt-2 flex items-center deliver border rounded-md h-12 w-40 border-solid p-1"
              />
            </div>
          </div>
          <h6 className="text-xs">
            <input type="checkbox" required />
            &nbsp; By clicking place order, you agree to the eShopWorld
            <a href="#">Terms & Conditions</a>
          </h6>
          <button
            onClick={() => {
              handlefunc();
              handleClick();
            }}
            className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-full w-80"
          >
            Place Order
          </button>
          {/* details */}
          <div>
            <div className="flex flex-row justify-between items-center">
              <p className="mt-4 mb-8 text-xl font-semibold text-gray-400">
                Delivery
              </p>
              <button
                onClick={handleEdit}
                className=" outline outline-slate-300 border-black h-10 w-20 rounded-full"
              >
                Edit
              </button>
            </div>
            {roomStatus === "succeeded" && (
              <div className="text-gray-400 mb-6">
                <p>
                  {formadata.first} {formadata.last}
                </p>
                <p>{formadata.add1} </p>
                <p>{formadata.email} </p>
                <p>{formadata.number} </p>
                <p>{formadata.pan} </p>
              </div>
            )}

            <hr />
            <div className="flex flex-row justify-between items-center">
              <p className="mt-4 mb-8 text-xl font-semibold text-gray-400">
                Shipping
              </p>
              <button
                onClick={handleEditshipping}
                className=" outline outline-slate-300 border-black h-10 w-20 rounded-full"
              >
                Edit
              </button>
            </div>
            {roomStatus === "succeeded" && (
              <div className="mb-6">
                <p>$ {roomData.totalPrice * quantity} Shipping</p>
                <br />
                <br />
                <p>Shipment {quantity}</p>
                <p>Arrives Thu, 14 Dec - Wed, 3 Jan</p>
              </div>
            )}
            <hr />

            <p className="mt-4 mb-8 text-xl font-semibold text-black">
              Payment
            </p>
          </div>

          {/* details */}
        </div>
        <div className="col-span-1 order-1 sm:order-2">
          <OrderSum />
        </div>
      </div>
    </div>
  );
};

export default Promo;
