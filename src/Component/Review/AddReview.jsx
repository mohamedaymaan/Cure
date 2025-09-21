import React, { useEffect } from "react";
import Pen from "../../assets/icons/pen.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddReview() {
  useEffect(() => {
    initFlowbite();
  }, []);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function addReviews({ comment, rating }) {
    let formData = new FormData();
    formData.append("rating", rating);
    formData.append("comment", comment);
    let { data } = await axios
      .post(
        `http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors/1/reviews`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_USER_TOKEN}`,
          },
        }
      )
      .catch((err) => {
        console.log(err?.response.data.message);

        toast.error(err?.response.data.message);
      });
    console.log(data);
    if (data?.success) {
      toast.success(data.message);
    }
  }

  return (
    <>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="flex items-center cursor-pointer"
      >
        <img src={Pen} alt="" />
        <span className="text-NavyBlue">add review</span>
      </button>

      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-neutral-50 rounded-lg shadow-2xl ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Add Your Review
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(addReviews)}>
              <div className="p-4 md:p-5 space-y-4">
                <textarea
                  {...register("comment", { required: "AddComment" })}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your Review..."
                ></textarea>
                {errors.comment && (
                  <p className="text-red-500 text-sm">
                    {errors.comment.message}
                  </p>
                )}
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <input
                  type="number"
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 1, message: "Minimum rating is 1" },
                    max: { value: 10, message: "Maximum rating is 10" },
                  })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your rating from 1 to 10"
                ></input>
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating.message}
                  </p>
                )}
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-NavyBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Send your review
                </button>
                <button
                  data-modal-hide="crud-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-NavyBlue focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
