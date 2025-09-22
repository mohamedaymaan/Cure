import { Link } from "react-router";
import Avatar from "../assets/icons/Avatar.png";
import Heart from "../assets/icons/blueheart.png";
import Magnifer from "../assets/icons/grayMagnifer.png";
import Menu from "../assets/icons/Menu.png";
import Ring from "../assets/icons/Ring.png";
import Close from "../assets/icons/close.png";
import favicon from "../assets/icons/favourite.png";
import { useEffect, useState } from "react";
import locateicon from "../assets/icons/locateicon.png";
import axios from "axios";
import Notification from "../Pages/Notification/Notification";

export default function Navbar() {
  const [MenuFlag, SetMenuFlag] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/me",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => setUser(data.data.data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className=" px-[8px] sm:px-[16px] w-full h-[80px] md:h-[117px] relative flex items-center justify-evenly lg:justify-between lg:px-[100px] pt-[0px] md:pt-[52px] md:pb-[24px]  z-10 bg-white">
      <Link className="size[32px] shrink-0 mr-[10px]">
        <img src={Heart} className="hidden md:block" />
      </Link>
      <Link
        to="/doctors"
        className=" hidden shrink-3  md:block md:w-1/2  mr-[10px] max-w-[568px]"
      >
        <div className=" h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
          <img src={Magnifer} className="size-[24px]" />
          <p className="font-[400] text-[#99A2AB] text-[16px]">
            Search about specialty, doctor
          </p>
        </div>
      </Link>
      <div className="flex flex-row-reverse  md:px[0px] w-full md:w-fit justify-between md:justify-start  md:flex-row md:gap-[32px]">
        <div className="flex gap-[16px] relative">
          {MenuFlag && (
            <div className=" hidden md:flex    gap-[5px] ">
              <Link to="/">
                <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                  Home
                </div>
              </Link>
              <Link to="/booking">
                <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                  Bookings
                </div>
              </Link>
            </div>
          )}
          <div
            className="cursor-pointer shrink-0"
            onClick={() => SetMenuFlag((prev) => !prev)}
          >
            {MenuFlag ? (
              <img
                src={Close}
                className=" hidden md:block size-[32px] sm:size-[40px] shrink-0"
              />
            ) : (
              <img
                src={Menu}
                className=" hidden md:block size-[32px] sm:size-[40px] shrink-0"
              />
            )}
          </div>
          <Link to="favourite" className="md:hidden">
            <div className="size-[32px] sm:size-[40px] py-[6px] px-[8px] sm:px-[13px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
              <img src={favicon} className="w-full shrink-0" />
            </div>
          </Link>
          <div>
            <Notification />
          </div>
        </div>
        <div className="flex md:block shrink-0 gap-[5px]">
          <img src={Avatar} className="size-[40px] rounded-full" />
          <div className="md:hidden">
            <p className="text-[9px] sm:text-[13px] ">
              Welcome back, {user.name}
            </p>
            <p className="flex flex-row gap-[2px] text-[10px] text-[#6D7379]">
              <img src={locateicon} className="size-[13px]" />
              129,El-Nasr Street, Cairo
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
