import heart from "../assets/icons/Heart.png";
import symbol1 from "../assets/icons/facebook.png";
import symbol2 from "../assets/icons/whats.png";
import symbol3 from "../assets/icons/youtube.png";
import symbol4 from "../assets/icons/linkedin.png";
import icon1 from "../assets/icons/phoneicon.png";
import icon2 from "../assets/icons/messageicon.png";
import icon3 from "../assets/icons/locationicon.png";

export default function Footer() {
  return (
    <div className=" hidden md:flex w-screen h-[450px] bg-[#05162C] p-[100px] pb-[30px]  flex-col justify-between ">
      <div className="flex justify-between">
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
        <div className="flex gap-[50px]">
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Company</p>
            <ul>
              <li>Home</li>
              <li>Doctors</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Support</p>
            <ul>
              <li>Help Center</li>
              <li>Doctors</li>
              <li>How it works</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-[24px]">
            <p className="text-[24px]">Contact Info</p>
            <ul>
              <li className="flex gap-[15px]">
                <img src={icon1} className="size-[16px]" />
                <div>
                  <p>Phone</p>
                  <p className="font-[100]">080 707 555-321</p>
                </div>
              </li>
              <li className="flex gap-[15px]">
                <img src={icon2} className="size-[16px]" />
                <div>
                  <p>Email</p>
                  <p className="font-[100]">demo@example.com</p>
                </div>
              </li>
              <li className="flex gap-[15px]">
                <img src={icon3} className="size-[16px]" />
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
      <div className="flex w-full justify-between text-white">
        <p>@2024 Techvio - All Right Reserved</p>
        <p>Terms & Condition | Privacy Policy</p>
      </div>
    </div>
  );
}
