import React from "react";
import { Link } from "react-router-dom";
import done from "../assets/icons/Done.png";
const Done = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-[320px] p-6 text-center">
        {/* الأيقونة */}
        <div className="flex items-center justify-center mb-4">
          <div className="rounded-full p-4">
            <img src={done} alt="Done" className="object-contain" />
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-[20px] font-semibold mb-2">Congratulations!</h2>

        {/* النص */}
        <p className="text-gray-600 text-sm mb-6">
          Your appointment with <b>Dr. David Patel</b> <br />
          is confirmed for <b>June 30, 2023</b>, at <b>10:00 AM</b>.
        </p>

        {/* زرار Done */}
        <Link to="/">
          <button className=" cursor-pointer bg-blue-600 text-white w-full py-2 rounded-xl font-medium hover:bg-blue-700 transition">
            Done
          </button>
        </Link>

        {/* رابط تحت الزر */}
        <button className="mt-4 text-gray-500 text-sm hover:underline">
          Edit your appointment
        </button>
      </div>
    </div>
  );
};

export default Done;
