import React, { useEffect, useState } from "react";
import Calender from "../../assets/icons/calendar.png";
import avatarBooking from "../../assets/icons/bookingAvatar.png";
import LocationGray from "../../assets/icons/LocationGray.png";
import axios from "axios";

export default function Booking() {
  useEffect(() => {
    getBooking();
  }, []);
  let [booking, setBooking] = useState([]);
  let [status, setStatus] = useState("");
  async function getBooking() {
    let { data } = await axios
      .get(
        `${import.meta.env.VITE_API_URL}/my-bookings?filter=upcoming`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    console.log(data);

    setBooking(data?.appointments);
    setStatus(data?.filter)
  }

  return (
    <>
      <div className="w-[90%] md:w-4/5 mx-auto my-7">
        <h2 className="my-3 text-Navy font-normal text-2xl">
          Your appointments
        </h2>
        <div className="flex justify-between my-6 flex-col md:flex-row">
          <div className="w-[30%] flex space-x-5 mb-4 md:m-0">
            <button className="py-2 px-4  rounded-[10px] focus:bg-NavyBlue cursor-pointer focus:text-white text-neutral-500 text-[16px] ">
              All
            </button>
            <button className="py-2 px-4 rounded-[10px] focus:bg-NavyBlue cursor-pointer focus:text-white text-neutral-500 text-[16px] ">
              Upcoming
            </button>
            <button className="py-2 px-4 rounded-[10px] focus:bg-NavyBlue cursor-pointer focus:text-white text-neutral-500 text-[16px] ">
              Completed
            </button>
            <button className="py-2 px-4 rounded-[10px] focus:bg-NavyBlue cursor-pointer focus:text-white text-neutral-500 text-[16px] ">
              Canceled
            </button>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end relative">
            <label htmlFor="default-input">
              <img
                src={Calender}
                className="absolute top-2 ms-2 cursor-pointer"
                alt=""
              />
            </label>
            <input
              type=""
              id="default-input"
              className="bg-gray-50 border w-5/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-9 pr-3 py-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {booking.map(({date,time,created_at,doctor:{name,bio}}) => {
            return (
              <div className="w-full md:w-[30%] p-3 rounded-2xl border border-neutral-300">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={Calender} alt="" />
                    <p className="mx-2">Monday, July 21 - 11:00 Am</p>
                  </div>
                  <p className="text-NavyBlue">{status}</p>
                </div>
                <hr className="border-neutral-200 my-4" />
                <div>
                  <div className="flex">
                    <img src={avatarBooking} alt="" />
                    <div className="mx-3">
                      <p className="text-[16px] font-normal text-[#33384B]">
                        {name}
                      </p>
                      <span className="text-[14px] font-normal text-neutral-400">
                        {bio}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center my-3">
                    <img src={LocationGray} alt="" />
                    <p className="text-[14px] font-normal text-neutral-400">
                      129,El-Nasr Street, Cairo, Egypt
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="w-[45%] text-neutral-500 hover:text-white border border-nuttext-neutral-500 hover:bg-NavyBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-[45%] text-white bg-NavyBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
