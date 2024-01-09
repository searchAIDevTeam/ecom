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
    <div className="expanded-search-box p-2 sm:block  bg-white sm:h-310px h-full z-30 sm:w-full w-[100vw] flex items-center justify-center absolute right-0">
      <div className="flex flex-row  justify-between bg-white rounded-lg w-full h-auto absolute left-0">
        <div className="logo hidden sm:block">
          <img src="/images/ayatriologo.png" className="w-44 z-30" alt="" />
        </div>
        <div className="searchDiv  flex flex-col">
          <div className="searchCon relative sm:w-[600px] w-[60vw] bg-zinc-100 p-2 rounded-none">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="search-input bg-transparent h-full sm:w-full w-[60vw] pl-10 border-0 focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              src="/search.svg"
              alt=""
              className=" search_icon_mar w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10"
            />
          </div>
          <div className="dropdown flex pt-12 pb-6 flex-col  gap-4 ">
            <div className="head text-slate-400">
              <h2>Popular Searches</h2>
            </div>
            <div className="items">
              <div className="dropdown-item font-medium py-2 text-xl ">Engneering Flooring</div>
              <div className="dropdown-item font-medium py-2 text-xl">Grass flooring</div>
              <div className="dropdown-item font-medium py-2 text-xl">Wallpaper for Home</div>
              <div className="dropdown-item font-medium py-2 text-xl">
              Vinial
              </div>
            </div>
          </div>
        </div>
        <div
          className="close text-base font-medium mr-4 pt-2.5 cursor-pointer"
          onClick={onClose}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default Expandedbar;
