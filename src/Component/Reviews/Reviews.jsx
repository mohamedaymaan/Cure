import React from "react";
import Avatar from "../../assets/icons/AvatarWomen.png";
import Star from "../../assets/icons/starYellow.png";

export default function Reviews() {
  return (
    <>
      <div className="flex gap-3.5">
        <div className="py-[12px] px-[14px] border border-neutral-400 rounded-2xl w-[49%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Avatar} alt="" />
              <div className="mx-4">
                <p>Nabila Reyna</p>
                <span>30 min ago</span>
              </div>
            </div>

            <div className="flex gap-x-1.5 bg-amber-100 p-1.5 rounded-[10px]">
              <img src={Star} alt="" />
              <span className="text-amber-300">4.5</span>
            </div>
          </div>
          <p className="my-3 text-neutral-600" >
            Excellent service! Dr. Jessica Turner was attentive and thorough.
            The clinic was clean, and the staff were friendly. Highly recommend
            for in-person care!
          </p>
        </div>
        <div className="py-[12px] px-[14px] border border-neutral-400 rounded-2xl w-[49%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Avatar} alt="" />
              <div className="mx-4">
                <p>Ferry Ichsan A</p>
                <span>A week ago</span>
              </div>
            </div>

            <div className="flex gap-x-1.5 bg-amber-100 p-1.5 rounded-[10px]">
              <img src={Star} alt="" />
              <span className="text-amber-300">4.5</span>
            </div>
          </div>
          <p className="my-3 text-neutral-600" >
           Quick and easy appointment! Dr. Jessica Turner was professional, and the staff made me feel comfortable. Highly recommend!"
          </p>
        </div>
      </div>
    </>
  );
}
