import "../../Dropitems/Styles";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Helpcollections = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  const helpcollections = [
    "Design & Planners",
    "Return policy",
    "Prices and price tags",
    "Gift Card",
    "Contact us",
    "FAQ",
    "Terms and conditions",
  ];
  return (
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px] `}>Help</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {helpcollections.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:hidden ">
        <h4
          className="filter_heading_mobile font-semibold mb-[20px]  flex flex-row justify-between items-center text-black"
          onClick={handleToggleAccordion}
        >
          Help
          {isAccordionOpen ? (
            <FaChevronUp className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <FaChevronDown className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden mb-3">
            <ul className="filter_content_list_mobile flex flex-col gap-[20px] font-normal text-slate-700 ">
              {helpcollections.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Helpcollections;
