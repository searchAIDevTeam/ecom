import React, { useState } from "react";
import Link from "next/link";
import Displaybox from "./Displaybox";
import { AsideSectionList } from "@/Model/Dropdown/AsideData/AsideData";

const Asidebox = ({ sectionId }) => {
  const [defaultLinkIndex, setDefaultLinkIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setDefaultLinkIndex(index);
  };

  return (
    <div className="absolute top-[3.5rem] left-0 bg-white flex noto-sans-200 transition-all duration-300 ease-linear w-full">
      <aside className=" w-1/4 p-4 border-r space-y-2">
        {AsideSectionList.map((value, idx) => (
          <Link
            key={idx}
            onMouseEnter={() => handleMouseEnter(idx)}
            className={`block p-2 text-lg font-medium ${
              defaultLinkIndex === idx ? "bg-gray-200" : ""
            }`}
            href="#"
          >
            {value.label}
          </Link>
        ))}
      </aside>
      {<Displaybox defaultLinkIndex={defaultLinkIndex} />}
    </div>
  );
};

export default Asidebox;
