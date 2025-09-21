// import React from "react";

// function ResetPassword() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen ">
//       <div>
//         <h1 className="text-2xl " >Forget your password</h1>
//       </div>
//       <div className="flex flex-col items-center justify-center h-screen ">
//         <div className="flex flex-col">
//           <h1 className="font-[Georgia] text-[16px] text-black">
//             Please enter your email to reset the password
//           </h1>
//           <label htmlFor="email"> Email </label>
//           <input
//             id="email"
//             name="email"
//             type="text"
//             placeholder="Email"
//             className="bg-[#F5F6F7] rounded-lg h-[48px] pl-4 pr-6 placeholder:text-[#99A2AB] text-sm "
//           />
//           <button
//             type="submit"
//             className="p-2 mt-2 rounded-lg bg-[#145DB8] w-full text-white cursor-pointer "
//           >
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../../api/baseURL";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import BackSection from "../../Component/global/BackSection";
import email from "../../assets/icons/email.png";

function ForgetPassword() {
  const navigate = useNavigate();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const reset = async (email) => {
    try {
      const response = await fetch(`${BASE_URL}/send-reset-otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        return false;
      }
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("OTP", result.data.note);
      const otpMatch = result.data.note.match(/\{(\d{6})\}/);
      const otp = otpMatch ? otpMatch[1] : null;
      toast.success(`OTP is : ${otp}`);
      toast.success(result.message);

      localStorage.setItem("expires_at", result.data.expires_at);
      return true;
    } catch (error) {
      toast.error("Something went wrong !");
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center  px-4 lg:px-0">
      <div className="w-full">
        <BackSection title={"Forget your password"} />
      </div>
      {/* lap */}
      <div className="hidden lg:flex justify-center w-full">
        <h1 className="text-2xl font-[Georgia]">Forget your password</h1>
      </div>
      <div className="md:hidden w-full max-w-md">
        <h1 className="font-[Georgia] text-[16px]">
          Please enter your email to reset the password
        </h1>
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ResetPasswordSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={async (values) => {
          try {
            const success = await reset(values.email);
            if (!success) return;
            navigate("/verifyotp");
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-6 w-full max-w-md">
            <div className="flex flex-col gap-2 relative">
              <img
                className="absolute left-2.5 top-3 size-6"
                src={email}
                alt=""
              />
              <Field
              
                name="email"
                type="email"
                placeholder="Email"
                className="bg-[#F5F6F7] w-full pr-5 pl-11 h-[48px] placeholder:text-[#99A2AB] rounded-xl"
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="p-3  rounded-lg font-montserrat bg-[#145DB8] text-white cursor-pointer w-full"
              >
                Reset Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default ForgetPassword;
