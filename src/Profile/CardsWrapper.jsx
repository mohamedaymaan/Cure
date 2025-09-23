// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import EmptyCards from "./EmptyCards";
// // import VisaVersion from "./VisaVersion";

// // const CardsWrapper = () => {
// //   const [cards, setCards] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const getCards = async () => {
// //       try {
// //         const res = await axios.get(`${import.meta.env.VITE_API_URL}/cards`, {
// //           headers: {
// //             Authorization: `Bearer 246|8O2hrHuj3g3yUYYanT7US1ucN10XpBOTg7mdas6bdbb1d943`, // لازم تبعت التوكن
// //           },
// //         });
// //         setCards(res.data.data || []);
// //         console.log(cards);
// //       } catch (error) {
// //         console.error(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     getCards();
// //   }, []);

// //   if (loading) {
// //     return <p className="text-center mt-10">Loading...</p>;
// //   }

// //   return cards.length > 0 ? <VisaVersion cards={cards} /> : <EmptyCards />;
// // };

// // export default CardsWrapper;
// // ---------------   2       ------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EmptyCards from "./EmptyCards";
// import VisaVersion from "./VisaVersion";

// const CardsWrapper = () => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getCards = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/cards`, {
//           headers: {
//             Authorization: `Bearer 346|LTFJjwa9Mz5LuYbFqQgxXQyfTTz3Ek21PRdEfOfh45e79249`,
//           },
//         });
//         setCards(res.data.data || []);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCards();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;

//   return cards.length > 0 ? <VisaVersion cards={cards} /> : <EmptyCards />;
// };

// export default CardsWrapper;
