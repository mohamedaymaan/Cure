import { Link, useNavigate } from "react-router";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import Magnifer from "../../assets/icons/grayMagnifer.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
        {
          headers: {
            Authorization:
              "Bearer 175|qSSVGC5oupt5iOQI1U548yGUZsdnNCFZw4BiRCHe7b2586eb",
          },
        }
      )
      .then((data) => setSpecialities(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/searchHistories",
        {
          headers: {
            Authorization:
              "Bearer 175|qSSVGC5oupt5iOQI1U548yGUZsdnNCFZw4BiRCHe7b2586eb",
          },
        }
      )
      .then((data) => setHistory(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const show = specialities.map((ele) => (
    <div
      key={ele.id}
      className={
        " text-[#404448] cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
      }
    >
      <img src={"https://" + ele.icon} className="size-[24px]" />
      {ele.name_en}
    </div>
  ));
  const showHistory = history.map((ele) => (
    <div
      key={ele.id}
      className={
        " text-[#404448] cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
      }
    >
      {ele.name_en}
    </div>
  ));

  return (
    <div className="flex flex-col gap-[18px]">
      <div className="px-[16px] flex relative items-center justify-center">
        <img
          src={Arrow}
          className="absolute cursor-pointer left-[16px]"
          onClick={() => navigate(-1)}
        />
        <p className="text-[24px] ">Search</p>
      </div>
      <Link to="/doctors" className="  w-full   px-[5%]">
        <div className=" h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
          <img src={Magnifer} className="size-[16px]" />
          <p className="font-[400] text-[#99A2AB] text-[12px]">
            Search about specialty, doctor
          </p>
        </div>
      </Link>
      <div className="flex items-center px-[8px]">
        <p className="text-[13px]">Search by your location</p>
        <Link to="/map" className="text-[10px] text-[#1490E3] ">
          129,El-Nasr Street, Cairo
        </Link>
      </div>
      <p className="px-[8px]">All Specialties</p>
      <div className="px-[8px] flex flex-wrap gap-[8px]">{show}</div>
      <p className="px-[8px]">History</p>
      <div className="px-[8px] flex flex-wrap gap-[8px]">{showHistory}</div>
    </div>
  );
}
