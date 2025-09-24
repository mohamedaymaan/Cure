import React, { useState } from "react";
import {
  Arrow,
  ArrowDown,
  KeySquare,
  UserRounded,
} from "../assets/image/index.js";
import { Link, useNavigate } from "react-router";

const Settings = () => {
  // هنا تحط منطق تسجيل الخروج
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");

    setShowPopup(false);
  };

  return (
    <div className="container mx-auto px-6 pt-6 mb-[40px]">
      <div className="py-4 mb-4  mx-auto   px-2 w-[90%] rounded-[8px]">
        {/* Header */}
        <div className="flex items-center gap-[40px]">
          {/* زر رجوع */}
          <button
            onClick={() => navigate(-1)} // -1 معناها ارجع خطوة واحدة
            className="text-xl text-gray-700  cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" />
          </button>
          <p className="flex justify-center items-center md:ml-[300px] text-[24px] font-normal text-center">
            Settings
          </p>
        </div>

        {/* content */}
        <div className="my-[30px]">
          <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
            <p className="flex items-center gap-3">
              <img src={KeySquare} alt="Banknote" />
              <span className="text-[16px] font-normal text-[#05162C]">
                Password Management
              </span>
            </p>{" "}
            <Link to="/password-management">
              <img src={Arrow} alt="Arrow-div-icon" />
            </Link>
          </div>

          {/* العنصر العادي */}
          <div
            className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5 cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <p className="flex items-center gap-3">
              <img src={UserRounded} alt="Logout" />
              <span className="text-[16px] font-normal text-[#05162C]">
                Delete account
              </span>
            </p>
          </div>

          {/* البوباب */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-sm text-center">
                <h2 className="text-lg font-semibold mb-4 text-[#05162C]">
                  Are you sure you want to delete your account?
                </h2>
                <div className="flex justify-between gap-4">
                  <button
                    className="cursor-pointer flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="cursor-pointer flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                    onClick={handleLogout}
                  >
                    Yes, delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
