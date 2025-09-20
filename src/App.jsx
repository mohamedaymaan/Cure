import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Doctors from "./Pages/Doctors";
import Notification from "./Pages/Notification/Notification";
import 'flowbite';
import { useEffect } from "react";
import Booking from "./Pages/Booking/Booking";

function App() {
  useEffect(()=>{
     initFlowbite();
  },[])
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
          path: "appointment",
          element: <Appointment />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "booking",
          element: <Booking />,
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
