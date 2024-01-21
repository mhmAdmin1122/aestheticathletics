import React from "react";

const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="hero-banner w-full">
        <h1 className="text-[66px] font-bold w-[60%]">LOOK GOOD, MOVE WELL</h1>
        <p className="text-[18px] font-normal text-[#DBDBDB] w-[30%] pb-5">
          {"“"}Personalized fitness programming to help you create a sustainable
          healthy lifestyle{"”"}
        </p>
        <button className="border-[1px] border-white rounded-sm px-4 py-2 text-[22px] font-bold transition-all ease-in-out duration-1000 hover:bg-[#fff] hover:text-[#000]">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
