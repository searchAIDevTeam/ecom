import React from "react";
import OrderSum from "./OrderSum";

const Learn = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
        <div className="col-span-1">
          <h4>How would you like to get your order?</h4>
          <p className="text-gray-500">
            Custom regulations for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs for all orders and returns. If your KYC does not
            match your shipping address, please click the link for more
            information.
            <a className="underline text-gray-500" href="#">
              Learn More
            </a>
          </p>
          <br />
          <div className="flex items-center deliver border-black rounded-xl border-solid border-2 sm:w-[40vw] w-[70vw] h-14  p-1">
            <svg
              className="h-8 w-8 text-black"
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
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              <line x1="3" y1="9" x2="7" y2="9" />
            </svg>
            <a className="inline pl-4" href="#">
              Deliver it
            </a>
          </div>
          <br />
          <br />

          <div className="flex items-center deliver border border-grey-300 w-40 h-10 rounded-full border-solid border-2 p-1">
            <a className="pl-2" href="#">
              Become a member
            </a>
          </div>

          <div className="mt-2 flex items-center deliver border border-grey-300 w-20 h-10 rounded-full border-solid border-2 p-1">
            <a className="pl-2" href="#">
              Login
            </a>
          </div>
        </div>
        <div className="col-span-1 sm:mx-20 mx-2">
          <OrderSum />
        </div>
      </div>
    </div>
  );
};

export default Learn;
