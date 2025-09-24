import backimage from "../../assets/icons/Mapback.png";
import Arrow from "../../assets/icons/Alt Arrow Down.png";
import Magnifer from "../../assets/icons/grayMagnifer.png";
import snippe from "../../assets/icons/snippeicon.png";
import locateicon from "../../assets/icons/bluePin.png";
import { Link } from "react-router";

export default function Mappage() {
  return (
    <div
      className="w-full relative h-screen bg-cover px-[10px] py-[5px] flex flex-col justify-between "
      style={{ backgroundImage: `url(${backimage})` }}
    >
      <div className="w-full h-[96px] bg-white rounded-[24px] flex items-center justify-between p-[24px]">
        <Link
          to="/"
          className="size-[35px] sm:size-[48px] border border-[#F5F6F7] rounded-[8px] sm:rounded-[12px] p-[8px] sm:p-[12px] "
        >
          <img src={Arrow} alt="" />
        </Link>
        <div className="flex flex-col justify-center items-center gap-[4px]">
          <p className="text-[#05162C] text-[12px]">Current location</p>
          <div className="flex justify-center items-center  text-[#145DB8] text-[10px]">
            <img src={locateicon} className="w-[11px] " />
            <p>129,El-Nasr Street, Cairo </p>
          </div>
        </div>
        <Link
          to="/searchlocation"
          className="size-[35px] sm:size-[48px] border border-[#F5F6F7] rounded-[8px] sm:rounded-[12px] p-[8px] sm:p-[12px] "
        >
          <img src={Magnifer} alt="" />
        </Link>
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
