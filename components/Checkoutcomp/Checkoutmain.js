import React from "react";
import Learn from "./Learn";
import Form from "./Form";
// import Header from "../Header";
// import Footer from '../Footer/Footer'
const Checkoutmain = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="grid grid-col-2">
        <div className="col-span-1 sm:mx-32 mx-7 mt-32">
          <Learn />
          <Form />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Checkoutmain;
