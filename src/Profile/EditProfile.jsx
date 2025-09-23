import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { baseURL } from "../Utility/baseURL";
import {
  ArrowDown,
  Location,
  mdi_email,
  editProfile,
  UserRounded,
} from "../assets/image/index";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();

  // 🟢 نجيب بيانات المستخدم أول ما الصفحة تفتح
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${baseURL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const user = res.data.data.user;
        setEmail(user.email || "");
        setFullName(user.name || "");
        setPhone(user.phone || "");
        setBirthdate(user.birthdate || "");
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  // 🟢 لما يدوس Edit Profile
  const handleEdit = () => {
    const token =
      localStorage.getItem("token") ||
      "344|PBxAdmehWY1c2vxKO08FlwV3TcKlK5R3VgzSQD5Y3654b758";

    axios
      .put(
        `${baseURL}/me/update`,
        {
          name: fullName,
          email,
          phone,
          birthdate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Profile updated successfully ✅");
        navigate(-1);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        alert("❌ Failed to update profile");
      });
  };

  return (
    <div className="container mx-auto px-6 pt-6 mb-[40px]">
      <div className="py-4 mb-4 mx-auto px-2 w-[90%] rounded-[8px]">
        {/* زر رجوع */}
        <button
          onClick={() => navigate(-1)}
          className="text-xl text-gray-700 mb-4 cursor-pointer"
        >
          <img src={ArrowDown} alt="Back" />
        </button>

        {/* صورة البروفايل */}
        <div className="flex flex-col items-center mb-6">
          <div>
            <img
              src={editProfile}
              alt="Profile"
              className="w-[113px] h-[113px] object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold mt-3">{fullName}</h2>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span role="img" aria-label="location">
              <img src={Location} alt="Location" />
            </span>
            {/* العنوان ثابت مؤقتًا */}
            129, El-Nasr Street, Cairo
          </p>
        </div>

        {/* الفورم */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <img src={mdi_email} className="text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          {/* FullName */}
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <img src={UserRounded} className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          {/* Phone */}
          <div className="bg-gray-100 p-3 rounded-lg">
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                border: "none",
                background: "transparent",
              }}
              buttonStyle={{
                border: "none",
                background: "transparent",
              }}
            />
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-[16px] font-normal mb-2">
              Birthdate
            </label>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* زرار Edit */}
        <button
          onClick={handleEdit}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg mt-6"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
