"use client";
import Image from "next/image";
import React, { useState ,useRef } from "react";

const Warranty = () => {
  const countryCodes = [
    { code: "+1" },
    { code: "+44" },
    { code: "+91" },
    // Add more country codes as needed
  ];

  const [selectedCode, setSelectedCode] = useState("");

  const handleChange = (e) => {
    setSelectedCode(e.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const [selectedPurchased, setSelectedPurchased] = useState("");

  const handlePurchasedChange = (e) => {
    setSelectedPurchased(e.target.value);
  };

  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file ? file.name : "");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    alert("File submitted!");
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible1, setIsFormVisible1] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsFormVisible1(false);
  };

  const toggleFormVisibility1 = () => {
    setIsFormVisible1(!isFormVisible1);
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="flex w-full justify-center my-10 ">
        <div className="flex flex-wrap my-8">
          <div className="flex-1 flex-col lg:min-w-[660px]">
            <div
              onClick={toggleFormVisibility}
              className="flex bg-gray-200 border border-gray-300 w-full h-[300px] p-10 items-center"
            >
              <div className="w-full">
                <h1 className="text-4xl font-bold text-center">
                  Warrenty Registration
                </h1>
              </div>
            </div>
            {/* form */}
            {isFormVisible && (
              <div className="flex flex-col bg-gray-200 ">
                <h1 className="font-bold text-4xl mb-12 mt-2 text-center">
                  Warranty Registration
                </h1>
                <div className="w-full">
                  <form action="#">
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Full Name</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="border border-gray-400 py-2 px-3 w-full"
                        />
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Email</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <input
                          type="text"
                          placeholder="Enter Email id"
                          className="border border-gray-400 py-2 px-3 w-full"
                        />
                      </div>
                      <div className="mt-5">
                        <input type="checkbox" className="mx-2" />
                        <label htmlFor="#">
                          Accept to receive marketing news by email.
                        </label>
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Phone Number</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 flex">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3"
                        >
                          <option defaultValue="">+91</option>
                          {countryCodes.map((cc) => (
                            <option
                              className=" py-2 px-3"
                              key={cc.code}
                              value={cc.code}
                            >
                              ({cc.code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="border border-gray-400 py-2 px-3 w-full "
                        />
                      </div>
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Category</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Select Category</option>
                          <option value="backpack">Backpack</option>
                          <option value="duffle">Duffle</option>
                          <option value="accessories">Accessories</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Purchased From </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Please Select</option>
                          <option value="backpack">Offline</option>
                          <option value="duffle">Online</option>
                        </select>
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Invoice</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <span>
                        <p className="text-xs">The max file size is 10MB.</p>
                      </span>
                      <div className="relative w-1/2 mb-4 mt-1">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                        <button
                          onClick={handleButtonClick}
                          className="border border-gray-400 w-full py-2 px-4 "
                        >
                          Upload File
                        </button>
                        {selectedFileName && (
                          <div className="mt-2">
                            <p className="text-sm ml-2  text-green-500">
                              {selectedFileName}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1 flex justify-center">
                        <button
                          onClick={handleSubmit}
                          className="border border-gray-400 bg-gray-800 hover:bg-gray=200 text-white py-2 px-4 "
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {isFormVisible1 && (
              <div className="pt-8 bg-gray-200 lg:h-[1689px]">
                <h1 className=" text-xl font-bold  ml-12">Advantages</h1>

                <div className="mt-8 ">
                  <p className="leading-9  ml-16">
                    {" "}
                    - Free Repairs or Replacements <br />
                    - Product Reliability <br />
                    - Customer Support <br />
                    - Protection Against Fault <br />
                    - Value for Money
                    <br />
                    - Convenience
                    <br />
                    - Product Longevity
                    <br />
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* seconf form */}
          <div className="flex-1 flex-col lg:min-w-[660px]">
            <div
              onClick={toggleFormVisibility1}
              className="flex bg-gray-200 border border-b-gray-300 border-l-gray-600 w-full h-[300px] p-10 items-center"
            >
              <div className="w-full">
                <h1 className="text-4xl font-bold text-center">
                  Warrenty Claim
                </h1>
              </div>
            </div>
            {/* form */}
            {isFormVisible1 && (
              <div className="flex flex-col  bg-gray-200">
                <h1 className="font-bold text-4xl mb-12 mt-2 text-center">
                  Warranty Claim
                </h1>
                <div className="w-full">
                  <form action="#">
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">First name</label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">Last name</label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">Full address</label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter Your Address"
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">
                          Apartment, suite, etc. (optional){" "}
                        </label>
                        {/* <span className="mx-2 text-red-500">*</span> */}
                      </p>
                      <input
                        type="text"
                        placeholder="Apartment.."
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">City </label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter Your City Name"
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Country/Resion </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Select Country/Resion</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">State </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Select State</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">Pincode </label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter Your Pincode"
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Email</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <input
                          type="text"
                          placeholder="Enter Email id"
                          className="border border-gray-400 py-2 px-3 w-full"
                        />
                      </div>
                      <div className="mt-5">
                        <input type="checkbox" className="mx-2" />
                        <label htmlFor="#">
                          Accept to receive marketing news by email.
                        </label>
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Phone Number</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 flex">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3"
                        >
                          <option defaultValue="">+91</option>
                          {countryCodes.map((cc) => (
                            <option
                              className=" py-2 px-3"
                              key={cc.code}
                              value={cc.code}
                            >
                              ({cc.code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          placeholder="Enter Your Phoned"
                          className="border border-gray-400 py-2 px-3 w-full "
                        />
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Purchased From </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Please Select</option>
                          <option value="backpack">Website</option>
                          <option value="duffle">Amezon</option>
                          <option value="accessories">Flipcart</option>
                          <option value="accessories">Nykaa</option>
                          <option value="accessories">Tata Cliq</option>
                          <option value="accessories">Mintra</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Issue </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <div className="mb-4 mt-1 ">
                        <select
                          defaultValue=""
                          className="border border-gray-400 py-2 px-3 w-full"
                        >
                          <option defaultValue="">Select Issue</option>
                          <option value="backpack">Zip</option>
                          <option value="duffle">Stiching</option>
                          <option value="accessories">Material</option>
                          <option value="accessories">Color Fade</option>
                          <option value="accessories">Trolly</option>
                          <option value="accessories">Wheel</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2 px-6 mb-2">
                      <p className="mb-1">
                        <label htmlFor="#">Enter the reson</label>
                        <span className="mx-2 text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder=""
                        className="border border-gray-400 py-2 px-3 w-full"
                      />
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Damage Product Images </label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <span>
                        <p className="text-xs">
                          Atleast 3 images required(The max file size is 10MB)
                        </p>
                      </span>
                      <div className="relative w-1/2 mb-4 mt-1">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                        <button
                          onClick={handleButtonClick}
                          className="border border-gray-400 w-full py-2 px-4 "
                        >
                          Upload Images
                        </button>
                        {selectedFileName && (
                          <div className="mt-2">
                            <p className="text-sm ml-2  text-green-500">
                              {selectedFileName}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1">
                        <label htmlFor="#">Invoice</label>
                        <span className="mx-2 text-red-500">*</span>
                      </div>
                      <span>
                        <p className="text-xs">The max file size is 10MB.</p>
                      </span>
                      <div className="relative w-1/2 mb-4 mt-1">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                        <button
                          onClick={handleButtonClick}
                          className="border border-gray-400 w-full py-2 px-4 "
                        >
                          Upload Invoice
                        </button>
                        {selectedFileName && (
                          <div className="mt-2">
                            <p className="text-sm ml-2  text-green-500">
                              {selectedFileName}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="py-2 px-6">
                      <div className="mb-1 flex justify-center">
                        <button
                          onClick={handleSubmit}
                          className="border border-gray-400 bg-gray-800 hover:bg-gray=200 text-white py-2 px-4 "
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isFormVisible && (
              <div className="pt-8  bg-gray-200 lg:h-[812px]">
                <h1 className=" text-xl font-bold  ml-12">Advantages</h1>

                <div className="mt-8 ">
                  <p className="leading-9  ml-16">
                    {" "}
                    - Warranty Activation <br />
                    - Proof of Purchase <br />
                    - Customer Support <br />
                    - Product Improvement <br />
                    - Extended Warranty Offers <br />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Warranty;
