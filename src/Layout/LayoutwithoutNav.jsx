import React from "react";
import { Outlet } from "react-router";

export default function LayoutWithoutNav() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
