import Magnifer from "../../assets/icons/grayMagnifer.png";
import filtericon from "../../assets/icons/filter.png";
import mapicon from "../../assets/icons/mapicon.png";
import sorticon from "../../assets/icons/Sort Vertical.png";
import DoctorCard from "../../Component/DoctorCard";
import doctor from "../../assets/icons/doctor.jpg";
import { Link } from "react-router";

export default function SearchResult() {
  return (
    <div className="w-full flex flex-col gap-[16px] ">
      <div className="  w-full px-[10px] relative">
        <img
          src={Magnifer}
          className="absolute top-[50%] left-[15px] size-[20px] translate-y-[-50%]"
        />
        <input
          type="text"
          placeholder="Search for your location"
          className="bg-[#F5F6F7] rounded-[10px] px-[10px] w-full h-[48px] pl-[30px]"
        />
      </div>
      <div className="flex justify-center items-center gap-[24px] px-[10px]">
        <button className=" flex-1 flex flex-row justify-center border border-[#BBC1C7] rounded-[10px] h-[36px] items-center gap-[8px] ">
          <img src={sorticon} className="size-[20px]" />
          <p className="text-[#6D7379] text-[15px]">Sort</p>
        </button>
        <button className=" flex-1 flex flex-row justify-center border border-[#BBC1C7] rounded-[10px] h-[36px] items-center gap-[8px] ">
          <img src={filtericon} className="size-[15px]" />
          <p className="text-[#6D7379] text-[15px]">Filter</p>
        </button>
        <Link
          to="/the map"
          className=" flex-1 flex flex-row justify-center border border-[#BBC1C7] rounded-[10px] h-[36px] items-center gap-[8px] "
        >
          <img src={mapicon} className="size-[15px]" />
          <p className="text-[#6D7379] text-[15px]">Map</p>
        </Link>
      </div>
      <p className="text-[#1283CF] text-[18px] px-[10px]">24 Results</p>
      <div className="flex flex-col px-[10px] items-center gap-[10px]">
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
    </div>
  );
}
