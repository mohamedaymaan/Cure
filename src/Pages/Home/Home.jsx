import Stars from "../../assets/icons/Stars.png";
import img1 from "../../assets/icons/img1.jpg";
import img2 from "../../assets/icons/img2.jpg";
import img3 from "../../assets/icons/img3.jpg";
import calender from "../../assets/icons/calender.png";
import frame1 from "../../assets/icons/frame1.png";
import frame2 from "../../assets/icons/frame2.png";
import frame3 from "../../assets/icons/frame3.png";
import Arrow from "../../assets/icons/Arrow.png";
import search from "../../assets/icons/Magnifer.png";
import doctor from "../../assets/icons/doctor.jpg";
import boldstar from "../../assets/icons/boldstar.png";
import profile1 from "../../assets/icons/profile1.jpg";
import profile2 from "../../assets/icons/profile2.jpg";
import profile3 from "../../assets/icons/profile3.jpg";
import profile4 from "../../assets/icons/profile4.jpg";
import profile5 from "../../assets/icons/profile5.jpg";
import Footer from "../../Component/Footer";
import phones from "../../assets/icons/phones.png";
import apple from "../../assets/icons/apple.png";
import googleplay from "../../assets/icons/googleplay.png";
import DoctorCard from "../../Component/DoctorCard";
import Magnifer from "../../assets/icons/grayMagnifer.png";
import rectangle from "../../assets/icons/Banner.png";
import mapfull from "../../assets/icons/mapfull.svg";
import { useEffect, useState } from "react";

import { Link } from "react-router";
import axios from "axios";
import FootBar from "./../../Component/FootBar";

export default function Home() {
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [favIds, setFavIds] = useState([]);

  function addToFav(id) {
    axios
      .post(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors/" +
          id,
        null,
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
      .then((data) =>
        setFavIds(data.data.data.map((ele) => ele.doctor_profile_id))
      )
      .catch((err) => console.log(err));
  }, []);

  function formatTime(timeString) {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour);
    const m = minute;
    const ampm = h >= 12 ? "pm" : "am";

    h = h % 12 || 12; // 0 => 12
    return `${h}:${m}${ampm}`;
  }

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
        {
          headers: {
            Authorization:
              "Bearer 446|6JtR8gzqE0U7ndMY3ADm7ISbWtkqjYnn83S4xgUf8ae16b77",
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
        " text-[#404448] cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
      }
    >
      <img src={"https://" + ele.icon} className="size-[24px]" />
      {ele.name_en}
    </div>
  ));

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors",
        {
          headers: {
            Authorization:
              "Bearer 446|6JtR8gzqE0U7ndMY3ADm7ISbWtkqjYnn83S4xgUf8ae16b77",
          },
        }
      )
      .then((data) => setDoctors(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const showdoctors = doctors.map((ele) => (
    <DoctorCard
      key={ele.user_id}
      img={doctor}
      id={ele.user_id}
      name={ele.name}
      hospital={ele.hospital_name}
      special={ele.specialty_name_en}
      Rating={parseFloat(Number(ele.average_rating).toFixed(1))}
      time={`${formatTime(ele.availability[0].start_time)}-${formatTime(
        ele.availability[0].end_time
      )}`}
      price={ele.price_per_hour}
      fav={favIds.includes(ele.user_id)}
      addfav={() => addToFav(ele.user_id)}
      removefav={() => removeFromFav(ele.user_id)}
    />
  ));

  return (
    <>
      <div className="  w-full md:hidden  flex flex-col gap-[24px] ">
        <Link to="/search" className="  w-full   px-[5%]">
          <div className=" h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
            <img src={Magnifer} className="size-[24px]" />
            <p className="font-[400] text-[#99A2AB] text-[16px]">
              Search about specialty, doctor
            </p>
          </div>
        </Link>
        <div className="w-full flex justify-between px-[5%]">
          <p>Specialties</p>
          <Link to="/specialist" className="text-[#145DB8]">
            View All
          </Link>
        </div>
        <div className="pl-[5%]  w-full flex gap-[10px] overflow-x-scroll no-scrollbar">
          {show}
        </div>
        <div className="w-full">
          <img src={rectangle} className="w-full" />
        </div>
        <div className="w-full flex justify-between px-[5%]">
          <p>Doctors near you</p>
          <Link to="/doctors" className=" cursor-pointer text-[#145DB8]">
            View All
          </Link>
        </div>
        <div className="w-full flex flex-col items-center gap-[5px]">
          {showdoctors}
        </div>
        <Footer />
        <FootBar />
      </div>
      <div className=" hidden md:flex justify-center gap-[30px] sm:pt-[120px] md:pt-[170px] lg:pt-[220px] xl:pt-[320px] 2xl:pt-[370px] flex-col items-center w-full mt-[-40%] relative  overflow-hidden ">
        <div className="flex flex-col  md:pt-[300px] gap-[60px]">
          <div className=" hidden md:flex flex-col justify-center items-center gap-[24px]">
            <div className="  w-[187px] h-[26px] rounded-[28px] gap-[8px] flex justify-center items-center bg-[#E8EFF8] ">
              <img src={Stars} className="size-[13px]" />
              <p className="font-[400] text-[12px] text-[#05162C]">
                Upgrade your account
              </p>
            </div>
            <p className="font-[400]  text-[19px] sm:text-[25px] md:text-[40px]">
              Find and book top doctors near yor
            </p>
            <p className=" text-[15px] font-[400] max-w-[504px] text-[#6D7379] sm:text-[22px]">
              Easily find top-rated specialists near you and book appointments
              in just a few clicks. Whether you need an in-person visit
              consultation, we're here to connect you with the right care—fast,
              simple, and secure.
            </p>
            <div className=" bg-[#E8EFF8] w-[226px] h-[46px] rounded-[43px] p-[8px] flex justify-center items-center gap-[8px] ">
              <div className="relative h-[30px] w-[60px]">
                <img
                  src={img1}
                  className="size-[30px] rounded-full border border-white absolute z-[3] left-[30px]"
                />
                <img
                  src={img2}
                  className="size-[30px] rounded-full border border-white absolute z-[2] left-[15px]  "
                />
                <img
                  src={img3}
                  className="size-[30px] rounded-full border border-white absolute z-[1]"
                />
              </div>
              <p className="font-[400] text-[#05162C] text-[15px]">
                10k+ happy patients
              </p>
            </div>
            <div className="flex gap-[32px]">
              <Link to="/doctors">
                <button className=" w-[120px]  font-[400] sm:w-[196px] h-[48px] rounded-[10px] bg-[#145DB8] text-white cursor-pointer">
                  Get started
                </button>
              </Link>

              <Link to="/appointment">
                <button className=" w-[120px] text-[10px] sm:text-[16px]  font-[400] sm:w-[196px] bg-white h-[48px] flex justify-center items-center gap-[8px] text-[#145DB8] border rounded-[10px] border-[#145DB8]  ">
                  <img src={calender} className="w-[19px] h-[20px]" />
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
          <p className=" hidden md:block font-[400] text-[40px] text-center ">
            How it works
          </p>
          <div className=" hidden   md:flex justify-center items-center gap-[10px] w-screen px-[5%] ">
            <div
              // style={{ backgroundImage: `url(${frame1})` }}
              className=" py-[24px] w-[402px]   md:min-h-autopx-[30px]  h-[280px] rounded-[30px]  border border-[#99A2AB] relative flex-1 bg-white overflow-hidden "
            >
              <img src={frame1} className="w-full" />
              <div className="w-full h-[93px] absolute left-0 bottom-0 bg-white shadow-[0_0_13px_0_rgba(0,0,0,0.1)] flex flex-col gap-[4px] p-[16px] justify-start items-start ">
                <p className="font-[400] text-[] text-[#05162C] ">
                  Search for a Doctor
                </p>
                <p className="font-[400] text-[10px] text-start text-[#404448]">
                  Easily browse by specialty, location, or doctor name to find
                  the right healthcare provider for your needs.
                </p>
              </div>
            </div>
            <div className=" py-[24px] w-[402px]  md:min-h-auto px-[30px] h-[280px] rounded-[30px] border border-[#99A2AB] relative flex-1 bg-white overflow-hidden ">
              <img src={frame2} className="w-full h-full" />
              <div className="w-full h-[93px] absolute left-0 bottom-0 bg-white shadow-[0_0_13px_0_rgba(0,0,0,0.1)] flex flex-col gap-[4px] p-[16px] justify-start items-start  ">
                <img
                  src={Arrow}
                  className="absolute top-[-20px] right-[30px]"
                />
                <p className="font-[400] text-[] text-[#05162C] ">
                  Choose a Date & Time
                </p>
                <p className="font-[400] text-[10px] text-start text-[#404448]">
                  View real-time availability and pick a slot that works best
                  for your schedule.
                </p>
              </div>
            </div>
            <div className=" px-[30px] w-[402px]  md:min-h-auto h-[280px] rounded-[30px] border border-[#99A2AB] relative flex-1 bg-white overflow-hidden ">
              <img src={frame3} className="w-full" />
              <div className="w-full h-[93px] absolute left-0 bottom-0 bg-white shadow-[0_0_13px_0_rgba(0,0,0,0.1)] flex flex-col gap-[4px] p-[16px] justify-start items-start ">
                <p className="font-[400] text-[] text-[#05162C] ">
                  Book & Pay Online
                </p>
                <p className="font-[400] text-[10px] text-start text-[#404448]">
                  Confirm your appointment and pay securely using various
                  payment options—credit card, mobile wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex w-full  p-[5%] items-center justify-between ">
          <div className="max-w-[430px] text-start flex flex-col gap-[24px]">
            <p className="font-[400] text-[40px] text-[#05162C]">
              Find Care Near You in Seconds
            </p>
            <p className="font-[400] text-[15px] lg:text-[22px] text-[#6D7379] ">
              Allow location access or choose your city to instantly discover
              trusted doctors and clinics around you—quick, easy, and local.
            </p>
            <button className=" w-[196px] bg-white h-[48px] flex justify-center items-center gap-[8px] text-[#145DB8] border rounded-[10px] border-[#145DB8]  ">
              <img src={search} className="w-[19px] h-[20px]" />
              Search by location
            </button>
          </div>

          <div className=" rounded-[50px] ">
            <img src={mapfull} className="w-full " />
          </div>
        </div>
        <div className="hidden md:flex w-full p-[5%] flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <div className="max-w-[692px] text-start">
              <p className="font-[400] text-[40px] text-[#05162C]">
                Top-Rated Doctors Chosen by Patients
              </p>
              <p className="font-[400] text-[22px] text-[#6D7379]">
                Explore our highest-rated doctors, trusted by real patients for
                their expertise, care, and service. Book with confidence today.
              </p>
            </div>
            <button className=" w-[123px] bg-white h-[48px]  text-[#145DB8] border rounded-[10px] border-[#145DB8]  ">
              view all
            </button>
          </div>
          <div className="flex gap-[24px] p-[4px]  w-full overflow-x-scroll no-scrollbar ">
            {showdoctors}
          </div>
        </div>
        <div className=" hidden md:flex p-[5%]  flex-col items-center gap-[64px]">
          <p className="font-[400] text-[40px] text-center ">
            Reviews
            <br />
            That Speak for Themselves
          </p>
          <div className="flex gap-[2px]">
            <img src={boldstar} className="size-[24px]" />
            <img src={boldstar} className="size-[24px]" />
            <img src={boldstar} className="size-[24px]" />
            <img src={boldstar} className="size-[24px]" />
            <img src={boldstar} className="size-[24px]" />
          </div>
          <p className="font-[400] text-[#555B6C] max-w-[368px] text-[23px]">
            “Quick and easy booking! I found a great dermatologist near me and
            booked an appointment in just a few minutes.”
          </p>
          <div className="h-[166px] w-[686px] flex justify-between">
            <img
              src={profile1}
              className="rounded-full size-[112px] self-end "
            />
            <img
              src={profile2}
              className="rounded-full size-[120px] self-center"
            />
            <img src={profile3} className="rounded-full size-[150px]" />
            <img
              src={profile4}
              className="rounded-full size-[120px] self-center"
            />
            <img
              src={profile5}
              className="rounded-full size-[112px] self-end "
            />
          </div>
        </div>
        <div className=" hidden md:flex flex-col gap-[48px] items-center p-[5%]">
          <div className="w-[230px] h-[33px] bg-[#E8EFF8] rounded-[23px] py-[8px] px-[16px] ">
            <p className="font-[400] text-[#145DB8] text-[15px]">
              Frequently Asked Questions
            </p>
          </div>
          <p className="font-[400] text-[#05162C] text-[40px]">
            Got Questions ? We’ve got Answers!
          </p>
          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">
                What is this app used for?
              </p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">Is the app free to use?</p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">How can I find a doctor?</p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">
                Can I cancel my appointment?
              </p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">
                What payment are supported
              </p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
            <div className="w-full h-[59px] bg-[#F5F6F7] rounded-[8px] flex justify-between items-center p-[16px]">
              <p className="font-[400] text-[18px]">
                How do I edit my profile?
              </p>
              <p className="font-[400] text-[18px]">+</p>
            </div>
          </div>
        </div>
        <div className="h-[350px] hidden md:block w-full relative">
          <div className=" flex justify-center gap-[60px] items-center py-[40px] px-[60px] h-[320px] w-[85%] bg-[#6292CF] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-25%] rounded-[20px] ">
            <div className="flex flex-col justify-between h-full ">
              <div className="flex flex-col gap-[10px] text-white ">
                <p className=" md:text-[25px] lg:text-[35px]">
                  Your Health, One Tap Away
                </p>
                <p className="max-w-[540px] md:text-[13px] lg:text-[18px] ">
                  Book appointments, chat with doctors, and manage your health
                  anytime—right from your phone. Download the app now and stay
                  connected wherever you are.
                </p>
              </div>
              <div className="flex gap-[40px]">
                <div className=" cursor-pointer h-[55px] md:w-[150px] lg:w-[187px] py-[8px] px-[16px] bg-[#05162C] rounded-[8px] flex gap-[8px] items-center ">
                  <img src={googleplay} />
                  <div className="flex flex-col text-white h-full justify-between ">
                    <p className="font-[400] md:text-[8px] lg:text-[11px]">
                      Got IT ON
                    </p>
                    <p className="font-[500] md:text-[14px] lg:text-[20px]">
                      Google Play
                    </p>
                  </div>
                </div>
                <div className=" cursor-pointer h-[55px] md:w-[150px] lg:w-[187px] py-[8px] px-[16px] bg-[#05162C] rounded-[8px] flex gap-[8px] items-center ">
                  <img src={apple} className="size-[32px]" />
                  <div className="flex flex-col text-white h-full justify-between ">
                    <p className="font-[400] md:text-[8px] lg:text-[11px]">
                      Download on the
                    </p>
                    <p className="font-[500] md:text-[14px] lg:text-[20px]">
                      Apple Store
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src={phones} className="w-[40%]" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
