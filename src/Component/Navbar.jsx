import { Link, useNavigate } from "react-router";
import Avatar from "../assets/icons/Avatar.png";
import Heart from "../assets/icons/blueheart.png";
import Magnifer from "../assets/icons/grayMagnifer.png";
import Menu from "../assets/icons/Menu.png";
import Ring from "../assets/icons/Ring.png";
import Close from "../assets/icons/close.png";
import favicon from "../assets/icons/favourite.png";
import { useContext, useEffect, useState } from "react";
import locateicon from "../assets/icons/locateicon.png";
import axios from "axios";
import Notification from "../Pages/Notification/Notification";
import {
  Vector,
  Banknote,
  Settings,
  Lock,
  Logout,
  Arrow,
  Location,
} from "../assets/image/index.js";
import AuthContext from "../Context/AuthContext";

export default function Navbar() {
  const [MenuFlag, SetMenuFlag] = useState(false);
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => setUser(data.data.data.user))
      .catch((err) => console.log(err));
  }, []);
  const [openProfile, setOpenProfile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // بيانات المستخدم
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    window.location.reload();
    setShowPopup(false);
  };

  useEffect(() => {
    if (openProfile) {
      const fetchUser = async () => {
        setLoading(true);
        try {
          // Hardcoded token

          const res = await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <>
      <nav className=" px-[8px] sm:px-[16px] w-full h-[80px] md:h-[117px] relative flex items-center justify-evenly lg:justify-between lg:px-[100px] pt-[0px] md:pt-[52px] md:pb-[24px]  z-10 bg-white">
        <Link className="size[32px] shrink-0 mr-[10px]">
          <img src={Heart} className="hidden md:block" />
        </Link>
        <Link
          to="/doctors"
          className=" hidden shrink-3  md:block md:w-1/2  mr-[10px] max-w-[568px]"
        >
          <div className=" h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
            <img src={Magnifer} className="size-[24px]" />
            <p className="font-[400] text-[#99A2AB] text-[16px]">
              Search about specialty, doctor
            </p>
          </div>
        </Link>
        <div className="flex flex-row-reverse  md:px[0px] w-full md:w-fit justify-between md:justify-start  md:flex-row md:gap-[32px]">
          <div className="flex gap-[16px] relative">
            {MenuFlag && (
              <div className=" hidden md:flex    gap-[5px] ">
                <Link to="/">
                  <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                    Home
                  </div>
                </Link>
                <Link to="/booking">
                  <div className=" h-[40px] py-[6px] px-[16px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                    Bookings
                  </div>
                </Link>
              </div>
            )}
            <div
              className="cursor-pointer shrink-0"
              onClick={() => SetMenuFlag((prev) => !prev)}
            >
              {MenuFlag ? (
                <img
                  src={Close}
                  className=" hidden md:block size-[32px] sm:size-[40px] shrink-0"
                />
              ) : (
                <img
                  src={Menu}
                  className=" hidden md:block size-[32px] sm:size-[40px] shrink-0"
                />
              )}
            </div>
            <Link to="favourite" className="md:hidden">
              <div className="size-[32px] sm:size-[40px] py-[6px] px-[8px] sm:px-[13px] bg-[#F5F6F7] flex justify-center items-center rounded-[10px]">
                <img src={favicon} className="w-full shrink-0" />
              </div>
            </Link>
            <div>
              <Notification />
            </div>
          </div>
          <div className="flex md:hidden shrink-0 gap-[5px]">
          <img src={Avatar} className="size-[40px] rounded-full" />
          <div className="md:hidden">
            <p className="text-[9px] sm:text-[13px] ">
              Welcome back, {user.name}
            </p>
            <p className="flex flex-row gap-[2px] text-[10px] text-[#6D7379]">
              <img src={locateicon} className="size-[13px]" />
              129,El-Nasr Street, Cairo
            </p>
          </div>
        </div>
          <div className="shrink-0 gap-[5px] md:flex hidden">
            <button onClick={() => setOpenProfile(!openProfile)}>
              <img
                src={user?.avatar || Avatar}
                alt="profile"
                className="cursor-pointer w-[40px] h-[40px] rounded-full object-cover"
                onError={(e) => (e.currentTarget.src = Avatar)}
              />
            </button>
          </div>
        </div>
        {openProfile && (
          <div className="absolute top-20 right-7 w-[358px] bg-white rounded-2xl shadow-lg p-5 z-50">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-4 max-w-[326px] mx-auto">
              <div className="flex items-center gap-3">
                {/* <img
                src={user?.avatar || Avatar}
                alt="User Avatar"
                className="w-[60px] h-[60px] rounded-full object-cover"
              /> */}

                <img
                  src={user?.avatar ? user.avatar : Avatar}
                  alt="User Avatar"
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = Avatar; // fallback لو اللينك بايظ
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
              <Link to="profile">
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
                  to="payment-method"
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
                  to="settings"
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
                  to="/privacyPolicy"
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
    </>
  );
}
