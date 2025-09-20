import axios from "axios";
import { useEffect, useState } from "react";
import doctor from "../../assets/icons/doctor.jpg";
import DoctorCard from "../../Component/DoctorCard";
import hearts from "../../assets/icons/hearts.png";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import { useNavigate } from "react-router";

export default function Favourite() {
  const navigate = useNavigate();
  // const [favourite, setFavourite] = useState([]);
  // useEffect(() => {
  //   const func = async () => {
  //     await axios
  //       .get(
  //         "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors",
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer 127|Bnk5DYB3aHg1WpcPawsOxY6Ym38dNw4xZjbxQire166c1f6f",
  //           },
  //         }
  //       )
  //       .then((data) => setFavourite(data.data.data))
  //       .catch((err) => console.log(err));
  //   };
  // }, []);

  // const favouritewithspec = favourite.map((ele) => async () => {
  //   const res = await axios.get(
  //     `http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities/${ele.favouritable.doctor_profile.specialist_id}`
  //   );
  //   console.log("res=>" + res);
  // });

  // useEffect(async()=>{
  //   await axios.get()
  // },[])

  // let special = "";
  // const showfav = favourite.map((ele) =>
  //   axios
  //     .get(
  //       `http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities/${ele.favouritable.doctor_profile.specialist_id}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer 127|Bnk5DYB3aHg1WpcPawsOxY6Ym38dNw4xZjbxQire166c1f6f",
  //         },
  //       }
  //     )
  //     .then(
  //       // (data) => console.l(data.data.data.name_en)
  //       <DoctorCard
  //         key={ele.favouritable.doctor_profile.id}
  //         img={doctor}
  //         name={ele.favouritable.doctor_profile.name}
  //         hospital="El-Nasr Hospital"
  //         special={data.data.data.name_en}
  //         Rating={parseFloat(Number(ele.average_rating).toFixed(1))}
  //         time={`${formatTime(ele.start_time)}-${formatTime(ele.end_time)}`}
  //         price={ele.favouritable.doctor_profile.price_per_hour}
  //       />
  //     )
  // );

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
