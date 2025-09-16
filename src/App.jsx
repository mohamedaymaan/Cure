<<<<<<< HEAD
import {  createHashRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import Appointment from './Pages/Appointment/Appointment'


=======
import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Doctors from "./Pages/Doctors";
>>>>>>> 56390bd285f9888e4835a726037797c4ba5c98fa

function App() {
  const router = createHashRouter([
    {
<<<<<<< HEAD
      path:'home', 
      element:<Home/>
    },
    {
      path:'appointment', 
      element:<Appointment/>
    }
  ]},
])
   return (
=======
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
      ],
    },
  ]);
  return (
>>>>>>> 56390bd285f9888e4835a726037797c4ba5c98fa
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
