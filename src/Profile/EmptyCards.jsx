import { Link, useNavigate } from "react-router";
import { ArrowDown, creditCard, plus } from "../assets/image/index.js";

const EmptyCards = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 pt-3 flex flex-col justify-between h-screen">
      <div className=" mx-auto px-2 w-[90%] rounded-[8px] flex-1 flex flex-col items-center justify-center text-center">
        {/* Header */}
        <div className="flex items-center gap-[40px] mb-6 w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-gray-700 cursor-pointer"
          >
            <img src={ArrowDown} alt="Back" className="object-contain" />
          </button>
          <p className="flex-1 text-[20px] font-medium text-center">
            Empty Cards
          </p>
        </div>

        {/* Content */}
        <img
          src={creditCard}
          alt="creditCard"
          className="w-[200px] object-contain mb-6"
        />
        <h3 className="mb-4 text-[24px] font-medium">
          Nothing to display here!
        </h3>
        <p className="text-[16px] text-[#6D7379]">
          Add your cards to make payment easier
        </p>
      </div>

      {/* Button */}
      <div className="md:px-[50px] px-0 mx-auto w-[90%] mb-6">
        <Link to="/profile/visa-version">
          <button className="cursor-pointer w-full bg-blue-600 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-3">
            <img src={plus} alt="plus" /> Add Card
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCards;
