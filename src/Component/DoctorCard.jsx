import star from "../assets/icons/star.png";
import clock from "../assets/icons/Clock Circle.png";
import Favorite from "../assets/icons/Favorite.png";
import redFavorite from "../assets/icons/redheart.png";
import axios from "axios";
import { useState } from "react";

export default function DoctorCard(props) {
  return (
    <div className="w-[300px] sm:w-[358px] flex flex-col gap-[8px] h-[208px] rounded-[10px] p-[16px] shrink-0 bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.1)]">
      <div className="flex text-start gap-[10px] items-center justify-center w-full">
        <img
          src={props.img}
          className="w-[80px] sm:w-[97px] h-[88px] rounded-[10px]"
        />
        <div className="h-[88px] justify-evenly flex flex-col">
          <p className="font-[600] flex justify-between">
            {props.name}
            {props.fav ?? false ? (
              <img
                src={redFavorite}
                className="size-[21px]"
                onClick={props.removefav}
              />
            ) : (
              <img
                src={Favorite}
                className="size-[21px]"
                onClick={props.addfav}
              />
            )}
          </p>
          <p className="font-[400] text-[11px] sm:text-[16px] text-[#6D7379]">
            {props.special} | {props.hospital}
          </p>
          <div className="flex gap-[16px] ">
            <div className="flex gap-[4px] justify-center items-center">
              <img src={star} className="size-[20px]" />
              <p className="font-[500] text-[15px]">{props.Rating}</p>
            </div>
            <div className="flex gap-[4px] justify-center items-center">
              <img src={clock} className="size-[20px]" />
              <p className="font-[500] text-[10px] sm:text-[15px]">
                {props.time}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="font-[400] text-[18px]">
          Price<span className="text-[13px] text-[#6D7379]">/hour</span>
        </p>
        <p className="font-[400] text-[18px] text-[#FC4B4E]">${props.price}</p>
      </div>
      <button className=" cursor-pointer font-[400] w-full h-[48px] rounded-[10px] bg-[#145DB8] text-white ">
        Book appointment
      </button>
    </div>
  );
}
