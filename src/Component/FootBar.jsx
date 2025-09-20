import { NavLink } from "react-router";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

export default function FootBar() {
  return (
    <div className=" md:hidden fixed bottom-0 w-full h-[63px] bg-white flex justify-evenly items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-[4px] ${
            isActive ? "text-[#145DB8]" : "text-[#99A2AB]"
          } `
        }
      >
        <HiOutlineHome className=" size-[20px]" />
        <p className="text-[13px]">Home</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-[4px] ${
            isActive ? "text-[#145DB8]" : "text-[#99A2AB]"
          } `
        }
      >
        <HiOutlineCalendar className=" size-[20px]" />
        <p className="text-[13px]">Booking</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-[4px] ${
            isActive ? "text-[#145DB8]" : "text-[#99A2AB]"
          } `
        }
      >
        <HiOutlineUser className=" size-[20px]" />
        <p className="text-[13px]">Profile</p>
      </NavLink>
    </div>
  );
}
