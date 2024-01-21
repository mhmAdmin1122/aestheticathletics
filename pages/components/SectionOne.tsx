import Image from "next/image";
import picSection from '@/public/img/sectionPic1.jpg'

const SectionOne = () => {
  return (
    <div className="relative sectionOne">
      <div className="absolute flex items-start h-[160px] w-[90px]">
        <div className="bg-[#44e02fc7] w-[30px] rounded-b-[40px] h-full"></div>
        <div className="bg-[#ff0000b6] w-[30px] rounded-b-[40px] h-[140px]"></div>
        <div className="bg-[#0000ff98] w-[30px] rounded-b-[40px] h-[120px]"></div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-[60%] pl-20">
          <h2 className="text-[18px] text-[#adadad] font-medium">WHO WE ARE</h2>
          <h1 className="text-[50px] font-bold text-[#000]">CERTIFIED PERSONAL TRAINERS</h1>
          <p className="text-[18px] text-[#4b4b4b] w-[70%]">
            Here to inspire and motivate individuals to achieve their preferred
            aesthetic and fitness goals.
          </p>
        </div>
        <div className="w-[40%]">
            <Image src={picSection} alt="section-pic" className="secpic"/>
        </div>
      </div>
      <div className="absolute bottom-0 right-[40%] flex h-[160px] w-[90px] items-end">
        <div className="bg-[#0000ff] w-[30px] rounded-t-[40px] h-[120px]"></div>
        <div className="bg-[#ff0000] w-[30px] rounded-t-[40px] h-[140px]"></div>
        <div className="bg-[#44e02f] w-[30px] rounded-t-[40px] h-full"></div>
      </div>
    </div>
  );
};

export default SectionOne;
