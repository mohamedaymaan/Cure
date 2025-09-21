import React, { useContext } from "react";
import border from "../../assets/images/Vector 4.png";
import photo from "../../assets/images/Vector 5.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import OrLine from "../../assets/images/OrLine.png";
import { Link, useNavigate } from "react-router-dom";
import Heart from "../../assets/icons/BsHeartPulse.png";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/schemas";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

function SignUp() {
  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const onSubmit = async (values, actions) => {
    try {
      const success = await register(
        values.name,
        values.email,
        values.password,
        values.password_confirmation
      );
      if (!success) return;

      actions.resetForm();
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col py-16  lg:py-0  lg:relative ">
      {/* icon */}

      <div className="flex items-center justify-center">
        <div className="  lg:absolute  lg:top-[50px] lg:left-[100px]">
          <img
            src={Heart}
            alt="Heart Icon"
            className="size-[60px] lg:size-8 "
          />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="flex gap-2 md:gap-8 flex-col lg:pl-30 justify-center items-center w-full lg:w-1/2 ">
          {/* Fields box */}
          <div className="px-8  md:p-0 size-[90%] md:size-[80%] lg:size-[67%] ">
            <div className="flex items-center flex-col gap-4 justify-center">
              <h1 className="font-[Georgia] text-3xl text-[#05162C] ">
                Create new account
              </h1>
              <p className=" hidden lg:block font-montserrat text-[12px] text-[#6D7379] ">
                Please provide all information required to create your account
              </p>
            </div>
            <form
              className=" flex gap-4 flex-col"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-normal">
                  Name
                </label>
                <input
                  id="fullname"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  autoComplete="off"
                  placeholder="Name"
                  className="border-1 h-10 py-2 px-4 rounded-lg border-[#99A2AB] text-[#99A2AB] placeholder:text-[#99A2AB]"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email"> Email</label>
                <input
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="email"
                  className="border-1 h-10 py-2 px-4 rounded-lg 
                  border-[#99A2AB]
                  text-[#99A2AB] placeholder:text-[#99A2AB]"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password"> Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="password"
                  className="border-1 h-10 py-2 px-4 rounded-lg border-[#99A2AB] text-[#99A2AB] placeholder:text-[#99A2AB]"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  id="confirmpassword"
                  name="password_confirmation"
                  type="password"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="confirm Password"
                  className="border-1 h-10 py-2 px-4 rounded-lg border-[#99A2AB] text-[#99A2AB] placeholder:text-[#99A2AB]"
                />
                {formik.touched.password_confirmation &&
                  formik.errors.password_confirmation && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.password_confirmation}
                    </p>
                  )}
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="bg-gray-100 size-[20px] border-[#99A2AB] border-[1.5px] font-extralight text-blue-600 accent-blue-600"
                />
                <p className="lg:hidden">Remember me </p>
                <p className="hidden lg:block lg:text-sm ">
                  {" I agree to the "}
                  <a href="#" className="text-[#145DB8]">
                    Terms of Service
                  </a>
                  {" and "}
                  <a href="#" className="text-[#145DB8]">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <button
                  type="submit"
                  className="p-2 mt-2 rounded-lg bg-[#145DB8] w-full text-white cursor-pointer "
                >
                  Create an account
                </button>
                <div>
                  <img src={OrLine} alt="" />
                </div>
                <div className="flex flex-row justify-between">
                  <img className="cursor-pointer" src={facebook} alt="" />
                  <img className="cursor-pointer" src={google} alt="" />
                  <img className="cursor-pointer" src={apple} alt="" />
                </div>
                <div className="flex justify-center">
                  <p className="text-[#99A2AB] ">
                    Already have an account!
                    <span className="text-[#145DB8]">
                      <Link to={"/login"}> Sign in</Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden  lg:flex  lg:absolute  lg:right-0">
          <img
            className="absolute h-full top-0 right-1.5 "
            src={border}
            alt=""
          />
          <img className="" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
