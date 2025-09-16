import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
     
     <div className="w-3/4 mx-auto">
      <Navbar />
       <Outlet />
     </div>
        
       
    
    </>
  );
}
