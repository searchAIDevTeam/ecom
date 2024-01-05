import React from "react";
// import blackcurtain from "../../assets/product/block-out-curtains-700218.avif";
// import lightfilter from "../../assets/product/light-filtering-curtains-700220.avif";
// import netvolie from "../../assets/product/net-volie-curtains-700221.avif";
// import panelcurtain from "../../assets/product/panel-curtains-10702.avif";
// import roomdarkening from "../../assets/product/room-darkening-curtains-700219.avif";
// import sewingmachine from "../../assets/product/sewing-accessories-14350.avif";
const Products = () => {
  const pdt = [
    {
      pid: 1,
      name: "Block-out curtains",
      category: "curtain",
      img: "product/blackcurtain.avif",
    },
    {
      pid: 2,
      name: "Room darkening curtains",
      category: "curtain",
      img: "product/roomdarkening.avif",
    },
    {
      pid: 3,
      name: "Light filtering curtains",
      category: "curtain",
      img: "product/lightfilter.avif",
    },
    {
      pid: 4,
      name: "Net & sheer curtains",
      category: "curtain",
      img: "product/netvolie.avif",
    },
    {
      pid: 5,
      name: "Panel curtains",
      category: "curtain",
      img: "product/panelcurtain.avif",
    },
    {
      pid: 6,
      name: "Sewing accessories",
      category: "curtain",
      img: "product/sewingmachine.avif",
    },
  ];
  return (
    <div className="relative top-20 sm:px-[50px] px-[20px] ">
      {/* main heading of pdt */}
      <h1 className="text-3xl font-bold mb-10">Curtain</h1>
      {/* img of product using flex and a fix width */}
      <div className="flex flex-row gap-3 sm:w-[65vw] sm:overflow-x-hidden overflow-x-auto mb-16">
        {pdt.map((txt, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <img className="sm:min-w-[120px]  sm:h-[70px] min-w-[120px] h-[70px]" src={txt.img} alt={txt.name} />
            <p>{txt.name}</p>
          </div>
        ))}
      </div>

      {/* relevant text */}

      <p className="sm:w-[50vw] w-[100%] text-base text-justify">
        Waking up to harsh sunlight can put your mornings to an unpleasant
        start. And more than that, uncovered windows also take away your
        privacy. Curtains and blinds keep your home secured, and at the same
        time, regulate the amount of light inside it. From IKEA’s wide range of
        curtains, there's a design for every individual taste. Smooth fabrics,
        unconventional patterns, and diverse colours make this collection truly
        unique. Apart from being stylish, these curtains also have excellent
        light blocking features that keep your interiors cool and safe.
      </p>


    </div>
  );
};

export default Products;
