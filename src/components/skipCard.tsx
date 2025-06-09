import React from "react";
import type { Skip } from "../types/type";

interface SkipCardProps {
  data: Skip;
  choosenSkip: (skip: Skip) => void;
  selectedSkip?: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({
  data,
  choosenSkip,
  selectedSkip,
}) => {
  const handleClick = () => {
    choosenSkip(data);
  };
  return (
    <div
      className={`${selectedSkip?.id == data.id ? "border-[#0037C1]" : "border-[#2A2A2A]"} group relative rounded-lg border-2 p-4 md:p-6 transition-all hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer`}
    >
      <div className="relative">
        <img
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
          alt="4 Yard Skip"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {data.size} Yards
        </div>
        <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
        {data.size} Yard Skip
      </h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">
        {data.hire_period_days} day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
            £{data.price_before_vat}
          </span>
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`${selectedSkip?.id == data.id ? "bg-[#0037C1] hover:border-[#0037C1]" : "bg-[#2A2A2A] hover:bg-[#3A3A3A]"} w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white false`}
      >
        <span>Select This Skip</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-right w-4 h-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default SkipCard;
