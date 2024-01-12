// Expandedbar.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Expandbar.css";
import axios from "axios";
// import search from "../../assets/icon/search.svg";
// import mainlogo from "../../assets/ayatriologo.png";

const Expandedbar = ({ searchText, onClose, onSearch }) => {
  const [searchTexte, setSearchText] = useState(searchText);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cachedData = sessionStorage.getItem("cachedData");
        const cachedSearchText = sessionStorage.getItem("cachedSearchText");

        if (searchTexte !== cachedSearchText) {
          // Perform the search and update the cache
          const response = await axios.get(`http://43.204.166.53:8080/api/products?search=${searchTexte}`);
          sessionStorage.setItem("cachedData", JSON.stringify(response.data));
          sessionStorage.setItem("cachedSearchText", searchTexte);

          setData(response.data);
          console.log("search api fetched")
          console.log(response.data)
          onSearch(response.data);
        } else {
          setData(JSON.parse(cachedData));
          onSearch(JSON.parse(cachedData));
          console.log(data)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(() => {
      if (searchTexte) {
        fetchData();
      }
    }, 700);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTexte]);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
    <div className="expanded-search-box sm:block pt-2 bg-white sm:h-310px h-full z-30 sm:w-full w-[100vw] flex items-center justify-center absolute right-0">
      <div className="flex flex-row  justify-between bg-white rounded-lg w-full h-auto absolute left-0">
        <div className="logo hidden sm:block pl-2">
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
        </div>
        <div
          className="close text-base font-medium mr-4 pt-2.5 cursor-pointer"
          onClick={onClose}>Close
        </div>
      </div> 
    <div className="dropdown flex pt-20 pb-6 flex-col justify-center items-center pr-[18rem] gap-4 bg-white w-full">
            <div className="text-slate-400 -ml-16">
              <h2>Popular Searches</h2>
            </div>
            <div className="items cursor-pointer">
              <div className="dropdown-item font-medium py-2 text-xl ">Engneering Flooring</div>
              <div className="dropdown-item font-medium py-2 text-xl">Grass flooring</div>
              <div className="dropdown-item font-medium py-2 text-xl">Wallpaper for Home</div>
              <div className="dropdown-item font-medium py-2 text-xl">Vinial</div>
            </div>
          </div>
          </div>
    </>
  );
};

export default Expandedbar;
