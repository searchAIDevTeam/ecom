import React, { useState } from "react";
import "./styles.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Imagechanger = () => {
  const [index, setIndex] = useState(0);
  const [openStates, setOpenStates] = useState([false, false, false]);

  const text = [
    "dsadasdorem ipsum dolor sit amet, consectetur adipissit amet, consect eiusmod tempor incididunt ut labore et dolore magnasit amet, consect eiusmod tempor incididunt ut labore et dolore magnacing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    "orem ipsudolor sit amet, consect eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisc dolor sit amet, consectetur adipisciieniam,",
    "lorem ipsum dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  ];

  const img = [
    "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const Heading = [
    "Watch your heart",
    "Tune into your wellness",
    "Improve your sleep habits",
  ];

  const handleToggle = (clickedIndex) => {
    setIndex(clickedIndex);
    setOpenStates((prevStates) =>
      prevStates.map((state, idx) => (idx === clickedIndex ? !state : false))
    );
  };

  return (
    <div className="main-trend imagechanger w-full h-full flex sm:flex-row flex-col gap-[10px]">
      <div className="left text-container flex flex-col w-1/2 h-full">
        <div className="text-container py-8 ">
          <h1 className="font-bold sm:text-3xl text-xl">
            Get to know your health
          </h1>

          <h3 className=" text-gray-500 pt-3.5 sm:pr-48 pr-0">
            Bands shown may be sold separately and may not be available in all
            countries
          </h3>
        </div>
        {Heading.map((value, idx) => (
          <div key={idx} className="trending-choice ">
            {idx === 1 && (
              <>
                <div
                  onClick={() => handleToggle(idx)}
                  className="flex  items-center "
                >
                  <h1 className="expanding-text my-4 sm:font-bold font-medium sm:text-2xl text-[20px] text-left cursor-pointer">
                    {value}
                  </h1>
                  {index === idx ? (
                    <FaChevronUp className="text-2xl p-1 sm:ml-3 my-4 text-gray-500 text-left cursor-pointer " />
                  ) : (
                    <FaChevronDown className="text-2xl p-1 sm:ml-3 my-4 text-gray-500 text-left cursor-pointer " />
                  )}
                </div>
              </>
            )}
            {idx !== 1 && (
              <div
                onClick={() => handleToggle(idx)}
                className="flex items-center "
              >
                <h1 className="sm:font-bold font-medium sm:text-2xl text-[20px] mb-2  text-left cursor-pointer">
                  {value}
                </h1>
                {openStates[idx] ? (
                  <FaChevronUp className="sm:font-bold font-medium sm:text-2xl text-lg text-gray-500 cursor-pointer" />
                ) : (
                  <FaChevronDown className="sm:font-bold font-medium sm:text-2xl text-lg text-gray-500 cursor-pointer" />
                )}
              </div>
            )}
            {openStates[idx] && (
              <div
                className={` sm:w-[90%] w-[80vw] sm:text-left text-justify `}
              >
                <p className={`${idx + 1}text`}>
                  {openStates[idx] ? text[idx] : ""}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="right  flex w-1/2 h-full">
        <div className="flex w-full h-[36rem] items-center">
          {img.map((image, i) => (
            <img
              key={i}
              src={image}
              alt=""
              className={` w-full h-full ${
                index === i ? "visible" : "hidden"
              } lazyloaded`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagechanger;
