import filterarrow from "../../assets/icons/filterarrow.png";
import filtericon from "../../assets/icons/filter.png";
import mapicon from "../../assets/icons/mapicon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../../Component/DoctorCard";
import Footer from "../../Component/Footer";
import doctor from "../../assets/icons/doctor.jpg";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import closeicon from "../../assets/icons/closeicon.png";
import { Link, useNavigate } from "react-router";
import Magnifer from "../../assets/icons/grayMagnifer.png";
import googlemap from "../../assets/GoogleMap.png";
import AuthContext from "../../Context/AuthContext"; 
import { useContext } from "react";


// import  axios  from axios';
export default function Doctors() {
  const [filter, setFilter] = useState(false);
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [specialitiesFilter, setSpecialitiesFilter] = useState("");
  const [mapflag, setMapflag] = useState(false);
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  const { token } = useContext(AuthContext);
  async function handleSearch() {
    const res = await axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors/search?query=" +
          search,
        {
          headers: {
            Authorization:
              `Bearer ${token}` ,
          },
        }
      )
      .then((data) => setSearchdata(data.data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const debounced = setTimeout(() => {
      if (search.length > 0) handleSearch();
    }, 800);

    return () => {
      clearTimeout(debounced);
    };
  }, [search]);

  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
        {
          headers: {
            Authorization:
              "Bearer 173|SCklzkSh8yte2gFlnoKsC8Jx9Nvl6YCMMYxrQKeb37b2652b",
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
        ele.name_en === specialitiesFilter
          ? " text-white bg-blue-700 cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
          : " text-[#404448] cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
      }
      onClick={() => setSpecialitiesFilter(ele.name_en)}
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
              `Bearer ${token}`,
          },
        }
      )
      .then((data) => setDoctors(data.data.data))
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

  const showdoctors =
    specialitiesFilter === ""
      ? (searchdata.length > 0 ? searchdata : doctors).map((ele) => (
          <DoctorCard
            key={ele.doctor_profile_id}
            img={doctor}
            name={ele.name}
            hospital={ele.hospital_name}
            special={ele.specialty_name_en}
            Rating={parseFloat(Number(ele.average_rating).toFixed(1))}
            time={`${formatTime(ele.start_time)}-${formatTime(ele.end_time)}`}
            price={ele.price_per_hour}
          />
        ))
      : (searchdata.length > 0 ? searchdata : doctors).map((ele) =>
          ele.specialty_name_en === specialitiesFilter ? (
            <DoctorCard
              key={ele.doctor_profile_id}
              img={ele.img}
              name={ele.name}
              hospital={ele.hospital_name}
              special={ele.specialty_name_en}
              Rating={parseFloat(Number(ele.average_rating).toFixed(1))}
              time={`${formatTime(ele.start_time)}-${formatTime(ele.end_time)}`}
              price={ele.price_per_hour}
            />
          ) : null
        );

  return (
    <div className="overflow-hidden">
      {mapflag && (
        <div
          onClick={() => setMapflag(false)}
          className="w-full top-0 bg-[#00000080] h-screen fixed z-50 flex justify-center items-center "
        >
          <div className=" rounded-[30px] lg:w-[90%] md:w-full  h-[80%] p-[24px] flex flex-col gap-[8px] bg-white">
            <div className="flex w-full justify-between items-center">
              <p className="text-[18px]">24 Results</p>{" "}
              <img
                onClick={() => setMapflag(false)}
                src={closeicon}
                className=" cursor-pointer size-[24px]"
              />
            </div>
            <div className="h-[90%] w-full   flex gap-[16px]">
              <div className=" shrink-0 w-[360px] items-center gap-[8px] h-full flex flex-col overflow-y-scroll no-scrollbar">
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
              <div className=" relative w-full">
                <img src={googlemap} className="w-full h-full" />
                <div className="bg-[#1C2A3A] border-[5px] absolute top-[60%] left-[80%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
                  <img
                    src={doctor}
                    className=" relative z-10 size-[33px] border rounded-full border-white"
                  />
                </div>
                <div className="bg-[#1C2A3A] border-[5px] absolute top-[20%] left-[80%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
                  <img
                    src={doctor}
                    className=" relative z-10 size-[33px] border rounded-full border-white"
                  />
                </div>
                <div className="bg-[#1C2A3A] border-[5px] absolute top-[60%] left-[20%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
                  <img
                    src={doctor}
                    className=" relative z-10 size-[33px] border rounded-full border-white"
                  />
                </div>
                <div className="bg-[#1C2A3A] border-[5px] absolute top-[50%] left-[20%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
                  <img
                    src={doctor}
                    className=" relative z-10 size-[33px] border rounded-full border-white"
                  />
                </div>
                <div className="bg-[#1C2A3A] border-[5px] absolute top-[80%] left-[40%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
                  <img
                    src={doctor}
                    className=" relative z-10 size-[33px] border rounded-full border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="  md:px-[100px] pb-[5px] md:pt-[30px] mb-[40px] ">
        <div className="flex flex-col md:flex-row gap-[24px] pb-[30px]">
          <div className=" flex md:hidden px-[16px]  relative items-center justify-center">
            <img
              src={Arrow}
              className="absolute cursor-pointer left-[16px]"
              onClick={() => navigate(-1)}
            />
            <p className="text-[24px] ">Doctors</p>
          </div>
          <div
            onClick={() => setFilter((prev) => !prev)}
            className="w-[155px] hidden md:flex pl-[15px] shrink-0  gap-[8px] items-center h-[52px] relative border border-[#BBC1C7] rounded-[10px] cursor-pointer "
          >
            <img src={filtericon} alt="" />
            <p className="font-[400] text-[#6D7379]">Filter</p>
            <div className="w-[35px] h-full absolute right-0 flex justify-center items-center border-l border-[#6D7379] ">
              <img
                src={filterarrow}
                className={filter ? `rotate-[270deg]` : null}
              />
            </div>
          </div>
          <Link className=" md:hidden  w-full   px-[5%]">
            <div className=" h-[40px] bg-[#F5F6F7] rounded-[10px] flex items-center gap-[16px] py-[8px] px-[16px] ">
              <img src={Magnifer} className="size-[24px]" />
              <p className="font-[400] text-[#99A2AB] text-[16px]">
                Search about specialty, doctor
              </p>
            </div>
          </Link>
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search doctors"
            className="hidden md:block mx-[5px] w-[97%] md:w-full py-[8px] px-[24px] rounded-[10px] border border-[#BBC1C7]"
          />
          <button
            onClick={() => setMapflag(true)}
            className=" cursor-pointer hidden md:flex text-[#6D7379]  justify-center items-center gap-[8px] border h-[52px] pr-[24px] pl-[20px] rounded-[10px] border-[#BBC1C7]"
          >
            <img src={mapicon} className="size-[20px]" />
            Map
          </button>
        </div>
        <div className="flex gap-[4px]">
          <div
            className={
              filter
                ? "hidden md:flex w-[155px]  transition-[.3s]   flex-col gap-[16px]  "
                : "hidden md:flex opacity-0 transition-[.3s] w-[155px]  flex-col gap-[16px] "
            }
          >
            <p className="text-[14px]">Available Date</p>
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="today"
                className=" cursor-pointer w-fit flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="today"
                  id="today"
                />
                <div className="size-[20px] peer-checked:bg-[#145DB8] border-[1.5px] border-[#99A2AB] rounded-[5px] flex justify-center items-center text-[11px]  text-white ">
                  &#10003;
                </div>
                <p className="text-[#6D7379]">Today</p>
              </label>
              <label
                htmlFor="tomorrow"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="tomorrow"
                  id="tomorrow"
                />
                <div className="size-[20px] border-[1.5px] border-[#99A2AB] peer-checked:bg-[#145DB8] rounded-[5px] flex justify-center items-center text-[11px] text-white">
                  &#10003;
                </div>
                <p className="text-[#6D7379]">Tomorrow</p>
              </label>
            </div>
            <p className="text-[14px]">Gender</p>
            <div className="flex  gap-[24px]">
              <label
                htmlFor="male"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="gender"
                  id="male"
                />
                <div className=" peer-checked:bg-[#145DB8] border-[1.5px] border-[#99A2AB] rounded-[5px] flex justify-center items-center peer-checked:text-white text-[#6D7379]  p-[8px] ">
                  Male
                </div>
              </label>
              <label
                htmlFor="female"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="gender"
                  id="female"
                />
                <div className=" border-[1.5px] border-[#99A2AB] peer-checked:bg-[#145DB8] rounded-[5px] flex justify-center items-center peer-checked:text-white  text-[#6D7379] p-[8px]">
                  Female
                </div>
              </label>
            </div>

            <p className="text-[14px]">Consultation Type</p>
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="in"
                className=" cursor-pointer w-fit flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="type"
                  id="in"
                />
                <div className="size-[20px] peer-checked:bg-[#145DB8] border-[1.5px] border-[#99A2AB] rounded-[5px] flex justify-center items-center text-[11px]  text-white ">
                  &#10003;
                </div>
                <p className="text-[#6D7379]">In-clinic</p>
              </label>
              <label
                htmlFor="visit"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="type"
                  id="visit"
                />
                <div className="size-[20px] border-[1.5px] border-[#99A2AB] peer-checked:bg-[#145DB8] rounded-[5px] flex justify-center items-center text-[11px] text-white">
                  &#10003;
                </div>
                <p className="text-[#6D7379]">Home Visit</p>
              </label>
            </div>
            <p className="text-[14px]">Sort</p>
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="recommend"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="sort"
                  id="recommend"
                />
                <div className="size-[20px] peer-checked:bg-[#145DB8] border-[1.5px] border-[#99A2AB] rounded-[5px] flex justify-center items-center text-[11px]  text-white ">
                  &#10003;
                </div>
                <p className="text-[#6D7379] text-[12px]">Most recommended</p>
              </label>
              <label
                htmlFor="low"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="sort"
                  id="low"
                />
                <div className="size-[20px] border-[1.5px] border-[#99A2AB] peer-checked:bg-[#145DB8] rounded-[5px] flex justify-center items-center text-[11px] text-white">
                  &#10003;
                </div>
                <p className="text-[#6D7379] text-[12px]">Price Low to high</p>
              </label>
              <label
                htmlFor="high"
                className=" w-fit cursor-pointer flex gap-[8px] items-center "
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="sort"
                  id="high"
                />
                <div className="size-[20px] border-[1.5px] border-[#99A2AB] peer-checked:bg-[#145DB8] rounded-[5px] flex justify-center items-center text-[11px] text-white">
                  &#10003;
                </div>
                <p className="text-[#6D7379] text-[12px]">Price High to low</p>
              </label>
            </div>
          </div>
          <div className="w-full  overflow-hidden flex flex-col gap-[32px] ">
            <p className="hidden md:block text-[24px]">Choose Specialties</p>
            <div className="px-[16px] w-full flex gap-[10px] overflow-x-scroll no-scrollbar">
              <div
                key={0}
                className={
                  "" === specialitiesFilter
                    ? " text-white bg-blue-700 cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
                    : " text-[#404448] cursor-pointer whitespace-nowrap flex justify-center h-fit items-center gap-[8px] py-[8px] px-[16px] rounded-[14px] border border-[#99A2AB]  "
                }
                onClick={() => setSpecialitiesFilter("")}
              >
                All
              </div>
              {show}
            </div>
            <div className=" pb-[5px] w-full flex justify-center items-center gap-[8px] flex-wrap h-fit">
              {showdoctors}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
