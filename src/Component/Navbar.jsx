import { Link } from "react-router";
import Avatar from "../assets/icons/Avatar.png";
import Heart from "../assets/icons/blueheart.png";
import Magnifer from "../assets/icons/grayMagnifer.png";
import Menu from "../assets/icons/Menu.png";
import Ring from "../assets/icons/Ring.png";
import Close from "../assets/icons/close.png";
import { useState } from "react";

export default function Navbar() {
  const [MenuFlag, SetMenuFlag] = useState(false);

  return (
    <nav className="w-full h-[117px] relative flex items-center justify-evenly lg:justify-between  pt-[52px] pb-[24px]  z-10 bg-white">
      <Link>
        <img src={Heart} alt="" />
      </Link>
      <Link>
        <div className="lg:w-[568px] sm:w-[300px] h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
          <img src={Magnifer} className="size-[24px]" />
          <p className="font-[400] text-[#99A2AB] text-[16px]">
            Search about specialty, doctor
          </p>
        </div>
      </Link>
      <div className="flex gap-[32px]">
        <div className="flex gap-[16px]">
          {MenuFlag && (
            <>
              <Link to="/">
                <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                  Home
                </div>
              </Link>
              <Link to="doctors">
                <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                  Bookings
                </div>
              </Link>
            </>
          )}
          <div
            className="cursor-pointer"
            onClick={() => SetMenuFlag((prev) => !prev)}
          >
            {MenuFlag ? (
              <img src={Close} className="size-[40px] shrink-0" />
            ) : (
              <img src={Menu} className="size-[40px] shrink-0" />
            )}
          </div>
          <Link>
            <img src={Ring} className="size-[40px] shrink-0" />
          </Link>
        </div>
        <img src={Avatar} className="size-[40px] rounded-full" />
      </div>
    </nav>
  );
}
