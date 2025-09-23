// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { ArrowDown } from "../assets/image/index"; // أيقونة الرجوع

// const faqsData = [
//   {
//     question: "What is this app used for?",
//     answer:
//       "This app allows you to search for doctors, book appointments, and consult in person easily from your phone.",
//   },
//   {
//     question: "Is the app free to use?",
//     answer:
//       "Yes, the app is free to download and use. Some services may have fees.",
//   },
//   {
//     question: "How can I find a doctor?",
//     answer:
//       "You can search by specialty, location, or name in the search section.",
//   },
//   {
//     question: "Can I cancel my appointment?",
//     answer:
//       "Yes, you can cancel appointments easily from the 'My Appointments' section.",
//   },
//   {
//     question: "What payment are supported?",
//     answer: "We support credit/debit cards, Apple Pay, and PayPal.",
//   },
//   {
//     question: "How do I edit my profile?",
//     answer: "Go to Profile > Edit Profile to update your information.",
//   },
// ];

// const FAQs = () => {
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = useState(0); // أول سؤال مفتوح

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto px-6 pt-6 mb-[40px]">
//       <div className="py-4 mb-4  mx-auto   px-2 w-[90%] rounded-[8px]">
//         {/* Header */}
//         <div className="flex items-center gap-[40px] mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-xl text-gray-700 cursor-pointer"
//           >
//             <img src={ArrowDown} alt="Back" />
//           </button>
//           <p className="flex-1 text-[20px] font-medium text-center">FAQs</p>
//         </div>

//         {/* FAQs List */}
//         <div className="space-y-3 my-[50px]">
//           {faqsData.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-[#F5F6F7] rounded-lg p-4 cursor-pointer"
//               onClick={() => toggleFAQ(index)}
//             >
//               {/* السؤال */}
//               <div className="flex justify-between items-center">
//                 <p className="font-medium text-[24px] text-[#000000]">
//                   {faq.question}
//                 </p>
//                 <span className="text-[24px] text-[#000000]">
//                   {openIndex === index ? "−" : "+"}
//                 </span>
//               </div>

//               {/* الإجابة */}
//               {openIndex === index && (
//                 <div className="mt-2 border-t border-gray-300 pt-2 text-[16px] text-[#99A2AB]">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;

// ------------ With Api  --------
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowDown } from "../assets/image/index";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // أيقونات من react-icons
import axios from "axios";

const FAQs = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/faqs`);
        // console.log("API Response:", res.data.data); // هنا هتشوف شكل البيانات
        setFaqs(res.data.data);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      } finally {
        setLoading(false);
      }
    };
    // console.log(faqs);

    getFaqs();
  }, []);

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
          <p className="flex-1 text-[20px] font-medium text-center">FAQs</p>
        </div>

        {/* Loading state */}
        {loading && (
          <p className="text-center text-gray-500">Loading FAQs...</p>
        )}

        {/* FAQs List */}
        <div className="space-y-3 my-[50px]">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-[#F5F6F7] rounded-lg p-4 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              {/* السؤال */}
              <div className="flex justify-between items-center">
                <p className="font-medium text-[20px] text-[#000000]">
                  {faq.question}
                </p>
                <span className="text-[#000000]">
                  {openIndex === index ? (
                    <AiOutlineMinus size={24} />
                  ) : (
                    <AiOutlinePlus size={24} />
                  )}
                </span>
              </div>

              {/* الإجابة */}
              {openIndex === index && (
                <div className="mt-2 border-t border-gray-300 pt-2 text-[16px] text-[#99A2AB]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
