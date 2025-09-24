// import React from "react";
// import { ArrowDown } from "../assets/image/index.js";
// import { useNavigate } from "react-router-dom";

// const PrivacyPolicy = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto px-6 pt-6 mb-[40px] min-h-full">
//       <div className="py-4 mb-4 mx-auto px-2 w-[90%] rounded-[8px]">
//         {/* Header */}
//         <div className="flex items-center gap-[40px] mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-xl text-gray-700 cursor-pointer"
//           >
//             <img src={ArrowDown} alt="Back" />
//           </button>
//           <p className="flex-1 text-[24px] font-medium text-center">
//             Privacy Policy
//           </p>
//         </div>

//         {/* Content */}
//         <div className="px-4 py-6">
//           {/* Last Updated */}
//           <div className="mb-6">
//             <p className="text-[20px] font-medium text-black mb-2">
//               Last Updated:{" "}
//               <span className="text-gray-400 text-[14px]">19/11/2024</span>
//             </p>
//           </div>

//           {/* Welcome Text */}
//           <div className="mb-8">
//             <p className="text-gray-600 leading-relaxed font-medium text-[16px]">
//               Welcome to Cure. Your privacy is important to us. This Privacy
//               Policy explains how we collect, use, and protect your personal
//               information when you use our doctor appointment booking app.
//             </p>
//           </div>

//           {/* Terms & Conditions Section */}
//           <div className="mb-6">
//             <h2 className="text-[24px] font-normal text-black mb-4">
//               Terms & Conditions
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-4 font-medium text-[16px]">
//               By registering, accessing, or using this app, you confirm that you
//               are at least 18 years old (or have parental/guardian consent if
//               younger) and agree to be bound by these Terms and our Privacy
//               Policy.
//             </p>

//             <div className="mb-4">
//               <p className="text-gray-600 font-medium mb-2">You agree to:</p>
//               <ul className="list-disc list-inside text-[16px] text-gray-600 leading-relaxed space-y-1 ml-4">
//                 <li>Use the app only for lawful purposes.</li>
//                 <li>
//                   Provide accurate and complete information during registration
//                   and booking.
//                 </li>
//                 <li>Not impersonate others or create fake accounts.</li>
//               </ul>
//             </div>

//             <div className="mb-4">
//               <p className="text-gray-600 font-medium mb-2">You may not:</p>
//               <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4">
//                 <li>Disrupt or interfere with the app's functionality.</li>
//                 <li>Try to access data or systems not meant for you.</li>
//                 <li>Use the app to harass or abuse doctors or staff.</li>
//               </ul>
//             </div>

//             <p className="text-gray-600 leading-relaxed">
//               Your data is handled in accordance with our [Privacy Policy]. You
//               are responsible for keeping your login credentials secure.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PrivacyPolicy;
// -----------
import React, { useEffect, useState } from "react";
import { ArrowDown } from "../assets/image/index.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  useEffect(() => {
    const getPrivacyPolicy = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pages/terms-and-conditions`
        );
        setPrivacyPolicy(response.data.data);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      }
    };
    getPrivacyPolicy();
  }, []);

  return (
    <div className="container mx-auto px-6 pt-6 mb-[40px] min-h-full">
      <div className="py-4 mb-4 mx-auto px-2 w-[90%] rounded-[8px]">
        {/* Header */}
        <div className="flex items-center gap-[40px] mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-gray-700 cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" />
          </button>
          <p className="flex-1 text-[24px] font-medium text-center">
            Privacy Policy
          </p>
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          {privacyPolicy ? (
            <>
              {/* Last Updated */}
              {/* <div className="mb-6">
                <p className="text-[20px] font-medium text-black mb-2">
                  Last Updated:
                  <span className="text-gray-400 text-[14px]">
                    {privacyPolicy.content.Date || "N/A"}
                  </span>
                </p>
              </div> */}

              {/* Body */}
              <div className="mb-8">
                <h2 className="text-[24px] font-normal text-[#05162C] mb-4">
                  {privacyPolicy.title}
                </h2>
                <p className="text-[#6D7379] leading-relaxed font-medium text-[16px]">
                  {privacyPolicy.content}
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Loading Privacy Policy...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
