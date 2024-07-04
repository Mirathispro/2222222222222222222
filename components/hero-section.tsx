import type { NextPage } from "next";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-26px] w-[1933px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-center pt-0 px-5 pb-[286px] box-border relative shrink-0 max-w-[104%] text-left text-16xl text-white font-display-text-header-big mq925:pb-[121px] mq925:box-border mq1400:pb-[186px] mq1400:box-border ${className}`}
    >
      <div className="w-[1675px] flex flex-col items-start justify-start gap-[100px] max-w-full mq925:gap-[50px] mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq925:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-[93px] w-[93px] relative object-cover"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <div className="relative uppercase font-medium z-[1] ml-[-5px] mq925:text-9xl mq450:text-2xl">
              IDEA-ENGINE
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-5 px-0 gap-[30px] text-center text-lg">
            <div className="flex flex-row items-center justify-center">
              <div className="h-[43px] w-3.5 relative">
                <img
                  className="absolute top-[0px] left-[6px] w-2 h-[43px]"
                  alt=""
                  src="/rectangle-8.svg"
                />
                <div className="absolute top-[10px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(89,_145,_255,_0.8)_30%,_rgba(53,_87,_153,_0.6))] w-1 h-[22px]" />
              </div>
              <div className="[background:radial-gradient(50%_50%_at_50%_50%,_rgba(89,_145,_255,_0.8)_30%,_rgba(53,_87,_153,_0.6))] flex flex-row items-center justify-center py-2.5 px-4 whitespace-nowrap">
                <div className="relative capitalize font-medium inline-block min-w-[128px]">
                  Connect Wallet
                </div>
              </div>
              <img
                className="self-stretch w-3.5 relative max-h-full object-contain min-h-[43px]"
                alt=""
                src="/group-5@2x.png"
              />
            </div>
            <img
              className="h-10 w-10 relative rounded-[50%] object-contain"
              alt=""
              src="/user-profile@2x.png"
            />
          </div>
        </div>
        <div className="w-[713px] flex flex-row items-start justify-start max-w-full text-45xl mq925:gap-[29px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[120px] max-w-full mq925:gap-[60px] mq450:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq925:gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
                <div className="relative capitalize font-semibold mq925:text-32xl mq450:text-19xl">
                  <p className="m-0">AI - WEARABLE cRYPTO</p>
                  <p className="m-0">cOLLECTIBLES eCOSYSTEM</p>
                </div>
              </div>
              <div className="w-[701px] flex flex-row items-start justify-start max-w-full text-6xl font-lato">
                <div className="relative capitalize font-light mq450:text-xl">
                  Gamified DePin + AI companion System on wearable
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[40px] max-w-full text-center text-3xl text-black mq925:flex-wrap mq925:gap-[20px]">
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start">
                <div className="flex flex-row items-end justify-start gap-[2.6px] shrink-0">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11.9px]">
                    <div className="w-[5.3px] h-[44.6px] relative bg-gray-200 shrink-0" />
                  </div>
                  <img
                    className="h-[69.6px] w-[10.5px] relative shrink-0"
                    alt=""
                    src="/rectangle-81.svg"
                  />
                </div>
                <div className="bg-gray-200 flex flex-row items-start justify-start py-[21px] px-[51px] shrink-0 whitespace-nowrap z-[1] ml-[-0.4px]">
                  <div className="relative capitalize font-medium inline-block min-w-[122px]">
                    Private Sale
                  </div>
                </div>
                <img
                  className="self-stretch w-[18.4px] relative max-h-full object-contain min-h-[70px] shrink-0 z-[2] ml-[-0.4px]"
                  alt=""
                  src="/group-5@2x.png"
                />
              </div>
              <div className="w-56 flex flex-row items-start justify-between pt-[14.5px] px-0 pb-[13.2px] box-border relative gap-[20px] text-white">
                <div className="h-[42.3px] w-[4.6px] relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dodgerblue-100" />
                </div>
                <div className="h-full w-[calc(100%_-_9.2px)] absolute !m-[0] top-[0px] right-[4.2px] bottom-[0px] left-[5px] bg-darkmagenta-200 box-border border-[1px] border-solid border-dodgerblue-100" />
                <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                  <div className="relative capitalize font-medium inline-block min-w-[92px] z-[1] mq450:text-lg">
                    Whitelist
                  </div>
                </div>
                <img
                  className="self-stretch w-[4.6px] relative max-h-full object-contain min-h-[42px] z-[1]"
                  alt=""
                  src="/group-5@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[317px] w-[1920px] hidden flex-col items-start justify-start max-w-full z-[2]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/milky-way.svg"
        />
      </div>
      <div className="h-[74px] w-[74px] !m-[0] absolute right-[40px] bottom-[70px] flex flex-row items-start justify-start z-[3]">
        <div className="self-stretch flex-1 relative [backdrop-filter:blur(20px)] rounded-[50%] [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))]" />
        <div className="h-[50px] w-[12.5px] absolute !m-[0] top-[11px] right-[25.5px] z-[1]">
          <div className="absolute h-[102%] w-[16%] top-[2%] right-[73.6%] bottom-[-4%] left-[10.4%] box-border border-r-[2px] border-solid border-white" />
          <img
            className="absolute h-[35%] w-full top-[0%] right-[0%] bottom-[65%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
