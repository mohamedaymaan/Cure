import React, { act, useEffect, useState } from "react";
import ArrowUp from "../../assets/icons/ArrowUp.png";
import ArrowDown from "../../assets/icons/ArrowDown.png";
import Calendar from "../../assets/icons/calendar.png";
import CalendarBlue from "../../assets/icons/BlueCalender.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CalenderComponent() {
  useEffect(() => {
    handleDisplayData();
  }, []);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let [active, setActive] = useState(null);
  let [activeTime, setActiveTime] = useState(null);
  let [selectTime, setSelectTime] = useState("");
  let [dateList, setDateList] = useState([]);
  let { register, handleSubmit, setValue } = useForm();

  async function handleDate({ date, time }) {
    let formData = new FormData();
    formData.append("doctor_id", 1);
    formData.append("date", date);
    formData.append("time", time);

    let { data } = await axios
      .post(`${import.meta.env.VITE_API_URL}/appointments`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        console.log(err.response?.data.message);
        toast.error(err.response?.data.message);
      });
    if (data?.message == "Appointment booked successfully.") {
      toast.success(data?.message);
    }
  }
  async function handleDisplayData() {
    let { data } = await axios
      .get(`${import.meta.env.VITE_API_URL}/doctors/1/available-slots`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    let { doctor_id, available_slots } = data;
    setDateList(available_slots);
  }
  function handleTime(fullTime) {
    let [hours, min] = fullTime.split(":");
    const h = parseInt(hours, 10);
    const dateForm = h >= 12 ? "PM" : "AM";
    hours = h % 12 || 12;
    const formattedTime = `${hours}:${min} ${dateForm}`;
    return formattedTime;
  }

  return (
    <>
      <div className="p-5 border border-neutral-500 rounded-2xl">
        <div className="flex  justify-between items-center">
          <p>Choose date and time</p>
          <div className="flex items-center">
            <img src={Calendar} alt="" />
            <p className="mx-2.5">November, 2024</p>
            <div className="flex flex-col">
              <button className="cursor-pointer">
                <img src={ArrowUp} className="mb-2" alt="" />
              </button>
              <button className="cursor-pointer">
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4 text-neutral-500" />

        <form onSubmit={handleSubmit(handleDate)}>
          <div className="flex flex-wrap gap-4">
            {dateList.map((item, i) => {
              return (
                <div key={i}>
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setValue("date", item.date);
                    }}
                    className={`cursor-pointer py-2  w-[50px] h-[60px] rounded-[8px]  flex flex-col justify-center items-center ${
                      active === i
                        ? "bg-NavyBlue text-white"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    <div>
                      <p>{days[new Date(item.date).getDay()]}</p>
                      <p>{new Date(item.date).getDay() + 1}</p>
                    </div>
                  </button>
                </div>
              );
            })}
            <input type="hidden" {...register("date")} />
          </div>
          <div className="flex my-8 gap-4 flex-wrap ">
            {dateList.map((item, i) => {
              return (
                <div key={i}>
                  <button
                    onClick={() => {
                      setActiveTime(i);
                      setValue("time", item.time);
                    }}
                    type="button"
                    key={i}
                    className={`py-2  w-[105px] h-[40px] rounded-[8px]  flex flex-col justify-center items-center ${
                      activeTime === i
                        ? "bg-NavyBlue text-white"
                        : "bg-neutral-200  text-neutral-600"
                    } `}
                  >
                    <p>{handleTime(item?.time)}</p>
                  </button>
                </div>
              );
            })}
            <input type="hidden" {...register("time")} />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={CalendarBlue} alt="" />
              <p className="mx-1.5 text-Navy text-[14px] font-medium">
                Monday,November 15 - 3:00PM
              </p>
            </div>
            <button
              type="submit"
              className="px-10 py-2 border border-NavyBlue rounded-[8px] text-NavyBlue cursor-pointer"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
