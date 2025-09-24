import React, { useEffect, useState } from "react";
import Avatar from "../../assets/icons/AvatarWomen.png";
import Star from "../../assets/icons/starYellow.png";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Reviews() {
  let [rev, setRev] = useState([]);
  useEffect(() => {
    getReviews();
  }, []);
  dayjs.extend(relativeTime);
  async function getReviews() {
    let { data } = await axios
      .get(
        `${import.meta.env.VITE_API_URL}/doctors/1/reviews`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    if (data?.message === "Success") {
      setRev(data.data.data);
    }
  }
  return (
    <>
      <div className="flex gap-3.5 flex-wrap">
        {rev.map((review,i) => {
          return (
            <div key={i} className="py-[12px] px-[14px] border border-neutral-400 rounded-2xl w-full md:w-[48%]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={Avatar} alt="" />
                  <div className="mx-4">
                    <p>{review.user.name}</p>
                    <span>{dayjs(review.created_at).fromNow()}</span>
                  </div>
                </div>

                <div className="flex gap-x-1.5 bg-amber-100 p-1.5 rounded-[10px]">
                  <img src={Star} alt="" />
                  <span className="text-amber-300">{review.rating}</span>
                </div>
              </div>
              <p className="mx-3 my-3 text-neutral-600 bg-neutral-300 rounded-[8px] p-1">
               {review.comment}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
