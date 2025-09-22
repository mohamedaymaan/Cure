import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";

import Appointment from "./Pages/Appointment/Appointment";
import Doctors from "./Pages/Doctors/Doctors";
import Favourite from "./Pages/Favourite/Favourite";
import Specialist from "./Pages/Specialist/Specialist";
import Search from "./Pages/Search/Search";
import Mappage from "./Pages/Map/Mappage";
import SearchLocation from "./Pages/Search/SearchLocation";
import LoadingMap from "./Pages/Search/LoadingMap";
import SearchResult from "./Pages/Search/SearchResult";
import PhoneMap from "./Pages/Map/PhoneMap";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Booking from "./Pages/Booking/Booking";
import { Toaster } from "react-hot-toast";
import SignUp from "./Pages/auth/SignUp";
import Login from "./Pages/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyOTP from "./Pages/auth/VerifyOTP";
import ForgetPassword from "./Pages/auth/ForgetPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import Test from "./Pages/Test";
import { ProtectUser } from "./protectedRouting/ProtectedRouting";
import LayoutWithoutNav from "./Layout/LayoutwithoutNav";
function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element:<ProtectUser><Home /></ProtectUser> ,
        },
        {
          path: "home",
          element: <ProtectUser><Home /></ProtectUser>,
        },
        {
          path: "doctors",
          element: <ProtectUser><Doctors /></ProtectUser>,
        },
        {
          path: "favourite",
          element:<ProtectUser><Favourite /></ProtectUser>,
        },
        {
          path: "specialist",
          element: <ProtectUser><Specialist /></ProtectUser>,
        },
        {
          path: "search",
          element: <ProtectUser><Search /></ProtectUser>,
        },
        {
          path: "map",
          element: <ProtectUser><Mappage /></ProtectUser>,
        },
        {
          path: "searchlocation",
          element: <ProtectUser><SearchLocation /></ProtectUser>,
        },

        {
          path: "loadingmap",
          element: <ProtectUser><LoadingMap /></ProtectUser>,
        },
        {
          path: "searchresult",
          element: <ProtectUser><SearchResult /></ProtectUser>,
        },
        {
          path: "the map",
          element: <ProtectUser><PhoneMap /></ProtectUser>,
        },
        {
          path: "appointment",
          element: <ProtectUser><Appointment /></ProtectUser>,
        },
        {
          path: "booking",
          element: <ProtectUser><Booking /></ProtectUser>,
        },
      ],
    },
    {
      path: "/",
      element: <LayoutWithoutNav />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <SignUp />,
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
        { path: "*", element: "<Notfound />" },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
