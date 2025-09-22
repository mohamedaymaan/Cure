import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../Utility/baseURL";
import { Link, useNavigate } from "react-router-dom";

// الأيقونات
import {
  Arrow,
  Location,
  Notification,
  Banknote,
  Favorite,
  Settings,
  FAQs,
  Lock,
  Logout,
} from "../assets/image/index";
import AvatarPlaceholder from "../assets/icons/Avatar.png";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem("notificationsEnabled");
    return saved ? JSON.parse(saved) : true;
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // جلب بيانات المستخدم
  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      "350|WAGHQhjAWLlW3C35fRQ7osi7cA5RFiLq8tXZSCkVab560e96";

    axios
      .get(`${baseURL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []);

  // حفظ حالة الـ Notification في localStorage
  useEffect(() => {
    localStorage.setItem("notificationsEnabled", JSON.stringify(enabled));
  }, [enabled]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // رجوع لصفحة اللوجين
    setShowPopup(false);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user)
    return <p className="text-center mt-10 text-red-500">No user found!</p>;

  return (
    <div className="container mx-auto mt-2">
      {/* الهيدر */}
      <div className="flex items-center justify-between py-4 mb-4 mx-auto bg-[#F5F6F7] px-4 w-[80%] rounded-[8px]">
        {/* صورة واسم وعنوان */}
        <div className="flex items-center gap-3">
          <img
            src={user?.avatar ? user.avatar : AvatarPlaceholder}
            alt="User Avatar"
            className="w-[60px] h-[60px] rounded-full object-cover"
            onError={(e) => (e.currentTarget.src = AvatarPlaceholder)}
          />
          <div className="flex flex-col">
            <h2 className="font-normal text-[20px] text-left">{user.name}</h2>
            <div className="text-gray-500 flex items-center gap-[3px] mt-[2px]">
              <img
                src={Location}
                alt="location"
                className="w-[9.33px] h-[13.51px]"
              />
              <span className="font-normal text-[12px]">{user.email}</span>
            </div>
          </div>
        </div>

        {/* زر تعديل البروفايل */}
        <Link to="/profile/edit">
          <img
            src={Arrow}
            alt="edit-profile"
            className="cursor-pointer w-[24px] h-[24px]"
          />
        </Link>
      </div>

      {/* المحتوى */}
      <div className="mt-[40px] mb-4 mx-auto w-[80%] rounded-[8px]">
        {/* Notification */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={Notification} alt="Notification" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Notification
            </span>
          </p>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
              enabled ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                enabled ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Payment Method */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={Banknote} alt="Banknote" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Payment Method
            </span>
          </p>
          <Link to="/profile/payment-method">
            <img src={Arrow} alt="Arrow-div-icon" />
          </Link>
        </div>

        {/* Favorite */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={Favorite} alt="Favorite" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Favorite
            </span>
          </p>
          <Link to="/favorite">
            <img src={Arrow} alt="Arrow-div-icon" />
          </Link>
        </div>

        {/* Settings */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={Settings} alt="Settings" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Settings
            </span>
          </p>
          <Link to="/profile/settings">
            <img src={Arrow} alt="Arrow-div-icon" />
          </Link>
        </div>

        {/* FAQs */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={FAQs} alt="FAQs" />
            <span className="text-[16px] font-normal text-[#05162C]">FAQs</span>
          </p>
          <Link to="/profile/faqs">
            <img src={Arrow} alt="Arrow-div-icon" />
          </Link>
        </div>

        {/* Privacy Policy */}
        <div className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5">
          <p className="flex items-center gap-3">
            <img src={Lock} alt="Privacy" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Privacy Policy
            </span>
          </p>
          <Link to="/profile/privacy-policy">
            <img src={Arrow} alt="Arrow-div-icon" />
          </Link>
        </div>

        {/* Logout */}
        <div
          className="bg-[#F5F6F7] flex justify-between items-center py-3 px-4 rounded-[8px] my-5 cursor-pointer"
          onClick={() => setShowPopup(true)}
        >
          <p className="flex items-center gap-3">
            <img src={Logout} alt="Logout" />
            <span className="text-[16px] font-normal text-[#05162C]">
              Log out
            </span>
          </p>
        </div>

        {/* البوباب */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-sm text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#05162C]">
                Are you sure you want to log out?
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
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
