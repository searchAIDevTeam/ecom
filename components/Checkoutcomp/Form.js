"use client";
import React from "react";
import { useRouter } from 'next/navigation'

import { useDispatch, useSelector } from "react-redux";
import { updateFormData, selectFormData } from "../Features/Slices/formSlice";
export default function Form() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const { updateFormData } = useFormContext();
  // const navigate = useNavigate();
  const formData = useSelector(selectFormData);
  const [form, setForm] = React.useState({
    first: "",
    last: "",
    add1: "",
    add2: "",
    add3: "",
    postal: "",
    local: "",
    state: "",
    country: "",
    email: "",
    number: "",
    pan: "",
  });
  // console.log(form);
  // function handlefunc(event) {
  //   setForm((prev) => {
  //     return {
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // function handleData(event) {
  //   event.preventDefault();
  //   console.log(form);
  //   // updateFormData(form);
  //   router.push("/shipping");
  // }

  function handlefunc(event) {
    // const { name, value } = event.target;
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleData(event) {
    event.preventDefault();

    dispatch(updateFormData(form));
    console.log(form);

    // send this details to backend to verify payment
    // const orderDetails = {
    //   id: form.id,
    //   title: form.title,
    //   quantity: form.quantity,
    //   thumbnail: form.thumbnail,
    //   phone: form.phone,
    //   email: form.email,
    // }
    const orderDetails = {
      id: "455454",
      title: "dsssds",
      quantity: 1,
      thumbnail:"ghghg",
      phone: 957925676,
      email: "fgfgf@gmail.com",
    }

    handlePayment(orderDetails, form);

    // router.push(`/success`)
  }

   // initiate razorpay payment 
   const initPayment = (data, orderDetails, form) => {
    const options = {
        key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: orderDetails.title,
        description: "Ayatrio is Ayatrio",
        image: orderDetails.thumbnail,
        order_id: data.id,
        prefill: {
            contact: orderDetails.phone,
            email: orderDetails.email,
        },
        theme: {
            color: "#ffa347",
        },
        handler: async function (response, paymentSuccess) {
            try {
                const verifyUrl = `${baseUrl}/payment/verify`;
                const verifyResponse = await fetch(verifyUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...response, paymentSuccess }),
                });

                const verifyData = await verifyResponse.json();

                // if payment verification is successfull
                if (verifyData.paymentSuccess) {

                    // save orderId on redux store to display to the user
                    dispatch(orderId(data.id));

                    const order = {
                        currentBuyNowProduct,
                        orderId: data.id,
                        totalAmount,
                        paymentMethod,
                        address: form,
                        status: 'pending'
                    };

                    // google analytics
                    logEvent(analytics, "place_order");

                    // create the order
                    dispatch(createOrderAsync(order));


                    // when payment is successfull navigate to order-success page
                    router.push(`/success`)
                }


            } catch (error) {
                console.log(error);
                // Handle errors here if necessary
            }
        }, // handler function end

    }; // options end

  if (typeof window !== "undefined") {
    const rzp1 = new window.Razorpay(options);
    
    rzp1.on('payment.success', function (response) {
        options.handler(response, true);  // On successful payment, call the handler function with the success flag
    });

    rzp1.on('payment.error', function (response) {
        options.handler(response, false);  // On payment error, call the handler function with the success flag
    });
    rzp1.on('razorpay_payment_failed', function () {
        // On payment failed (user closed the modal), call the handler function with the success flag set to false
        options.handler({}, false);
        onCloseHandler(); // Call the onCloseHandler to trigger the desired action when the modal is closed without successful payment
      });
      
      rzp1.open();
    }
};

// main razorpay function 
const handlePayment = async (orderDetails, form) => {
    try {
        const orderUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/orders`;
        const response = await fetch(orderUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderDetails,
            }),
        });
        const data = await response.json();

        // call the razorpay payment initiater function & pass the orderDetails also
        initPayment(data.data, orderDetails, formData);

    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to be caught by the thunk
    }
};

  const incompleteForm =
    !form.first ||
    !form.last ||
    !form.add1 ||
    !form.postal ||
    !form.local ||
    !form.state ||
    !form.country ||
    !form.number;
  const buttonClass = incompleteForm
    ? "bg-gray-300 text-white"
    : "bg-black text-white";
  return (
    <>
      <form onSubmit={handleData} className="w-1/2">
        <h3 className="mt-12">Enter your name and address:</h3>
        <div className="mb-4">
          <label htmlFor="first" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="first"
            id="first"
            placeholder="first name"
            value={form.first}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md" //for controlled components
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="last"
            placeholder="Last Name"
            value={form.last}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="add1" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add1"
            placeholder="Address Line 1"
            value={form.add1}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs text-blue-600 ">
            We do not ship to P.O. boxes
          </h6>
        </div>
        <div className="mb-4">
          <label htmlFor="add2" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add2"
            placeholder="Address Line 2"
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
            value={form.add2}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="add3" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add3"
            placeholder="Address Line 3"
            value={form.add3}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="postal" className="form-label relative"></label>
            <br />
            <input
              type="number"
              placeholder="Postal Code"
              pattern="[0-9]*"
              onChange={handlefunc}
              name="postal"
              value={form.postal}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
          <div className="relative">
            <label htmlFor="local" className="form-label relative"></label>
            <br />
            <input
              type="text"
              placeholder="Locality"
              onChange={handlefunc}
              name="local"
              value={form.local}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
        </div>
        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="local" className="form-label relative"></label>
            <br />
            <input
              type="text"
              onChange={handlefunc}
              placeholder="State/Territory"
              name="state"
              value={form.state}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
          <div className="relative">
            <label htmlFor="country" className="form-label relative"></label>
            <br />
            <input
              type="text"
              onChange={handlefunc}
              placeholder="Country"
              name="country"
              value={form.country}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md relative"
            />
          </div>
        </div>
        <br />
        <div className="mb-4">
          <h3>What's your contact information?</h3>
          <label htmlFor="email" className="form-label relative"></label>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={handlefunc}
            name="email"
            value={form.email}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md "
          />

          <h6 className="text-xs w-[70vw]">
            A confirmation mail will be sent after checkout.
          </h6>
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="form-label relative"></label>
          <br />
          <input
            type="number"
            pattern="[0-9]*"
            onChange={handlefunc}
            name="number"
            placeholder="Mobile Number"
            value={form.number}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs w-[70vw]">
            A carrier might contact you to confirm delivery.
          </h6>
        </div>
        <div className="mb-4">
          <h3>What's your PAN?</h3>
          <label htmlFor="pan" className="form-label relative"></label>
          <br />
          <input
            type="text"
            placeholder="PAN"
            onChange={handlefunc}
            name="pan"
            value={form.pan}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs w-[70vw]">
            Enter your PAN to enable payment with UPI,Net Banking or local card
            methods.
          </h6>
        </div>
        <br />
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={form.value}
            name="isForm"
            onChange={handlefunc}
            required
            className="mr-2"
          />
          <span>
            <h6 className="text-xs w-[70vw]">
              I have read and consent to eShopWorld processing my info in
              accordance with the &nbsp;
              <a href="#" className="text-blue-500">
                Privacy Statement
              </a>{" "}
              and &nbsp;
              <a href="#" className="text-blue-500">
                Cookie Policy
              </a>
              . "eShopWorld is a trusted Nike partner".
            </h6>
          </span>
        </div>
        <br />

        {/* <Link
          href={{
            pathname: "/shipping",
            query: {
              search: "cart",
            },
          }}
        > */}
        <button
          disabled={incompleteForm}
          className={`mt-4 bg-black text-white py-2 px-4 rounded-full sm:w-96 w-[70vw] ${buttonClass} `}
        >
          Continue
        </button>
        {/* </Link> */}
      </form>
      <br />
      <br />
      <hr className="w-1/2" />
    </>
  );
}
