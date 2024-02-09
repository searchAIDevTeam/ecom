import React, { useEffect } from "react";
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
          onClick={() => handleclick(props.id, props.category)}
        >
          <Carousel data={props.imgSrc} className="card-img" />
          <div className="review-icon-container   ">
            <Image
              src="/images/rev.webp"
              className="h-8 rounded-md cursor-pointer"
              onClick={handleImageClick}
              width={40}
              height={40}
              alt="Review Icon"
            />
          </div>
        </div>
        <div className="card-title">
          <div className="card-title-desc">{props.title}</div>
          <div className="card-rating">
            <img src="/svg/star-full-icon.svg" className="w-6 h-6" alt="" />

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
