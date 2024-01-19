'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const LoginComponent = () => {
  const router=useRouter()

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/auth/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      if (data.isAuthenticated) {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/google/callback", "_self");
    } catch (error) {
      console.error("Error initiating Google OAuth:", error);
    }
  };
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };


  return (
    <>
    <div className="flex flex-wrap justify-around w-full">
    
    <div className="flex p-8 w-[430px]">
    <div className="w-full">
        {/* <div className="imgBox">
          <img className="boxImg" src="https://in.accounts.ikea.com/resources/static/logo.png" alt="" />
          <img className="boxImg" src="/logo/ayatriologo.png" alt="" />
        </div> */}
        <div className="img__con111 sm:block flex items-center justify-center">
          <Image src="/logo/ayatriologo.png" width={200} height={100} alt="logo" className="w-48 m-2" />
        </div>

        <div className="mt-4 w-full">
          <h1 className="text-lg font-bold text-gray-800">Create an IKEA Business Network account for free and get:</h1>
          <div className="w-full h-8"></div>
          <ul className="list-disc p-5 ">
            <li className="py-1 text-base">Online access to your invoices and purchase history</li>
            <li className="py-1 text-base">Access to IKEA Family offers</li>
            <li className="py-1 text-base">Interior design advice</li>
            <li className="py-1 text-base">Perks for you and your colleagues</li>
            <li className="py-1 text-base">Free online training</li>
          </ul>
          <p className="text-base pt-4 mb-7">... and a whole lot more!</p>
          <div className="flex flex-row gap-4">
            <div className="  flex flex-col gap-4 w-6/12">
              <Image className="rounded-md" width={200} height={256}src="/login/login1.jpg"/>
              <Image className="rounded-md" width={200} height={256}src="/login/login3.jpg"/>
              
              {/* <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_1.jpg" alt="" />
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_3.jpg" alt="" /> */}
            </div>
            <div className="  flex flex-col gap-4 w-6/12">
            <Image className="rounded-md" width={200} height={240}src="/login/login2.jpg"/>
              <Image className="rounded-md" width={200} height={240}src="/login/login4.jpg"/>
              {/* <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_2.jpg" alt="" />
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_4.jpg" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <div className="flex justify-center w-[430px]">
      
    <div className="flex transform translate-y-14 justify-center sm:px-[50px] px-[20px]"> 
    {/*item-center removed*/}
      <div className="bg-white">
        <div className="img__con111 sm:block flex items-center justify-center">
          <Image src="/logo/ayatriologo.png" width={200} height={100} alt="logo" className="w-48 m-2" />
        </div>

        {/* <div className=" break-words mt-[30px] mb-[10px] w-full text-black sm:text-[30px] text-xl font-[600] -tracking-[1.2px] sm:block flex items-center justify-center  ">
          <h3>Wellcome to ayatrio family profile</h3>
        </div> */}
        <div
          className="Modal_subtitle mb-[38px] sm:w-[60%] sm:text-left text-center flex items-center justify-center"
         
        >
          Become a member of Ayatrio Family today. It's free to join? Get the
          details.
        </div>
        <div className="sm:block flex justify-center items-center">
          <button
            onClick={handleGoogleLogin}
            className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center mb-7"
          >
            {/* <Google className="mr-2" /> */}
            Login with Google
          </button>
        </div>
        <div className="gflbutton">
          <div className="BzWZlf sm:block flex items-center justify-center">
            <button onClick={toggleFormVisibility} className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center ">
              Login With Business
            </button>
          </div>
        </div>
        {isFormVisible && (
        <div id="signInForm">
        <form action="">
        <div className="w-full h-8"></div>
          <div className="relative mb-1"><h4 className="font-bold " >Business Information</h4></div>
          <div className="w-full">
            <div className="w-full">
              <label className="block mb-1" htmlFor="">Legal Business name</label>
              <input className="h-10 w-full border border-black" type="text" />
              </div>
            </div>
          <div className="w-full">
            <div className="w-full">
              <label className="block mb-1" htmlFor="">GSTIN</label>
              <input className="h-10 w-full border border-black" type="text" />
              </div>
            </div>
          <div className="w-full">
            <div className="w-full">
              <label className="block mb-1" htmlFor="">Industry segment (Optional)</label>
              <input className="h-10 w-full border border-black" type="text" />
              </div>
            </div>
            </form>
            <div className="sm:block flex justify-center mt-5 mb-5items-center">
          <button
            className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center sm:w-3/5 w-52">
            Login 
          </button>
        </div>
           
            </div>
            
           )}
           
        <div className="terms flex flex-row gap-3 mt-4 mb-10">
        <input type="checkbox" />
          <span className="mtp text-xs">
            By continuing, you agree to Ayatrio's{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-test-id="tos"
              href="/_/_/policy/terms-of-service/"
            >
              Terms of Service
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-test-id="privacy"
              href="/_/_/policy/privacy-policy/"
            >
              Privacy policy
            </a>{" "}
            including{" "}
            <a target="_blank" rel="noopener noreferrer" data-test-id="privacy">
              {" "}
              Cookie Use{" "}
            </a>
            .{" "}
          </span>
        </div>
      </div>
    </div>
    </div>
     </div>
    </>
  );
};

export default LoginComponent;
