import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import FootBar from "./../Component/FootBar";

export default function Layout() {
  return (
    <div className="mb-[63px] md:mb-[0px]">
      <Navbar />
      <Outlet />
      <FootBar />
    </div>
  );
}
