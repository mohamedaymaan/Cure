import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Specialist() {
  const [specialities, setSpecialities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
        {
          headers: {
            Authorization:
              "Bearer 177|Q97KoqxjuHU7P5QFNbtV7lGgMDogmyLccPr8bLFJ9925bb01",
          },
        }
      )
      .then((data) => setSpecialities(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const show = specialities.map((ele) => (
    <div
      key={ele.id}
      className={
        " text-[#404448] cursor-pointer bg-[#F5F6F7] whitespace-nowrap flex flex-col justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
      }
    >
      <img src={"https://" + ele.icon} className="size-[24px]" />
      {ele.name_en}
    </div>
  ));
  return (
    <div className="w-full flex flex-col gap-[24px] pb-[5px]">
      <div className="px-[16px] flex relative items-center justify-center">
        <img
          src={Arrow}
          className="absolute cursor-pointer left-[16px]"
          onClick={() => navigate(-1)}
        />
        <p className="text-[24px] ">Specialties</p>
      </div>
      <div className="flex gap-[8px] flex-wrap">{show}</div>
    </div>
  );
}
