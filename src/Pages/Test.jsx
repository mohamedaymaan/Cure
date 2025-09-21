import React, { useEffect } from "react";
import { BASE_URL } from "../api/baseURL"; // أو المسار الصحيح حسب المشروع
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; // أو المسار الصحيح
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Test() {
  const { token } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await fetch(`${BASE_URL}/me`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message || "Request failed");
          return;
        }

        console.log("✅ User Data:", result.data);
        toast.success("API Test Successful!");
      } catch (error) {
        toast.error("❌ Error: " + error.message);
      }
    };

    if (token) testAPI(); // فقط لو فيه توكن
  }, [token]);

  return (
    <>
      <div className="p-4">Check the console for API test result.</div>
      <button
        onClick={async () => {
          const success = await logout(); 
          if (success) navigate("/login");
        }}
        className="bg-sky-400 p-2"
      >
        logout
      </button>
    </>
  );
}

export default Test;
