// Expandedbar.js
import React, { useEffect, useRef, useState } from "react";
import "./Expandbar.css";
// import search from "../../assets/icon/search.svg";
// import mainlogo from "../../assets/ayatriologo.png";

const Expandedbar = ({ searchText, onClose, onSearch }) => {
  const [searchTexte, setSearchText] = useState(searchText);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);
  return (
    <div className="expanded-search-box p-2 sm:block  bg-white sm:h-310px h-full z-30 sm:w-full w-[80vw] flex items-center justify-center">
      <div className="flex flex-row  justify-between bg-white rounded-lg w-full h-[300px]">
        <div className="logo hidden sm:block">
          <img src="/images/ayatriologo.png" className="w-44 z-30" alt="" />
        </div>
        <div className="searchDiv  flex flex-col justify-between">
          <div className="searchCon relative sm:w-[600px] w-[60vw] h-[40px]  bg-[#e5e5e5] rounded-xl ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="search-input  border px-4 h-full sm:w-full w-[60vw] ml-8 rounded-xl focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              src="/search.svg"
              alt=""
              className=" search_icon_mar w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10"
            />
          </div>
          <div className="dropdown flex flex-col mb-8 gap-4 ">
            <div className="head text-slate-400">
              <h2>Popular Searches</h2>
            </div>
            <div className="items">
              <div className="dropdown-item font-bold font-sans ">Products</div>
              <div className="dropdown-item font-bold font-sans ">Rooms</div>
              <div className="dropdown-item font-bold font-sans ">Magazine</div>
              <div className="dropdown-item font-bold font-sans ">
                Virtual Experience
              </div>
            </div>
          </div>
        </div>
        <div
          className="close text-base font-medium mr-4 cursor-pointer"
          onClick={onClose}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default Expandedbar;
