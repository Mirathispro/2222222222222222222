import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1740px] flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-81xl text-dodgerblue-100 font-display-text-header-big mq925:flex-wrap mq1400:flex-wrap mq450:flex-wrap mq1875:flex-wrap ${className}`}
    >
      <div className="w-[943px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch relative capitalize font-medium z-[8] mq925:text-31xl mq450:text-11xl">
          <span>Gamified</span>
          <span className="text-white"> DePin + AI</span>
        </div>
        <div className="w-[799px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-left text-9xl text-white">
          <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[66px] box-border max-w-full z-[8]">
            <div className="flex-1 relative capitalize inline-block max-w-full mq450:text-3xl">
              mini-games to level up your desired Identity on smartwatch
            </div>
          </div>
        </div>
      </div>
      <div className="w-[164px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border text-lg text-white">
        <div className="self-stretch h-[43px] relative">
          <div className="absolute top-[10px] left-[49px] capitalize font-medium inline-block min-w-[67px] z-[8]">
            view all
          </div>
          <div className="absolute top-[0px] left-[0px] bg-darkmagenta-200 box-border w-full h-full z-[9] border-[1px] border-solid border-darkmagenta-100" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
