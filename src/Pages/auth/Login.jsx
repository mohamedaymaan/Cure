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
import { loginSchema } from "../../schemas/schemas";
import AuthContext from "../../Context/AuthContext";
import BackSection from "../../Component/global/BackSection";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onSubmit = async (values, actions) => {
    try {
      const success = await login(values.email, values.password);
      if (!success) return;
      console.log("success");
      // ! change route
      navigate("/test"); 
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div>
      <div className="flex flex-col gap-3 lg:gap-0 py-10  lg:py-0  lg:relative ">
        {/* icon */}
        <BackSection/>
        <div className="flex items-center justify-center">
          <div className="  lg:absolute  lg:top-[50px] lg:left-[100px]">
            <img
              src={Heart}
              alt="Heart Icon"
              className="size-[60px] lg:size-8 "
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex gap-2 md:gap-8 flex-col lg:pl-30 justify-center items-center w-full lg:w-1/2 ">
            {/* Fields box */}
            <div className="  md:p-0 size-[90%] md:size-[80%] lg:size-3/4 ">
              <div className="flex items-center flex-col gap-4 justify-center">
                <h1 className="font-[Georgia] text-3xl text-[#05162C] ">
                  Sign in
                </h1>
                <p className=" hidden lg:block font-montserrat text-[12px] text-[#6D7379] ">
                  Please provide all information required to create your account
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className=" flex gap-4 flex-col"
                action=""
              >
                <div className="flex flex-col">
                  <label htmlFor="email"> Email</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="email"
                    className="border-1 h-10 py-2 px-4 rounded-lg border-[#99A2AB] text-[#99A2AB] placeholder:text-[#99A2AB]"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password"> Password</label>
                  <input
                    id="password"
                    name="password"
                    value={formik.values.password}
                    type="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-1 h-10 py-2 px-4 rounded-lg border-[#99A2AB] text-[#99A2AB] placeholder:text-[#99A2AB]"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <Link to={"/forgetpass"} className="text-[#145DB8]">
                  Forget the password?
                </Link>
                <div className="flex flex-col gap-6">
                  <button
                    type="submit"
                    className="p-2 mt-2 rounded-lg bg-[#145DB8] w-full text-white cursor-pointer "
                  >
                    Sign in
                  </button>
                  <div>
                    <img src={OrLine} alt="" />
                  </div>
                  <div className="flex flex-row justify-between">
                    <img
                      className="cursor-pointer size-[60px]"
                      src={facebook}
                      alt=""
                    />
                    <img
                      className="cursor-pointer size-[60px] "
                      src={google}
                      alt=""
                    />
                    <img
                      className="cursor-pointer size-[60px] "
                      src={apple}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[#99A2AB] ">
                      Don’t have an account?
                      <span className="text-[#145DB8]">
                        <Link to={"/register"}> Sign up</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:h-screen  lg:flex  lg:absolute  lg:right-0">
                   <img
                     className="absolute h-full top-0 right-1.5 "
                     src={border}
                     alt=""
                   />
                   <img className="" src={photo} alt="" />
                 </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
