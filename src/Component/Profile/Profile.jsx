import React from "react";
import ProfilePic from "../../assets/icons/ProfilePic.png";
import Verify from "../../assets/icons/Verify.png";
import User from "../../assets/icons/user.png";
import BlackStar from "../../assets/icons/BlackStar.png";
import Medal from "../../assets/icons/medal.png";
import Message from "../../assets/icons/messages.png";
import Map from "../../assets/icons/Map.png";
import Pin from "../../assets/icons/Marker.png";
import Location from "../../assets/icons/Location.png";

export default function Profile() {
  return (
    <>
      <div className="pt-[32px] px-[16px] pb-[24px] rounded-2xl bg-neutral-100 flex flex-col gap-6 justify-center">
        <div className="space-y-2 text-center self-center">
          <div className="relative">
            <img src={ProfilePic} alt="" />
            <img
              src={Verify}
              className="absolute start-20 bottom-[2px]"
              alt=""
            />
          </div>
          <h2>Dr. Jessica Turner</h2>
          <p>Pulmonologist</p>
        </div>
        <div className="flex justify-around text-center">
          <div className="item w-[56px] h-[98px]">
            <img src={User} alt="" />
            <p>2,000+</p>
            <span className="text-[14px] text-neutral-400">patients</span>
          </div>
          <div className="item w-[56px] h-[98px]">
            <img src={Medal} alt="" />
            <p>10+</p>
            <span className="text-[14px] text-neutral-400">experience</span>
          </div>
          <div className="item w-[56px] h-[98px]">
            <img src={BlackStar} alt="" />
            <p>4.5</p>
            <span className="text-[14px] text-neutral-400">rating</span>
          </div>
          <div className="item w-[56px] h-[98px]">
            <img src={Message} alt="" />
            <p>1,872</p>
            <span className="text-[14px] text-neutral-400">reviews</span>
          </div>
        </div>
        <div>
          <h2 className="text-Navy text-[20px] my-3 font-semibold">About me</h2>
          <p className="text-neutral-500">
            Dr. Jessica Turner, a board-certified Pulmonologist with over 8
            years of experience in diagnosing and treating a wide range of
            respiratory and <span className="text-NavyBlue">Read more</span>
          </p>
        </div>
        <div>
          <h2 className="text-Navy text-[20px] my-3 font-semibold">Location</h2>
          <div className="relative">
            <img src={Map} className="w-full rounded-[10px]" alt="" />
            <img src={Pin} className="absolute top-18 start-24" alt="" />
            <div className="flex items-center p-3 bg-white rounded-[5px] w-[268px] h-[32px] absolute bottom-2 start-2">
              <img src={Location} alt="" />
              <p className="text-[14px]">129,El-Nasr Street, Cairo, Egypt </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
