import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
    <div className="w-4/5 mx-auto">
       <Navbar />
    </div>
     
      <Outlet />
    </>
  );
}
