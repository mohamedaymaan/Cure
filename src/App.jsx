import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Notification from "./Component/Notification";
// Page Profile
import ProfilePage from "./Profile/ProfilePage";
import EditProfile from "./Profile/EditProfile";
import Settings from "./Profile/Settings";
import PaymentMethod from "./Profile/PaymentMethod";
import EmptyCards from "./Profile/EmptyCards";
import PasswordManagement from "./Profile/PasswordManagement";
import VisaVersion from "./Profile/VisaVersion";
import AddNewCard from "./Profile/AddNewCard";
import FAQs from "./Profile/FAQs";
import PrivacyPolicy from "./Profile/PrivacyPolicy";
import Favorite from "./Component/Favorite";
import Done from "./Profile/Done";
// import CardsWrapper from "./Profile/CardsWrapper";

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

const router = createHashRouter([
  {
    path:'/',
    element:<Layout /> ,
    children:[
  {
    index:true, 
    element:<Home/>
  }, 
    {
      path:'home', 
      element:<Home/>
    }
  ]},
])
   return (
    <>
    <RouterProvider router={router} /> 
      </>
  )
}

export default App