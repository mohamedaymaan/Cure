import { Link, useNavigate } from "react-router";
import AvatarPlaceholder from "../assets/icons/Avatar.png";
import Heart from "../assets/icons/BsHeartPulse.png";
import Magnifer from "../assets/icons/Magnifer.png";
import Menu from "../assets/icons/Menu.png";
import Ring from "../assets/icons/Ring.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../Utility/baseURL";
import {
  Vector,
  Banknote,
  Settings,
  Lock,
  Logout,
  Arrow,
  Location,
} from "../assets/image/index";

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // بيانات المستخدم
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    navigate("/");
    setShowPopup(false);
  };

  useEffect(() => {
    if (openProfile) {
      const fetchUser = async () => {
        setLoading(true);
        try {
          // Hardcoded token
          const token = "350|WAGHQhjAWLlW3C35fRQ7osi7cA5RFiLq8tXZSCkVab560e96";

          const res = await axios.get(`${baseURL}/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // API بيرجع user جوا data.data
          setUser(res.data.data.user);
        } catch (err) {
          console.error("Error fetching user:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [openProfile]);

  return (
    <nav className="flex justify-between items-center ">
      {/* Logo */}
      <Link to="/" className="block">
        <img src={Heart} alt="logo" />
      </Link>

      {/* Search */}
      <div className="block relative">
        <img src={Magnifer} className="absolute top-2 start-2" alt="search" />
        <input
          type="text"
          className="py-2 px-10 rounded-[10px] bg-[#F5F6F7] w-2xl"
          placeholder="Search about specialty, doctor "
        />
      </div>

      {/* Icons */}
      <div className="block">
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link to="">
              <img src={Menu} alt="menu" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Ring} alt="notifications" />
            </Link>
          </li>
          <li>
            <button onClick={() => setOpenProfile(!openProfile)}>
              <img
                src={user?.avatar || AvatarPlaceholder}
                alt="profile"
                className="cursor-pointer w-[40px] h-[40px] rounded-full object-cover"
                onError={(e) => (e.currentTarget.src = AvatarPlaceholder)}
              />
            </button>
          </li>
        </ul>
      </div>

      {/* Profile Popup */}
      {openProfile && (
        <div className="absolute top-20 right-7 w-[358px] bg-white rounded-2xl shadow-lg p-5 z-50 ">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4 mb-4 max-w-[326px] mx-auto">
            <div className="flex items-center gap-3">
              {/* <img
                src={user?.avatar || AvatarPlaceholder}
                alt="User Avatar"
                className="w-[60px] h-[60px] rounded-full object-cover"
              /> */}

              <img
                src={user?.avatar ? user.avatar : AvatarPlaceholder}
                alt="User Avatar"
                className="w-[60px] h-[60px] rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = AvatarPlaceholder; // fallback لو اللينك بايظ
                }}
              />

              <div className="flex flex-col">
                <h2 className="font-normal text-[20px] text-left">
                  {loading ? "Loading..." : user?.name || "Guest"}
                </h2>
                <div className="text-gray-500 flex items-center gap-[3px] mt-[2px]">
                  <img
                    src={Location}
                    alt="location"
                    className="w-[9.33px] h-[13.51px]"
                  />
                  <span className="font-normal text-[12px]">
                    {loading ? "Loading..." : user?.email || "No email"}
                  </span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <Link to="/profile">
              <img
                src={Vector}
                alt="settings"
                className="cursor-pointer w-[24px] h-[24px]"
              />
            </Link>
          </div>

          {/* Menu */}
          <ul className="space-y-3 text-[#05162C]">
            <li>
              <Link
                to="/profile/payment-method"
                className="flex items-center justify-between cursor-pointer hover:text-primary-600"
              >
                <span className="flex items-center gap-2">
                  <img src={Banknote} alt="Banknote" />
                  <span className="font-normal text-[14px]">
                    Payment Method
                  </span>
                </span>
                <img src={Arrow} alt="Arrow" />
              </Link>
            </li>

            <li>
              <Link
                to="/profile/settings"
                className="flex items-center justify-between cursor-pointer hover:text-primary-600"
              >
                <span className="flex items-center gap-2">
                  <img src={Settings} alt="Settings" />
                  <span className="font-normal text-[14px]">Settings</span>
                </span>
                <img src={Arrow} alt="Arrow" />
              </Link>
            </li>

            <li>
              <Link
                to="/profile/privacy-policy"
                className="flex items-center justify-between cursor-pointer hover:text-primary-600"
              >
                <span className="flex items-center gap-2">
                  <img src={Lock} alt="Lock" />
                  <span className="font-normal text-[14px]">
                    Privacy Policy
                  </span>
                </span>
                <img src={Arrow} alt="Arrow" />
              </Link>
            </li>
          </ul>

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

          {/* Popup */}
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
      )}
    </nav>
  );
}
