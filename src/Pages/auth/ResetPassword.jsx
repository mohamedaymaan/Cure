import React from "react";
import BackSection from "../../Component/global/BackSection";
import key from "../../assets/icons/Key.png";
import { Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "../../schemas/schemas";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function ResetPassword() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const otp = localStorage.getItem("OTP");
  const reset = async (email, otp, password, password_confirmation) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reset-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          password,
          password_confirmation,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        toast.error(result.message);
        return false;
      }
      toast.success(result.message);
      navigate("/login");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center  px-4">
      {/*mobile */}
      <div className="w-full max-w-md">
        <BackSection title={"Set new password"} />
      </div>

      {/* lap */}
      <div className="hidden lg:flex justify-center w-full">
        <h1 className="text-2xl font-[Georgia]">Set new password</h1>
      </div>

      {/* mobile  */}
      <div className="md:hidden w-full max-w-md">
        <h1 className="font-[Georgia] text-[16px]">
          Create a new password, ensure it's different from your previous ones
          for security.
        </h1>
      </div>

      {/* Inputs */}
      <Formik
        initialValues={{
          password: "",
          password_confirmation: "",
        }}
        validationSchema={ResetPasswordSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={async (values) => {
          try {
            const success = await reset(
              email,
              otp,
              values.password,
              values.password_confirmation
            );
            if (!success) return;
            navigate("/login");
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-6 w-full max-w-md">
            <div className="flex flex-col gap-4">
              {/* New Password */}
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="password"
                  className="font-[Georgia] text-[18px]"
                >
                  New password
                </label>
                <img
                   className="absolute left-2.5 top-12 size-5"
                  src={key}
                  alt=""
                />
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-[#F5F6F7] w-full pr-5 pl-8 h-[48px] placeholder:text-[#99A2AB] rounded-xl"
                />
                {errors.password && touched.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="confirmPassword"
                  className="font-[Georgia] text-[18px]"
                >
                  Confirm password
                </label>
                <img
                  className="absolute left-2.5 top-12 size-5"
                  src={key}
                  alt=""
                />
                <Field
                  id="confirmPassword"
                  name="password_confirmation"
                  type="password"
                  placeholder="Password"
                  className="bg-[#F5F6F7] w-full pr-5 pl-8 h-[48px] placeholder:text-[#99A2AB] rounded-xl"
                />
                {errors.password_confirmation &&
                  touched.password_confirmation && (
                    <p className="text-sm text-red-500">
                      {errors.password_confirmation}
                    </p>
                  )}
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="p-3 mt-6 rounded-lg font-montserrat bg-[#145DB8] text-white cursor-pointer w-full"
              >
                Update Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ResetPassword;
