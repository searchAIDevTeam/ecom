'use client'
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import Carousel from './swip';
import PopUp from '../Reviews/PopUp';
// import { useNavigate } from 'react-router-dom';

function ItemCard(props) {
  const [isFullBioVisible, setFullBioVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  // const navigate = useNavigate();
  const carouselData = [
    'https://unsplash.com/photos/2d4lAQAlbDA/download?force=true&w=640',
    'https://unsplash.com/photos/2d4lAQAlbDA/download?force=true&w=640',
    'https://unsplash.com/photos/2d4lAQAlbDA/download?force=true&w=640',
    'https://unsplash.com/photos/2d4lAQAlbDA/download?force=true&w=640',
    // Add more image URLs as needed
  ];
  
  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  // const toggleFullBio = () => {
  //   setFullBioVisible(!isFullBioVisible);
  // };

  return (
    <>
      <div
        className="card m-2"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div className={`card-flex ${props.cssClass} `}>
          <Carousel data={carouselData} className="card-img" />
          <div className="review-icon-container">
            <Image
              src="/rooms/rev.webp"
              width={10}
              height={10}
              className="h-8 rounded-md cursor-pointer"
              onClick={handleImageClick}
              alt="Review Icon"
            />
          </div>
        </div>
        <div className="card-title" 
        // onClick={() => navigate('/rooms')}
        >
          <div className="card-title-desc">{props.title}</div>
          <div className="card-rating">
            {/* <StarIcon fontSize="small" /> */}
            <Image src="/rooms/star-full-icon.svg" width={20} height={20} alt='star'/>
            {props.rating}
          </div>
        </div>
        <div className="card-date">{props.desc}</div>
        <div className="card-price">
          <strong>₹{props.price}</strong>
        </div>
      </div>
      {isPopupVisible && (
        <PopUp isPopupVisible={isPopupVisible} closePopup={closePopup} />
      )}
    </>
  );
}

export default ItemCard;
