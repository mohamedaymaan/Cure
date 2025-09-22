import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { baseURL } from "../Utility/baseURL";
import {
  ArrowDown,
  Visa,
  MasterCard,
  ApplePay,
  PayPal,
  Arrow,
} from "../assets/image/index";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await axios.get(`${baseURL}/cards`, {
          headers: {
            Authorization: `Bearer 350|WAGHQhjAWLlW3C35fRQ7osi7cA5RFiLq8tXZSCkVab560e96`,
          },
        });
        setCards(res.data.data || []);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    getCards();
  }, []);

  const handleCardClick = (brand) => {
    const filteredCards = cards.filter(
      (c) => c.brand.toLowerCase() === brand.toLowerCase()
    );
    navigate("/profile/visa-version", {
      state: { cards: filteredCards, brand },
    });
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
            <img src={ArrowDown} alt="Back" />
          </button>
          <p className="flex-1 text-[20px] font-medium text-center">
            Payment Management
          </p>
        </div>

        {/* Credit / Debit Card */}
        <div className="my-6">
          <p className="text-gray-700 text-sm mb-3">Credit / Debit Card</p>

          {/* VISA */}
          <div
            className="flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg mb-3 cursor-pointer"
            onClick={() => handleCardClick("visa")}
          >
            <div className="flex items-center gap-3">
              <img src={Visa} alt="Visa" className="w-10 h-6" />
              <span className="text-gray-800 font-medium">VISA</span>
            </div>
            <img src={Arrow} alt="arrow" className="w-[24px] h-[24px]" />
          </div>

          {/* MasterCard */}
          <div
            className="flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg cursor-pointer"
            onClick={() => handleCardClick("mastercard")}
          >
            <div className="flex items-center gap-3">
              <img src={MasterCard} alt="MasterCard" className="w-10 h-6" />
              <span className="text-gray-800 font-medium">MasterCard</span>
            </div>
            <img src={Arrow} alt="arrow" className="w-[24px] h-[24px]" />
          </div>
        </div>

        {/* Mobile Wallets */}
        <div>
          <p className="text-gray-700 text-sm mb-3">Mobile Wallets</p>

          {/* Apple Pay */}
          <div
            className="cursor-pointer flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg mb-3"
            onClick={() => setSelectedWallet("apple")}
          >
            <div className="flex items-center gap-3">
              <img src={ApplePay} alt="Apple Pay" className="w-10 h-6" />
              <span className="text-gray-800 font-medium">Apple Pay</span>
            </div>
          </div>

          {/* PayPal */}
          <div
            className="cursor-pointer flex items-center justify-between bg-[#F5F6F7] p-4 rounded-lg"
            onClick={() => setSelectedWallet("paypal")}
          >
            <div className="flex items-center gap-3">
              <img src={PayPal} alt="PayPal" className="w-10 h-6" />
              <span className="text-gray-800 font-medium">PayPal</span>
            </div>
          </div>
        </div>

        {/* Pay Button for Wallets */}
        {(selectedWallet === "apple" || selectedWallet === "paypal") && (
          <button
            onClick={() => navigate("/profile/done")}
            className="cursor-pointer mt-6 w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
