import React from "react";
import ProductPage from "../Meta";

export function generateMetadata({ params, searchParams }, parent) {
  // console.log("f", params, searchParams);
  return {
    title: decodeURIComponent(params.cat),
  };
}

const page = ({ params }) => {
  return (
    <>
      <ProductPage params={params} />
    </>
  );
};

export default page;
