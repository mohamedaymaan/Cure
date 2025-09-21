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
<<<<<<< HEAD
import Booking from "./Pages/Booking/Booking";
import { Toaster } from "react-hot-toast";

=======
import SignUp from "./Pages/auth/SignUp";
import Login from "./Pages/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyOTP from "./Pages/auth/VerifyOTP";
import ForgetPassword from "./Pages/auth/ForgetPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import Test from "./Pages/Test";
>>>>>>> origin/newbranch
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
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "doctors",
          element: <Doctors />,
        },
        {
          path: "favourite",
          element: <Favourite />,
        },
        {
          path: "specialist",
          element: <Specialist />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "map",
          element: <Mappage />,
        },
        {
          path: "searchlocation",
          element: <SearchLocation />,
        },

        {
          path: "loadingmap",
          element: <LoadingMap />,
        },
        {
          path: "searchresult",
          element: <SearchResult />,
        },
        {
          path: "the map",
          element: <PhoneMap />,
        },
        {
          path: "appointment",
          element: <Appointment />,
        },
        {
          path: "booking",
          element: <Booking />,
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
<<<<<<< HEAD
      <Toaster />
=======

      <ToastContainer position="top-center" autoClose={3000} />
>>>>>>> origin/newbranch
    </>
  );
}

export default App;
