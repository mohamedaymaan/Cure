import React from "react";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import Calendar from "../../assets/icons/calendar.png";
import CalendarBlue from "../../assets/icons/calendarblue.png";
import Location from "../../assets/icons/Location.png";
import Medal from "../../assets/icons/medal.png";
import Message from "../../assets/icons/messages.png";
import Pen from "../../assets/icons/pen.png";
import ProfilePic from "../../assets/icons/ProfilePic.png";
import Star from "../../assets/icons/star.png";
import User from "../../assets/icons/user.png";
import { Link } from "react-router";
import CalenderComponent from "../../Component/Calender/Calender";

export default function Appointment() {
  return (
    <>
      <div>
        <div>Appointment</div>
        <div className="flex items-center my-2">
          <Link to="#">
            <img src={ArrowLeft} alt="icon" />
          </Link>
          <p className="text-Navy mx-2.5 font-normal text-[20px]">
            Make an appointment
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <CalenderComponent />
            <div>
                <p></p>
                <div>
                    <img src="" alt="" />
                    <span></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
