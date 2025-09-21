import React from "react";
import back_arrow from "../../assets/icons/backarrow2.png";
import { useNavigate } from "react-router";
function BackSection({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row p-4  justify-between relative lg:hidden">
      <button
        className=" left-3  absolute md:left-16"
        onClick={() => navigate(-1)}
      >
        <img className="size-6" src={back_arrow} alt="" />
      </button>

      <h1 className="absolute left-[40%] md:left-1/2 transform -translate-x-1/2 text-[17px] ml-10 font-[Georgia]  ">
        {title}
      </h1>
    </div>
  );
}

export default BackSection;
