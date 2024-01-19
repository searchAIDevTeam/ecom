import React from "react";
import "./styles.css";
import JoinAyatrioFamily from "./Footer_child/JoinAyatrioFamily";
import AyatrioFamily from "./Footer_child/AyatrioFamily";
import AyatrioServices from "./Footer_child/AyatrioServices";
import HelpSupports from "./Footer_child/HelpSupports";
import AboutAyatrio from "./Footer_child/AboutAyatrio";

const Footer = () => {
  return (
    <>
      <div className="sm:px-[50px] px-[20px] mt-20 pt-10 footer-container aspect-auto w-full h-[500px] sm:mb-0 mb-10 ">
        <div className="filter_container flex gap-32 w-full h-auto ">
          <div className="grid sm:grid-cols-6 grid-cols-1">
            <div className="sm:col-span-2 row-span-1 col-span-1 mr-12 mb-5">
              <JoinAyatrioFamily />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AyatrioFamily />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AyatrioServices />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <HelpSupports />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AboutAyatrio />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
          </div>
        </div>
      </div>

      <div className="flex sm:px-[50px] px-[20px]  footer_bg sm:flex-row flex-col justify-between p-4">
        <div className="flex  items-center space-x-4 text-lg font-semibold tracking-tight">
          <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            <li>
              <a href="#" className="me-4 hover:underline">
                <img
                  className="list-socialicon"
                  src="/social-icon/facebook-icon.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline">
                <img
                  className="list-socialicon"
                  src="/social-icon/instagram-icon.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline">
                <img
                  className="list-socialicon"
                  src="/social-icon/twitter-icon.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline">
                <img
                  className="list-socialicon"
                  src="/social-icon/youtube-icon.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <ul className="flex flex-wrap pt-2.5 justify-center text-gray-900 dark:text-white">
            <li>
              <a href="#" className="me-4 text-xs">
                © Ayatrio furnishing · 2015-2023
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <ul className="flex flex-wrap pt-2.5 justify-center text-gray-900 dark:text-white">
            <li>
              <a href="#" className="me-4 text-xs hover:underline">
                Cookie policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 text-xs hover:underline">
                Cookie settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
