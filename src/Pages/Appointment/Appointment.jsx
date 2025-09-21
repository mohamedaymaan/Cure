import React from "react";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import Calendar from "../../assets/icons/calendar.png";
import CalendarBlue from "../../assets/icons/calendarblue.png";
import Location from "../../assets/icons/Location.png";
import Medal from "../../assets/icons/medal.png";
import Message from "../../assets/icons/messages.png";
import Star from "../../assets/icons/starYellow.png";


import { Link } from "react-router";
import CalenderComponent from "../../Component/Calender/Calender";
import Reviews from "../../Component/Reviews/Reviews";
import Profile from "../../Component/Profile/Profile";
import Footer from "../../Component/Footer";
import AddReview from "../../Component/Review/AddReview";

export default function Appointment() {
    



  return (
    <>
      <div className="w-4/5 mx-auto my-3">
        <div className="flex items-center my-2">
          <Link to="/">
            <img src={ArrowLeft} alt="icon" />
          </Link>
          <p className="text-Navy mx-2.5 font-normal text-[20px]">
            Make an appointment
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7">
            <CalenderComponent />
            <div className="my-10 flex justify-between items-center">
              <p>Reviews and Rating</p>
              {/* <button className="flex items-center cursor-pointer">
                <img src={Pen} alt="" />
                <span className="text-NavyBlue">add review</span>
              </button> */}
              <AddReview/>
            </div>
            <div className="flex items-center justify-between my-5">
              <p className="text-[40px] font-normal text-Navy">4.5/5</p>
              <div>
                 <div className="flex mb-2">
                {Array.from({ length: 5 }).map((img,i) => {
                  return <img src={Star} alt="" key={i}/>;
                })}
              </div>
              <p>1250+ Reviews</p>
              </div>
             
            </div>
            <Reviews/>
          </div>
          <div className="col-span-5">
              <Profile/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
