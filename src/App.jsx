import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/auth/SignUp";
import Login from "./Pages/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyOTP from "./Pages/auth/VerifyOTP";
import ForgetPassword from "./Pages/auth/ForgetPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import Test from "./Pages/Test";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },

    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "forgetpass",
      element: <ForgetPassword />,
    },
    {
      path: "verifyotp",
      element: <VerifyOTP />,
    },
    {
      path: "resetpassword",
      element: <ResetPassword />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
