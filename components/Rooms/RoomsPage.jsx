"use client";
import Image from "next/image";

import bedimageh from "../../public/testp/h.jpeg";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Mousewheel, Pagination, FreeMode } from 'swiper/modules';
import TabImage from "../Cards/TabImage";
import Card from "../Cards/card";


export const RoomsPage = ({ params }) => {
    const [productData, setProductData] = useState([]);
    const [roomData, setRoomData] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);

    useEffect(() => {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rooms?roomType=${params.replace(/-/g, " ")}`;

        const apiUrl2 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/productsByRoomType?roomType=${params.replace(/-/g, " ")}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setRoomData(data))
            .catch((error) => console.error('Error fetching data:', error));

        fetch(apiUrl2)
            .then((response) => response.json())
            .then((data) => setProductData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(productData);
    console.log(roomData);

    const swiperUseref = useRef(null);
    const swiperOptions2 = {
        slidesPerView: 4.08,
        centeredSlides: false,
        spaceBetween: 1,
        modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
        navigation: {
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
        },
        noSwiping: true,
        allowSlidePrev: true,
        allowSlideNext: true,
    };

    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);

    return (
        // <div className="pt-12 bg-white sm:px-[50px] px-[20px]">
        <div>
            <div className="pt-12 w-full flex justify-center ">
                <div className="w-10/12  p-5 p flex flex-col">
                    <h1 className="text-2xl font-semibold">{params.replace(/-/g, " ").toUpperCase()}</h1>
                    <p className="mt-5 w-7/12">
                        Our bedroom furniture includes single bed, double bed or king-size
                        beds perfect for everyone. Many of our beds come with storage options.
                        Also, our cots and children's beds are perfect for kids. And our
                        sofa:beds, guests are a solution to a tight space.
                    </p>
                    <a className="mt-5" href="/">
                        click here for size guide
                    </a>
                    <h1 className="mt-20 text-2xl font-semibold">
                        Double bed comfort, as you like it
                    </h1>
                    <div className="mt-5  flex justify-between items-end">
                        <p className="w-7/12">
                            Whatever its style, a double bed with headboard always creates an inviting centrepiece.
                            Whether you’re after a sleek, timeless finish, the warmth of cosy upholstery, or prefer
                            elegantly curved metal, explore our range to find one for your dream bedroom, and your budget.
                        </p>
                        <button className="border-2 border-black rounded-full p-3">
                            see all double beds
                        </button>
                    </div>
                    <div>
                        <div className="mt-5 gap-3 flex">
                            <div className="w-1/2">
                                {roomData.length > 0 && (
                                    <img
                                        className="w-full h-auto object-cover"
                                        src={roomData[0].imgSrc} // Use the first image of the first product
                                        alt="First Image of First Product"
                                    />
                                )}
                            </div>
                            <div className="w-1/2 columns-2 gap-3">
                                {roomData.slice(1, 5).map((product, index) => (
                                    <div key={index}>

                                        <img
                                            key={product._id}
                                            src={product.imgSrc}
                                            className="w-full h-auto object-cover"
                                            alt={`Image of Product ${index + 2}`}
                                        />

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20  flex justify-between items-center">
                        <h1 className=" text-2xl font-semibold">
                            Looking for Bedroom Storage options ?
                        </h1>
                        <button className="border-2 border-black rounded-full p-3">
                            Explore all Bedroom storage solution
                        </button>
                    </div>
                    <div className="mt-20 flex bg-orange-500">
                        <Image
                            src={bedimageh}
                            width={850}
                            className=""
                            height={100}
                            alt="Image of bed"
                        />
                        <div className="py-20 pl-10 flex flex-col  justify-between ">
                            <h1 className="text-xl  w-3/4 font-semibold">
                                Explore all Bedroom storage solution
                            </h1>
                            <div className="bg-black w-14 h-14 flex justify-center items-center text-white rounded-full">
                                A
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <h1 className="mt-20 text-2xl font-semibold">
                            Guests Beds & Day Beds for your guest
                        </h1>
                        <div className="mt-5  flex justify-between items-end">
                            <p className="w-7/12">
                                Family or friends staying over can mean a lot of fun and a lot of things going on.
                                A good day bed is more than just a sofa. It also gives guests the comfort they need
                                to sleep well so you can all make the most of your time together.
                            </p>
                            <button className="border-2 border-black rounded-full p-3">
                                See all guest beds & day beds
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-5">
                        {roomData.length > 0 && (
                            roomData.map((room, index) => (
                                <div key={index} className="w-1/2">

                                    <TabImage
                                        src={room.imgSrc}
                                        alt={`Image ${index + 1} of Product`}
                                        width={500}
                                        height={100}
                                        labelData={room.children}
                                    />
                                </div>
                            ))
                        )}

                    </div>
                    <div className="mt-20">
                        <h1 className="text-2xl font-semibold">
                            Essentials to help your guests feel at home
                        </h1>
                        <div className="mt-5  flex justify-between items-end">
                            <p className="w-7/12 mb-10">
                                From soft bed linen to hangers for party dresses,
                                here are a few ideas to help you make sure that when family and
                                friends visit, they have the practical things they need.
                            </p>
                        </div>
                    </div>


                    <div className="pt-12  mb-20  bg-white sm:px-[50px] px-[20px]">
                        <div className="mb-2 w-full flex justify-between items-center">

                            <div className="Slidenav flex  bg-white text-2xl cursor-pointer  text-white rounded-full gap-2">

                                <div
                                    onClick={() => swiper1Ref.current.swiper.slidePrev()}
                                    className="custom-prev-button bg-slate-500  rounded-full  hover:bg-400 hover:scale-110 hover:text-slate-100"
                                ></div>
                                <div
                                    onClick={() => swiper1Ref.current.swiper.slideNext()}
                                    className="custom-next-button bg-slate-500  rounded-full hover:bg-400 hover:scale-110 hover:text-slate-100"
                                ></div>
                            </div>
                        </div>
                        <Swiper
                            ref={swiper1Ref}
                            {...swiperOptions2}
                            scrollbar={{
                                hide: false,
                                draggable: true,
                            }}
                            mousewheel={{
                                forceToAxis: true,
                                invert: false,
                            }}
                            freeMode={{
                                enabled: false,
                                sticky: true,
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 1,
                                },

                                // 640: {
                                //   slidesPerView: 1.25,
                                //   spaceBetween: 5,
                                // },
                                1024: {
                                    slidesPerView: 4.07,
                                    spaceBetween: 5,
                                },
                            }}
                            allowSlideNext={true}
                            allowSlidePrev={true}
                            slideNextClass="custom-next-button"
                            slidePrevClass="custom-prev-button"
                            onSwiper={setSwiperRef}
                            className="px-10"
                        >
                            {!productData ? (
                                <SwiperSlide>
                                    <div className="flex"></div>
                                </SwiperSlide>
                            ) : (
                                productData.map((product, idx) => {
                                    return (
                                        <SwiperSlide key={idx} className="ml-0">
                                            <div className="grid grid-cols-1 mt-2 w-full  h-full fade-in ">
                                                <Card
                                                    title={product.productTitle}
                                                    // date={product.date}
                                                    price={product.perUnitPrice}
                                                    desc={product.productTitle}
                                                    imgSrc={product.images}
                                                    rating={product.ratings}
                                                    key={idx}
                                                    id={product._id}
                                                    category={product.category}
                                                    productId={product.productId}
                                                    cssClass={"card1flex"}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            )}
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}
