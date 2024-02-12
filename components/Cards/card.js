import React, {useState, useEffect } from "react";
import "./styles.css";

import Carousel from "./swip";

import PopUp from "../Reviews/PopUp";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";

function Card(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleImageClick = () => {
    props.setPopupVisible(true);
  };
  const handleclick = async (id, category) => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getSingleProduct?id=${id}`;
    const response = await axios.get(url);
    const data = response.data;
    dispatch({ type: "FETCH_ROOM_REQUEST", payload: id });

    router.push(`/product`);
    
  };
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setSlide(slide === props.imgSrc.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? props.imgSrc.length - 1 : slide - 1);
  }
// useEffect(() => {
   
  
// }, [dispatch]);
  return (
    <>
      <div
        key={props.cardkey}
        className="card"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`card-flex ${props.cssClass}  `}
        >
        <div
      className="carousel cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && slide !== 0 && (
        <Image src='/svg/dropdown/leftvector.svg' height={20} width={20} alt="arrow"
          onClick={prevSlide}
          className="arrow arrow-left sm:mt-4"
        />
      )}
      {props.imgSrc?.map((item, idx) => {
   
        return (
          <Image
            src={item}
            alt="NA"
            key={idx}
            height={300}
            width={300}
            onClick={() => handleclick(props.id, props.category)}
            className={slide === idx ? "h-full w-full" : "slide-hidden"}
          />
        );
      })}

      {isHovered && (
        <div>
        <Image src='/svg/dropdown/rightvector.svg' height={20} width={20} alt="arrow"
              onClick={nextSlide}
          className="arrow arrow-right"
        />
        </div>
      )}
      <span className="flex absolute bottom-[16px]">
        {props.imgSrc.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
          {/* <Carousel data={props.imgSrc} className="card-img" /> */}
        </div>
        <div className="card-title">
          <div className="card-title-desc">{props.title}</div>
          <div className="card-rating">
            {/* <img src="/svg/star-full-icon.svg" className="w-6 h-6" alt="" /> */}

            {props.rating}
          </div>
        </div>
        <div className="card-date">{props.desc}</div>
        <div className="card-price">
          <strong>₹{props.price}</strong>
        </div>
      </div>
      {props.isPopupVisible && (
        <PopUp
          isPopupVisible={props.isPopupVisible}
          closePopup={props.closePopup}
        />
      )}
    </>
  );
      }


export default Card;
