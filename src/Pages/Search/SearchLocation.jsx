import { Link } from "react-router";
import snippe from "../../assets/icons/snippeicon.png";
import Magnifer from "../../assets/icons/grayMagnifer.png";

export default function SearchLocation() {
  return (
    <div className="w-full relative h-screen bg-cover px-[10px] py-[5px] flex flex-col justify-between ">
      <div className=" w-full px-[10px] relative">
        <img
          src={Magnifer}
          className="absolute top-[50%] left-[10px] size-[20px] translate-y-[-50%]"
        />
        <input
          type="text"
          placeholder="Search for your location"
          className="w-full h-[48px] pl-[30px]"
        />
      </div>
      <Link
        to="/loadingmap"
        className="w-full flex justify-center items-center h-[48px] bg-[#145DB8] text-white rounded-[10px] mb-[10px] "
      >
        Confirm location
      </Link>
      <Link className="size-[35px] absolute top-[75%] right-[10px] bg-white sm:size-[48px] border border-[#F5F6F7] rounded-[8px] sm:rounded-[12px] p-[8px] sm:p-[12px] ">
        <img src={snippe} alt="" />
      </Link>
    </div>
  );
}
