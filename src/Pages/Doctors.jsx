import filterarrow from "../assets/icons/filterarrow.png";
import filtericon from "../assets/icons/filter.png";
import mapicon from "../assets/icons/mapicon.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import  axios  from axios';
export default function Doctors() {
  const [filter, setFilter] = useState(false);
  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
        {
          headers: {
            Authorization:
              "Bearer 3|AntWR5lI0GIHTmhcxe4WG8eT92eJbpDBlQwjW56S05a70867",
          },
        }
      )
      .then((data) => setSpecialities(data.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" px-[100px] pt-[30px]">
      <div className="flex gap-[24px] pb-[30px]">
        <div
          onClick={() => setFilter((prev) => !prev)}
          className="w-[155px] pl-[15px] shrink-0 flex gap-[8px] items-center h-[52px] relative border border-[#BBC1C7] rounded-[10px] cursor-pointer "
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
        <input
          type="text"
          placeholder="Search doctors"
          className="w-full py-[8px] px-[24px] rounded-[10px] border border-[#BBC1C7]"
        />
        <button className="text-[#6D7379] flex justify-center items-center gap-[8px] border h-[52px] pr-[24px] pl-[20px] rounded-[10px] border-[#BBC1C7]">
          <img src={mapicon} className="size-[20px]" />
          Map
        </button>
      </div>
      <div className="flex gap-[4px]">
        <div
          className={
            filter
              ? "w-[155px]  transition-[.3s]  flex flex-col gap-[16px]  "
              : "opacity-0 transition-[.3s] w-[155px] flex flex-col gap-[16px] "
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
        <div className="w-full h-screen bg-amber-600 flex flex-col">
          <p className="text-[24px]">Choose Specialties</p>
          <div className=" w-full no-scrollbar"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
