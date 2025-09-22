import React, { useState } from "react";
import { ArrowDown, Outline } from "../assets/image/index";
import { useNavigate } from "react-router";

const PasswordManagement = () => {
  const navigate = useNavigate();

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="container mx-auto px-6 pt-6 mb-[40px]">
      <div className="py-4 mx-auto px-2 w-[90%] rounded-[8px]">
        {/* Header */}
        <div className="flex items-center gap-[40px] mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-gray-700 cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" />
          </button>
          <p className="flex-1 text-[20px] font-medium text-center">
            Password Management
          </p>
        </div>

        {/* content */}
        <div className="space-y-7  mt-[50px]">
          {/* Current password */}
          <div>
            <label
              htmlFor="current"
              className="block text-sm text-gray-600 mb-2"
            >
              Current password
            </label>
            <div className="flex items-center bg-[#F5F6F7] rounded-lg px-4 py-3">
              <input
                id="current"
                type={showCurrent ? "text" : "password"}
                placeholder="********"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <img
                src={Outline}
                alt="toggle"
                className="cursor-pointer w-5 h-5 ml-2"
                onClick={() => setShowCurrent(!showCurrent)}
              />
            </div>
          </div>

          {/* New password */}
          <div>
            <label htmlFor="new" className="block text-sm text-gray-600 mb-2">
              New password
            </label>
            <div className="flex items-center bg-[#F5F6F7] rounded-lg px-4 py-3">
              <input
                id="new"
                type={showNew ? "text" : "password"}
                placeholder="********"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <img
                src={Outline}
                alt="toggle"
                className="cursor-pointer w-5 h-5 ml-2"
                onClick={() => setShowNew(!showNew)}
              />
            </div>
          </div>

          {/* Confirm password */}
          <div>
            <label
              htmlFor="confirm"
              className="block text-sm text-gray-600 mb-2"
            >
              Confirm new password
            </label>
            <div className="flex items-center bg-[#F5F6F7] rounded-lg px-4 py-3">
              <input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="********"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <img
                src={Outline}
                alt="toggle"
                className="cursor-pointer w-5 h-5 ml-2"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>
          </div>

          {/* Bottom Change */}
          <button className="cursor-pointer w-full bg-blue-600 text-white font-medium py-3 rounded-lg mt-6">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordManagement;
