import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1850px] flex flex-row items-start justify-start pt-0 px-[45px] pb-[43px] box-border max-w-full text-left text-9xl text-white font-display-text-header-big mq925:pb-5 mq925:box-border mq1400:pl-[22px] mq1400:pr-[22px] mq1400:pb-7 mq1400:box-border ${className}`}
    >
      <div className="h-[1135px] flex-1 relative max-w-full">
        <div className="absolute top-[0px] left-[13px] w-[713px] flex flex-row items-start justify-start pt-0 px-0 pb-[173px] box-border max-w-full z-[2]">
          <div className="flex-1 relative capitalize inline-block max-w-full mq450:text-3xl">
            mini-games to level up your desired Identity on smartwatch
          </div>
        </div>
        <div className="absolute top-[29px] left-[0px] w-[1760px] h-[1106px]">
          <img
            className="absolute top-[50px] left-[0px] w-[612.8px] h-[914.9px] object-contain"
            alt=""
            src="/clip-path-group@2x.png"
          />
          <img
            className="absolute top-[46px] left-[952px] w-[808px] h-[927.4px] object-contain"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[254px] w-[1134px]">
            <img
              className="absolute top-[97px] left-[91px] w-[877px] h-[936px] z-[1]"
              alt=""
              src="/clip-path-group.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
              alt=""
              src="/mentor-3-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
