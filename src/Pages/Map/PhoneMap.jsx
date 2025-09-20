import mapback from "../../assets/icons/The Map.png";
import doctor from "../../assets/icons/doctor.jpg";
import hospital from "../../assets/icons/hospitalimage.jpg";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import { Link } from "react-router";

export default function PhoneMap() {
  return (
    <div
      className="w-full h-screen bg-center bg-cover relative "
      style={{ backgroundImage: `url(${mapback})` }}
    >
      <div className="bg-[#1C2A3A] border-[5px] absolute top-[60%] left-[20%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
        <img
          src={doctor}
          className=" relative z-10 size-[33px] border rounded-full border-white"
        />
      </div>
      <div className="bg-[#1C2A3A] border-[5px] absolute top-[20%] left-[60%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
        <img
          src={doctor}
          className=" relative z-10 size-[33px] border rounded-full border-white"
        />
      </div>
      <div className="bg-[#1C2A3A] border-[5px] absolute top-[20%] left-[20%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
        <img
          src={doctor}
          className=" relative z-10 size-[33px] border rounded-full border-white"
        />
      </div>
      <div className="bg-[#1C2A3A] border-[5px] absolute top-[60%] left-[80%]  before:content-[''] before:z-[1]  before:absolute before:bg-[#1C2A3A] before:rotate-[45deg] before:top-[72%] before:size-[20px] border-[#1C2A3A] size-[45px] flex justify-center items-center rounded-full">
        <img
          src={doctor}
          className=" relative z-10 size-[33px] border rounded-full border-white"
        />
      </div>
      <Link className="bg-white flex justify-center items-center size-[40px] rounded-[12px] absolute top-[10px] left-[10px] shadow-[0_0_12px_0_rgba(0,0,0,0.25)] ">
        <img src={Arrow} alt="" />
      </Link>
      {/* <div className="pl-[10px] flex items-center gap-[15px] overflow-x-scroll w-full no-scrollbar ">
        <div
          className=" relative w-[300px] h-[211px] bg-center bg-cover "
          style={{ backgroundImage: `url(${hospital})` }}
        >
          <div className="absolute bottom-0 w-full bg-white z-10 h-[40%]">
            <div>
                <p>Sunrise healthy hospital</p>
                <p></p>
                <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
