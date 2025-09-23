import axios from "axios";
import { useEffect, useState,useContext } from "react";
import doctor from "../../assets/icons/doctor.jpg";
import DoctorCard from "../../Component/DoctorCard";
import hearts from "../../assets/icons/hearts.png";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext"; 


export default function Favourite() {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState([]);
  const [favIds, setFavIds] = useState([]);

  console.log(favIds);

  function addToFav(id) {
    axios
      .post(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors/" +
          id,
        {
          headers: {
            Authorization:
              "Bearer 446|6JtR8gzqE0U7ndMY3ADm7ISbWtkqjYnn83S4xgUf8ae16b77",
          },
        }
      )
      .then(() => setFavIds((prev) => [...prev, id]))
      .catch((err) => console.log(err));
  }
  function removeFromFav(id) {
    axios
      .delete(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors/" +
          id,
        {
          headers: {
            Authorization:
              "Bearer 446|6JtR8gzqE0U7ndMY3ADm7ISbWtkqjYnn83S4xgUf8ae16b77",
          },
        }
      )
      .then(() => setFavIds((prev) => prev.filter((ele) => ele !== id)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors",
        {
          headers: {
            Authorization:
              "Bearer 446|6JtR8gzqE0U7ndMY3ADm7ISbWtkqjYnn83S4xgUf8ae16b77",
          },
        }
      )
      .then((data) => {
        setFavourite(data.data.data);
        setFavIds(data.data.data.map((ele) => ele.doctor_profile_id));
      })
      .catch((err) => console.log(err));
  }, []);

  function formatTime(timeString) {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour);
    const m = minute;
    const ampm = h >= 12 ? "pm" : "am";

    h = h % 12 || 12;
    return `${h}:${m}${ampm}`;
  }

  const show = favourite.map((ele) => (
    <DoctorCard
      key={ele.doctor_profile_id}
      img={doctor}
      name={ele.name}
      id={ele.user_id}
      hospital={ele.hospital_name}
      special={ele.specialty_name_en}
      Rating={parseFloat(Number(ele.average_rating).toFixed(1))}
      time={`${formatTime(ele.start_time)}-${formatTime(ele.end_time)}`}
      price={ele.price_per_hour}
      fav={favIds.includes(ele.user_id)}
      addfav={() => addToFav(ele.user_id)}
      removefav={() => removeFromFav(ele.user_id)}
    />
  ));

  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="px-[16px] flex relative items-center justify-center">
        <img
          src={Arrow}
          className="absolute cursor-pointer left-[16px]"
          onClick={() => navigate(-1)}
        />
        <p className="text-[24px] ">Your Favorite</p>
      </div>
      <div className=" w-full flex justify-center items-center border-b border-b-[#145DB8] text-[#145DB8] py-[8px] ">
        Doctors
      </div>
      <div className="flex gap-[8px] justify-center flex-wrap">
        {show}
        {/* <DoctorCard
          img={doctor}
          name="Robert Johnson"
          hospital="El-Nasr Hospital"
          special="Orthopedic"
          Rating="4.8"
          time="9:30am - 8:00pm"
          price="350"
          fav={true}
        />
        <DoctorCard
          img={doctor}
          name="Robert Johnson"
          hospital="El-Nasr Hospital"
          special="Orthopedic"
          Rating="4.8"
          time="9:30am - 8:00pm"
          price="350"
          fav={true}
        />
        <DoctorCard
          img={doctor}
          name="Robert Johnson"
          hospital="El-Nasr Hospital"
          special="Orthopedic"
          Rating="4.8"
          time="9:30am - 8:00pm"
          price="350"
          fav={true}
        />
        <DoctorCard
          img={doctor}
          name="Robert Johnson"
          hospital="El-Nasr Hospital"
          special="Orthopedic"
          Rating="4.8"
          time="9:30am - 8:00pm"
          price="350"
          fav={true}
        />
        <DoctorCard
          img={doctor}
          name="Robert Johnson"
          hospital="El-Nasr Hospital"
          special="Orthopedic"
          Rating="4.8"
          time="9:30am - 8:00pm"
          price="350"
          fav={true}
        /> */}
      </div>

      <div className=" hidden w-full h-screen absolute top-0 left-0  justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <img src={hearts} className="w-[50%]" />
          <p className="font-[600] text-[18px]">Your favorite!</p>
          <p className="text-[#6D7379]">Add your favorite to find it easily</p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
