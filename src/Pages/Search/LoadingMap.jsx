import { useNavigate } from "react-router";
import Avatar from "../../assets/icons/Avatar.png";
import backimage from "../../assets/icons/Mapback.png";

export default function LoadingMap() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/searchresult");
  }, 5000);
  return (
    <div
      className="w-full relative h-screen bg-cover  flex justify-center items-center z-[1] "
      style={{ backgroundImage: `url(${backimage})` }}
    >
      <img src={Avatar} className="size-[100px] rounded-full relative z-[3]" />
      <div className=" animate-pulse bg-white  w-full h-full absolute top-0 left-0 z-[2] "></div>
    </div>
  );
}
