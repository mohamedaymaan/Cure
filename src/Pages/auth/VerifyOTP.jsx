import React, { useEffect, useRef, useState } from "react";
import BackSection from "../../Component/global/BackSection";
import { BASE_URL } from "../../api/baseURL";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Verifyotp() {
  const inputs = new Array(6).fill("");
  const inputref = useRef([]);
  const [otp, setotp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  function handleChange(e, index) {
    const value = e.target.value;
    setotp((prev) => {
      const newotp = [...prev];
      newotp[index] = value;
      return newotp;
    });
    if (value && index < inputs.length - 1) {
      inputref.current[index + 1]?.focus();
    }
  }
  useEffect(() => {
    inputref.current[0]?.focus();
  }, []);

  const email = localStorage.getItem("email");
  const verify = async (otp, email) => {
    try {
      const response = await fetch(`${BASE_URL}/verify-otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        return false;
      }
      localStorage.setItem("OTP", otp);
      toast.success(result.message);
      //   console.log("navigatee")
      navigate("/resetpassword");
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
  return (
   <div class="flex flex-col gap-6 px-6 justify-center ">
      <div className="">
        <BackSection title="Code Verification" />
      </div>
      <div className="lg:p-9 gap-12 lg:gap-7 items-center flex flex-col justify-center">
         <div className="flex flex-col text-center  ">
       
        <h1 className="text-[#404448] text-[16px] lg:text-2xl font-montserrat font-normal">
          Code has been send to your email
        </h1>
        <h1 className="text-[#05162C] text-[16px] lg:text-lg font-montserrat font-normal">
          Check your Email
        </h1>
      </div>
      <div className="flex flex-row gap-2">
        {inputs.map((_, index) => (
          <input
            ref={(e) => (inputref.current[index] = e)}
            onChange={(e) => handleChange(e, index)}
            key={index}
            className="bg-[#F5F6F7] text-center text-black h-10 w-8 lg:size-10 outline-sky-500 p-2 rounded-sm "
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
      <h1>Resend code in <span className="text-[#145DB8]" >55</span> s</h1>
      <button
        onClick={async () => {
          const finalotp = otp.join("");
          if (finalotp.length === 6) {
            await verify(finalotp, email);
          } else {
            toast.error("Please enter all 6 digits");
          }
        }}
        type="submit"
        className="p-2 mt-2 w-full md:w-1/2 lg:w-1/4 text-center rounded-lg bg-[#145DB8]  text-white cursor-pointer "
      >
        Verify
      </button>
      </div>
     
    </div>
  );
}

export default Verifyotp;
