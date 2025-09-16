import React from "react";
import ArrowUp from "../../assets/icons/ArrowUp.png";
import ArrowDown from "../../assets/icons/ArrowDown.png";
import Calendar from "../../assets/icons/calendar.png";
import CalendarBlue from "../../assets/icons/calendarBlue.png";

export default function CalenderComponent() {
  return (
    <>
      <div>Calender</div>
      <div className="p-5 border border-neutral-500 rounded-2xl">
        <div className="flex  justify-between items-center">
          <p>Choose date and time</p>
          <div className="flex items-center">
            <img src={Calendar} alt="" />
            <p className="mx-2.5">November, 2024</p>
            <div>
              <img src={ArrowUp} className="mb-2" alt="" />
              <img src={ArrowDown} alt="" />
            </div>
          </div>
        </div>
        <hr className="my-4 text-neutral-500" />
        <div className="flex justify-between">
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
          <div tabIndex="0" className="cursor-pointer py-2 bg-neutral-200 w-[50px] h-[60px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white">
            <p>Fri</p>
            <p>12</p>
          </div>
        </div>
        <div className="flex my-8 gap-4 flex-wrap ">
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer">
            <p>9:00 AM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer  ">
            <p>10:00 AM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>11:00 AM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>12:30 AM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>5:30 PM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>7:00 AM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>9:00 PM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>9:00 PM</p>
          </div>
          <div tabIndex="0" className="py-2 bg-neutral-200 w-[105px] h-[40px] rounded-[8px] text-neutral-600 flex flex-col justify-center items-center focus:bg-NavyBlue focus:text-white cursor-pointer ">
            <p>10:00 PM</p>
          </div>
        </div>
        <div className="flex justify-between"> 
            <div className="flex items-center">
                <img src={CalendarBlue} alt="" />
                <p className="mx-1.5 text-Navy text-[14px] font-medium">Monday,November 15 -11:00AM</p>
            </div>
            <button className="px-10 py-2 border border-NavyBlue rounded-[8px] text-NavyBlue">Book</button>
        </div>
      </div>
    </>
  );
}
