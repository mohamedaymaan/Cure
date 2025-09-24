import React, { useEffect, useState } from "react";
import Pen from "../../assets/icons/Pen.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { initFlowbite } from "flowbite";

export default function AddReview() {
  useEffect(() => {
    initFlowbite();
  }, []);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

  async function addReviews({ comment, rating }) {
    let formData = new FormData();
    formData.append("rating", rating);
    formData.append("comment", comment);
    let { data } = await axios
      .post(`${import.meta.env.VITE_API_URL}/doctors/1/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
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
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center cursor-pointer"
      >
        <img src={Pen} alt="" />
        <span className="text-NavyBlue">Add Review</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
        >
          <div className="relative bg-neutral-50 rounded-lg shadow-2xl w-full max-w-md md:max-w-2xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Add Your Review
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(addReviews)}>
              {/* Comment */}
              <div className="p-4 md:p-5 space-y-4">
                <textarea
                  {...register("comment", { required: "Add Comment" })}
                  rows="4"
                  className="block w-full resize-none p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your review..."
                ></textarea>
                {errors.comment && (
                  <p className="text-red-500 text-sm">
                    {errors.comment.message}
                  </p>
                )}
              </div>

              {/* Rating */}
              <div className="p-4 md:p-5 space-y-4">
                <input
                  type="number"
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 1, message: "Minimum rating is 1" },
                    max: { value: 10, message: "Maximum rating is 10" },
                  })}
                  className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your rating from 1 to 10"
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating.message}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  type="submit"
                  className="w-full md:w-auto text-white bg-NavyBlue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Send your review
                </button>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="w-full md:w-auto py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-NavyBlue"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
