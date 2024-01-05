import React, { useRef, useState, useEffect } from "react";
// import search from "../../assets/icon/search.svg";

const MobileSearch = ({ isOpen, onClose, onSearch }) => {
  const inpRef = useRef(null);
  const [searchEngine, SetSeacrhEngine] = useState("");

  useEffect(() => {
    // Reset searchEngine state when the modal opens
    SetSeacrhEngine("");
  }, [isOpen]);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`modal-overlay  z-[9999]  bg-white h-full w-full ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal sm:hidden block" onClick={handleModalClick}>
        <div className="flex flex-row gap-2 justify-evenly pt-10">
          <div className="searchDiv  flex flex-col justify-between">
            <div className="searchCon relative sm:w-[600px] w-[60vw] h-[40px]  bg-[#e5e5e5] rounded-xl ">
              <input
                ref={inpRef}
                type="text"
                placeholder="Search"
                className="search-input  border px-4 h-full sm:w-full w-[60vw] ml-8 rounded-xl focus:outline-none"
                value={searchEngine}
                onChange={(e) => {
                  SetSeacrhEngine(e.target.value);
                  onSearch(e);
                }}
              />
              <img
                src="/search.svg"
                alt=""
                className="w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10"
              />
            </div>
            <div className=" flex flex-col mb-8 gap-4 font-bold font-sans ">
              <div className=" font-normal text-slate-400">
                <h2>Popular Searches</h2>
              </div>
              <div>
                <div>Products</div>
                <div>Rooms</div>
                <div>Magazine</div>
                <div>Virtual Experience</div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={onClose} className="border rounded-3xl p-1">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
