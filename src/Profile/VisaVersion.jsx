// import { Link, useNavigate } from "react-router";
// import { ArrowDown, plus, Visa } from "../assets/image/index";
// import { useState } from "react";

// const VisaVersion = () => {
//   const navigate = useNavigate();
//   const [selectedWallet, setSelectedWallet] = useState("");

//   return (
//     <div className="container mx-auto px-6 pt-2 flex flex-col justify-between h-screen">
//       {/* المحتوى الأساسي */}
//       <div className="py-2 mx-auto px-2 w-[90%] rounded-[8px] flex-1">
//         {/* Header */}
//         <div className="flex items-center gap-[40px] mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-xl text-gray-700 cursor-pointer"
//           >
//             <img src={ArrowDown} alt="Back" />
//           </button>
//           <p className="flex-1 text-[20px] font-medium text-center">
//             Visa Version
//           </p>
//         </div>

//         {/* Card Item */}
//         <div
//           className="mt-6 flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg cursor-pointer"
//           onClick={() => setSelectedWallet("apple")}
//         >
//           <div className="flex items-center gap-3">
//             <img src={Visa} alt="Visa Card" className="w-10 h-6" />
//             <span className="text-gray-800 font-medium">
//               Axis Bank 450***49
//             </span>
//           </div>
//           <input
//             type="radio"
//             name="wallet"
//             checked={selectedWallet === "apple"}
//             readOnly
//             className="w-[24px] h-[24px]"
//           />
//         </div>
//       </div>

//       {/* Button Bottom */}
//       <div className="md:px-[50px] px-0 mx-auto w-[90%] mb-4">
//         <Link to="/profile/add-new-card">
//           <button className="px-4 cursor-pointer w-full bg-blue-600 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-3">
//             <img src={plus} alt="plus" /> Add Card
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default VisaVersion;
// ------2-----------

import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { ArrowDown, plus, Visa, MasterCard } from "../assets/image/index";

const VisaVersion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cards = [], brand } = location.state || {};

  const [selectedCardId, setSelectedCardId] = useState(null);

  const getCardBrandLogo = (b) => {
    switch (b?.toLowerCase()) {
      case "visa":
        return Visa;
      case "mastercard":
        return MasterCard;
      default:
        return Visa;
    }
  };

  const handlePay = () => {
    const selectedCard = cards.find((c) => c.id === selectedCardId);
    if (!selectedCard) return;
    navigate("/profile/done", { state: { selectedCard } });
  };

  return (
    <div className="container mx-auto px-6 pt-2 flex flex-col justify-between h-screen">
      <div className="py-2 mx-auto px-2 w-[90%] rounded-[8px] flex-1">
        {/* Header */}
        <div className="flex items-center gap-[40px] mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-gray-700 cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" />
          </button>
          <p className="flex-1 text-[20px] font-medium text-center">
            {brand} Cards
          </p>
        </div>

        {/* Cards List */}
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className={`mt-4 flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg cursor-pointer hover:bg-gray-200 ${
                selectedCardId === card.id ? "border-2 border-blue-600" : ""
              }`}
              onClick={() => setSelectedCardId(card.id)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={getCardBrandLogo(card.brand)}
                  alt={card.brand}
                  className="w-10 h-6"
                />
                <span className="text-gray-800 font-medium">
                  {card.card_holder_name} ****{card.last_four}
                </span>
              </div>
              <input
                type="radio"
                name="selectedCard"
                checked={selectedCardId === card.id}
                readOnly
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No {brand} cards available
          </p>
        )}
      </div>

      {/* Pay Button */}
      {selectedCardId && (
        <div className="md:px-[50px] px-0 mx-auto w-[90%] mb-4">
          <button
            onClick={handlePay}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Pay
          </button>
        </div>
      )}

      {/* Add Card Button */}
      <div className="md:px-[50px] px-0 mx-auto w-[90%] mb-4">
        <Link to="/profile/add-new-card">
          <button className="px-4 cursor-pointer w-full bg-gray-600 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-3">
            <img src={plus} alt="plus" /> Add Card
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisaVersion;
