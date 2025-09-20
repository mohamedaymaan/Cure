import React, { useEffect, useState } from "react";
import Waiting from "../../assets/icons/waiting.png";
import Remove from "../../assets/icons/calendar-remove.png";
import CheckSuccess from "../../assets/icons/CheckSuccess.png";
import RingIcon from "../../assets/icons/Ring.png";
import Ring from "../../assets/images/Ring.png";

export default function Notification() {
  const [notify, isNotify] = useState(true);
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 cursor-pointer"
        src={RingIcon}
        alt="User dropdown"
      />
      {/* DropDown Menu */}
      <div
        id="userDropdown"
        className="z-10 hidden bg-neutral-200 divide-y divide-gray-100 rounded-lg shadow-sm p-4 w-[70%] md:w-[30%]"
      >
        {notify ? (
          <div className="space-y-5">
            <p className="text-NavyBlue text-[16px] my-2">Today</p>

            <div className="flex items-center space-x-5 bg-white p-3 rounded-2xl">
              <img src={Waiting} alt="" />
              <div>
                <h3>Upcoming Appointment</h3>
                <p>Reminder: You have an appointment with...</p>
              </div>
            </div>
            <div className="flex items-center space-x-5 bg-white p-3 rounded-2xl">
              <img src={CheckSuccess} alt="" />
              <div>
                <h3>Appointment completed</h3>
                <p>
                  You have successfully booked your appointment with Dr. Emily
                  Walker.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-5 bg-white p-3 rounded-2xl">
              <img src={Remove} alt="" />
              <div>
                <h3>Appointment Cancelled</h3>
                <p>
                  You have successfully cancelled your appointment with Dr.
                  David Patel.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3 text-center">
            <img src={Ring} alt="" />
            <h2 className="text-2xl font-normal">Nothing to display here!</h2>
            <p className="text-[16px] font-normal text-neutral-500">
              We’ll notify you once we have new notifications.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
