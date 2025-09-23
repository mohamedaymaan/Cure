// import React, { useState } from "react";
// import axios from "axios";
// import { OutlineOf, Outline, ArrowDown, Group } from "../assets/image/index";
// import { useNavigate } from "react-router";

// const AddNewCard = () => {
//   const navigate = useNavigate();
//   const [showCardNumber, setShowCardNumber] = useState(false);
//   const [cardholderName, setCardholderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // const token = localStorage.getItem("token"); // خذ التوكن من localStorage

//   const handleSave = async () => {
//     setError("");
//     if (!cardholderName || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/cards`,
//         {
//           card_holder_name: cardholderName,
//           card_number: cardNumber.replace(/\s+/g, ""), // إزالة أي مسافات
//           exp_month: Number(expiryMonth),
//           exp_year: Number(expiryYear),
//           cvv: cvv,
//         },
//         {
//           headers: {
//             Authorization: `Bearer 346|LTFJjwa9Mz5LuYbFqQgxXQyfTTz3Ek21PRdEfOfh45e79249`,
//           },
//         }
//       );

//       if (res.data.success) {
//         // بعد الحفظ نروح للـ Done مع بيانات الكارت الجديد
//         navigate("/profile/done", { state: { selectedCard: res.data.data } });
//       } else {
//         setError(res.data.message || "حدث خطأ");
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "حدث خطأ في الاتصال بالـ API");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 pt-6 mb-[40px]">
//       <div className="py-4 mb-4 mx-auto px-2 w-[90%] rounded-[8px]">
//         {/* Header */}
//         <div className="flex items-center gap-[40px] mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-xl text-gray-700 cursor-pointer"
//           >
//             <img src={ArrowDown} alt="Back" className="object-contain" />
//           </button>
//           <p className="flex-1 text-[20px] font-medium text-center">
//             Add New Card
//           </p>
//         </div>

//         {/* Card Preview */}
//         <div className="py-6">
//           <div className="relative w-full h-[234px] rounded-2xl overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-[30px]"></div>
//             <div className="relative h-full flex flex-col justify-between p-6 text-white">
//               <div className="flex justify-between items-start">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-6 rounded flex items-center justify-center">
//                     <img
//                       src={Group}
//                       alt="Group"
//                       className="w-[38.21px] h-[25.98px]"
//                     />
//                   </div>
//                   <span className="text-lg font-semibold">Spenny</span>
//                 </div>
//                 <div className="text-2xl font-bold">VISA</div>
//               </div>
//               <div className="md:text-[32px] text-[24px] font-bold p-[10px]">
//                 {cardNumber || "6789 4567 5432 8903"}
//               </div>
//               <div className="flex justify-between items-end">
//                 <span className="text-[20px] font-medium">
//                   {cardholderName || "Seif Mohamed"}
//                 </span>
//                 <span className="text-[20px] font-bold">
//                   {expiryMonth || "MM"}/{expiryYear || "YYYY"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Fields */}
//         <div className="space-y-3 mt-[30px]">
//           <div>
//             <label className="block text-[12px] font-medium mb-2">
//               Cardholder Name
//             </label>
//             <input
//               type="text"
//               placeholder="Cardholder Name"
//               value={cardholderName}
//               onChange={(e) => setCardholderName(e.target.value)}
//               className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
//             />
//           </div>

//           <div>
//             <label className="block text-[12px] font-medium mb-2">
//               Card Number
//             </label>
//             <div className="relative">
//               <input
//                 type={showCardNumber ? "text" : "password"}
//                 inputMode="numeric"
//                 placeholder="Card Number"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 pr-12"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowCardNumber(!showCardNumber)}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2"
//               >
//                 <img
//                   src={showCardNumber ? OutlineOf : Outline}
//                   alt="toggle"
//                   className="w-5 h-5"
//                 />
//               </button>
//             </div>
//           </div>

//           <div className="flex gap-4 relative items-center">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Expiry Date
//               </label>
//               <div className="flex items-center bg-gray-100 rounded-lg px-2 py-2 w-[120px] justify-center">
//                 <input
//                   type="text"
//                   value={expiryMonth}
//                   onChange={(e) => setExpiryMonth(e.target.value)}
//                   maxLength="2"
//                   placeholder="MM"
//                   className="w-full bg-transparent text-center outline-none text-gray-700"
//                 />
//                 <input
//                   type="text"
//                   value={expiryYear}
//                   onChange={(e) => setExpiryYear(e.target.value)}
//                   maxLength="4"
//                   placeholder="YYYY"
//                   className="w-full h-full bg-transparent text-center outline-none text-gray-700 border-l-2 border-[#6D7379]"
//                 />
//               </div>
//             </div>

//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 CVV Code
//               </label>
//               <input
//                 type="text"
//                 inputMode="numeric"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 maxLength="4"
//                 className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 focus:outline-none focus:ring-0"
//               />
//             </div>
//           </div>

//           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </div>

//         {/* Save Button */}
//         <div className="px-4 py-8">
//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
//           >
//             {loading ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewCard;

// ----------------------------

import React, { useState } from "react";
import axios from "axios";
import { OutlineOf, Outline, ArrowDown, Group } from "../assets/image/index";
import { useNavigate } from "react-router";

const AddNewCard = () => {
  const navigate = useNavigate();
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setError("");
    if (!cardholderName || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // تحويل بيانات الكارت إلى توكن وهمي للتجربة
      // const cardToken = `tok_${Math.random().toString(36).substr(2, 10)}`;
      const cardToken = "350|WAGHQhjAWLlW3C35fRQ7osi7cA5RFiLq8tXZSCkVab560e96";

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/cards`,
        {
          card_holder_name: cardholderName,
          stripe_pm_id: cardToken, // نرسل التوكن بدل رقم الكارت
          exp_month: Number(expiryMonth),
          exp_year: Number(expiryYear),
          cvv: cvv,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}}`,
          },
        }
      );

      if (res.data.success) {
        navigate("/profile/done", { state: { selectedCard: res.data.data } });
      } else {
        setError(res.data.message || "حدث خطأ");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "حدث خطأ في الاتصال بالـ API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 pt-6 mb-[40px]">
      <div className="py-4 mb-4 mx-auto px-2 w-[90%] rounded-[8px]">
        {/* Header */}
        <div className="flex items-center gap-[40px] mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-gray-700 cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" className="object-contain" />
          </button>
          <p className="flex-1 text-[20px] font-medium text-center">
            Add New Card
          </p>
        </div>

        {/* Card Preview */}
        <div className="py-6">
          <div className="relative w-full h-[234px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-[30px]"></div>
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-6 rounded flex items-center justify-center">
                    <img
                      src={Group}
                      alt="Group"
                      className="w-[38.21px] h-[25.98px]"
                    />
                  </div>
                  <span className="text-lg font-semibold">Spenny</span>
                </div>
                <div className="text-2xl font-bold">VISA</div>
              </div>
              <div className="md:text-[32px] text-[24px] font-bold p-[10px]">
                {cardNumber || "6789 4567 5432 8903"}
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[20px] font-medium">
                  {cardholderName || "Seif Mohamed"}
                </span>
                <span className="text-[20px] font-bold">
                  {expiryMonth || "MM"}/{expiryYear || "YYYY"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-3 mt-[30px]">
          <div>
            <label className="block text-[12px] font-medium mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Cardholder Name"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type={showCardNumber ? "text" : "password"}
                inputMode="numeric"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowCardNumber(!showCardNumber)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <img
                  src={showCardNumber ? OutlineOf : Outline}
                  alt="toggle"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="flex gap-4 relative items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-2 py-2 w-[120px] justify-center">
                <input
                  type="text"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  maxLength="2"
                  placeholder="MM"
                  className="w-full bg-transparent text-center outline-none text-gray-700"
                />
                <input
                  type="text"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  maxLength="4"
                  placeholder="YYYY"
                  className="w-full h-full bg-transparent text-center outline-none text-gray-700 border-l-2 border-[#6D7379]"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV Code
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="4"
                className="w-full px-4 py-4 bg-gray-100 rounded-lg border-0 text-gray-700 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Save Button */}
        <div className="px-4 py-8">
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
