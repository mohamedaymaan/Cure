import heart from "../assets/icons/Heart.png";
import symbol1 from "../assets/icons/facebook.png";
import symbol2 from "../assets/icons/whats.png";
import symbol3 from "../assets/icons/youtube.png";
import symbol4 from "../assets/icons/linkedin.png";
import Icon1 from "../assets/icons/phone.png";
import Icon2 from "../assets/icons/message.png";
import Icon3 from "../assets/icons/locationF.png";

export default function Footer() {
  return (
    <div className=" flex w-full h-fit md:h-[450px] bg-[#05162C] pt-[30px] px-[50px] md:p-[100px] md:pb-[30px]  pb-[30px]  flex-col justify-between ">
      <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between">
        <div className="flex flex-col gap-[24px]">
          <div className="flex gap-[16px]">
            <img src={heart} className="size-[50px]" />
            <p className="font-[400] text-[30px] text-white ">Cure</p>
          </div>
          <p className="max-w-[323px] text-white ">
            Cure helps you find trusted doctors, book appointments, and manage
            your health—quickly and easily.
          </p>
          <div className="flex gap-[16px]">
            <button className="size-[40px] rounded-[8px] flex justify-center items-center bg-white">
              <img src={symbol1} className="w-[30%]" />
            </button>
            <button className="size-[40px] rounded-[8px] flex justify-center items-center bg-white">
              <img src={symbol2} className="w-[50%]" />
            </button>
            <button className="size-[40px] rounded-[8px] flex justify-center items-center bg-white">
              <img src={symbol3} className="w-[50%]" />
            </button>
            <button className="size-[40px] rounded-[8px] flex justify-center items-center bg-white">
              <img src={symbol4} className="w-[50%]" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ml-[10px] gap-[50px]">
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Company</p>
            <ul className="text-[13px] lg:text-[16px]">
              <li>Home</li>
              <li>Doctors</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Support</p>
            <ul className="text-[13px] lg:text-[16px]">
              <li>Help Center</li>
              <li>Doctors</li>
              <li>How it works</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Contact Info</p>
            <ul className="text-[13px] lg:text-[16px]">
              <li className="flex gap-[15px]">
                <img src={Icon1} className="size-[16px]" />
                <div>
                  <p>Phone</p>
                  <p className="font-[100]">080 707 555-321</p>
                </div>
              </li>
              <li className="flex gap-[15px]">
                <img src={Icon2} className="size-[16px]" />
                <div>
                  <p>Email</p>
                  <p className="font-[100]">demo@example.com</p>
                </div>
              </li>
              <li className="flex gap-[15px]">
                <img src={Icon3} className="size-[16px]" />
                <div>
                  <p>Address</p>
                  <p className="max-w-[186px]">
                    526 Melrose Street, Water Mill, 11976 New York
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-[20px] md:mt-[0px] text-white">
        <p>@2024 Techvio - All Right Reserved</p>
        <p className="hidden md:block">Terms & Condition | Privacy Policy</p>
      </div>
    </div>
  );
}
