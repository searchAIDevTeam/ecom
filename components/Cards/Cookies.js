import React, { useEffect, useState } from "react";

const Cookies = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");
    if (!modalClosed) {
      setModal(true);
    }
  }, []);

  const closeModal = () => {
    setModal(false);
    localStorage.setItem("modalClosed", true);
  };
  return (
    <div
      className={`sm:h-[50vh] px-10 py-5 sm:w-[35vw] w-[90vw] bg-white space-y-5 rounded-md fixed sm:left-3 bottom-3 left-6 z-[1000] ${
        modal ? "block" : "hidden"
      }`}
    >
      <div className="font-semibold text-lg">
        You are in control of your own cookies
      </div>
      <div className="text-gray-700">
        AYATRIO and our digital partners use cookies on this site. Some are
        strictly necessary to run the site but below are the optional ones:
      </div>
      <div className="text-gray-700">
        <li>Used for measuring how the site is used</li>
        <li>Enabling personalisation of the site</li>
        <li>For advertising marketing and social media</li>
      </div>
      <span className="underline hover:no-underline text-gray-700 cursor-pointer">
        Read more about these cookies
      </span>
      <div className="flex gap-3">
        <button className="bg-black px-5 py-2 text-white rounded-full hover:bg-gray-700" onClick={closeModal}>
          Ok
        </button>
        <button className="px-5 py-2 border-2 border-solid hover:border-black border-gray-500 rounded-full">
          Cookie Settings
        </button>
      </div>
    </div>
  );
};

export default Cookies;
