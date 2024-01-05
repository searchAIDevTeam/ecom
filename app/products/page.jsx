'use client'
import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import Products from "../../components/Product/Products";
import "../../components/Product/styles.css";
// import Footer from "../components/Footer/Footer";
import Measure from "../../components/Product/meausrement";
import Tabproduct from "../../components/Product/TabsProducts";

// const hideheader=
const ProductPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* {isFilterVisible && <Header />} */}
      <Products />
      <Tabproduct />
      <Measure />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductPage;
