import type { NextPage } from "next";
import HeroSection from "../components/hero-section";
import UtilityPanel from "../components/utility-panel";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import Downloads from "../components/downloads";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Subscribe from "../components/subscribe";
import FrameComponent from "../components/frame-component";

const HOMEPAGE: NextPage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-black overflow-hidden flex flex-col items-start justify-start pt-[63px] px-[5px] pb-[70px] box-border min-h-[9523px] leading-[normal] tracking-[normal] text-left text-6xl text-white font-lato">
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[91px] box-border max-w-full mq925:pb-[38px] mq925:box-border mq1400:pb-[59px] mq1400:box-border">
        <div className="h-[985px] w-[1869px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-black overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[38px] px-0 pb-0 box-border relative max-w-full mq925:h-auto">
          <HeroSection />
          <UtilityPanel />
        </div>
      </div>
      <div className="ml-[-703px] mb-[146.8px] w-[3274.8px] overflow-hidden flex flex-col items-start justify-start pt-[37px] px-[736px] pb-[1460.2px] box-border relative gap-[47px] max-w-[176%] shrink-0 mq925:gap-[23px] mq925:pt-5 mq925:px-[184px] mq925:pb-[617px] mq925:box-border mq1400:pt-6 mq1400:px-[368px] mq1400:pb-[949px] mq1400:box-border mq450:pl-5 mq450:pr-5 mq450:pb-[401px] mq450:box-border">
        <div className="relative capitalize font-light inline-block max-w-full z-[8] mq450:text-xl">
          most loved NFTs of the time
        </div>
        <FrameComponent5 />
        <FrameComponent4 />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[45px] pb-[52.3px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative capitalize font-light mq450:text-xl">
          most loved NFTs of the time
        </div>
      </div>
      <div className="w-[1732px] flex flex-row items-start justify-start pt-0 px-[45px] pb-[23px] box-border max-w-full text-center text-81xl text-dodgerblue-100 font-display-text-header-big mq1400:pl-[22px] mq1400:pr-[22px] mq1400:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1400:flex-wrap">
          <div className="h-[114.2px] w-[866px] relative capitalize font-medium inline-block shrink-0 max-w-full mq925:text-31xl mq450:text-11xl">
            <span>Quest/NFT</span>
            <span className="text-white"> games</span>
          </div>
          <div className="w-[172px] flex flex-col items-start justify-start pt-[79.7px] px-0 pb-0 box-border text-lg text-white">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="w-1 h-[22px] relative bg-darkmagenta-100">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkmagenta-100 hidden" />
                </div>
              </div>
              <div className="h-[43px] flex-1 relative">
                <div className="absolute top-[10px] left-[49px] capitalize font-medium inline-block min-w-[67px]">
                  view all
                </div>
                <div className="absolute top-[0px] left-[0px] bg-darkmagenta-200 box-border w-full h-full z-[1] border-[1px] border-solid border-darkmagenta-100" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <img
                  className="w-1 h-[22px] relative object-contain"
                  alt=""
                  src="/group-5@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <div className="w-[1731.3px] flex flex-row items-start justify-center pt-0 px-5 pb-[25px] box-border max-w-full text-center text-[80px] font-inter">
        <div className="w-[1327.3px] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(270deg,_#ff3b6a,_#ffaf36_34.17%,_#5991ff_60.17%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq925:text-21xl mq450:text-5xl">
          Swift Blockchain Revolution
        </div>
      </div>
      <div className="w-[1731.1px] flex flex-row items-start justify-center pt-0 px-5 pb-[95.5px] box-border max-w-full text-center text-9xl text-gray-200 font-inter">
        <div className="w-[1110.9px] relative font-light inline-block shrink-0 max-w-full mq450:text-3xl">
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run, or exercise to
          earn. Each step matters.
        </div>
      </div>
      <Downloads />
      <div className="w-[570px] flex flex-row items-start justify-center pt-0 px-5 pb-[47px] box-border max-w-full">
        <div className="relative capitalize font-light mq450:text-xl">
          most loved NFTs of the time
        </div>
      </div>
      <div className="w-[1297px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-21xl font-display-text-header-big">
        <div className="w-[713px] !m-[0] absolute bottom-[-39px] left-[120px] flex flex-row items-start justify-start pt-0 px-0 pb-[143px] box-border max-w-full">
          <div className="flex-1 relative capitalize inline-block max-w-full mq925:text-[32px] mq450:text-5xl">
            mini-games to level up your desired Identity on smartwatch
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[229px] box-border max-w-full text-center text-81xl text-dodgerblue-100 mq450:pb-[149px] mq450:box-border">
          <div className="w-[1157px] relative capitalize font-medium inline-block shrink-0 max-w-full mq925:text-31xl mq450:text-11xl">
            <span>{`collectibles `}</span>
            <span className="text-white">Marketplace</span>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="w-full h-[330px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-26px] rounded-381xl max-h-full w-[2053.8px] z-[2]"
          alt=""
          src="/rectangle-55.svg"
        />
        <img
          className="absolute top-[233.9px] left-[44.5px] rounded-381xl w-[1909.6px] h-[33.9px] z-[3]"
          alt=""
          src="/rectangle-56.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[417px] box-border max-w-full text-sm text-gray-100 font-inter mq925:pl-[104px] mq925:box-border mq1400:pl-52 mq1400:box-border mq450:pl-5 mq450:box-border">
        <div className="w-[882px] relative inline-block shrink-0 max-w-full z-[4]">
          <b className="font-inter">©</b>
          <span className="font-semibold whitespace-pre-wrap">
            {` Copyright © 2024 Incentives  Incentives - AI Automations and blockchain `}
          </span>
          <a
            className="text-[inherit]"
            href="mailto:sales@idea-engine.ai"
            target="_blank"
          >
            <span className="font-semibold whitespace-pre-wrap">
              <span className="[text-decoration:underline]">
                sales@idea-engine.ai
              </span>
            </span>
          </a>
        </div>
      </div>
      <Subscribe />
      <FrameComponent />
    </div>
  );
};

export default HOMEPAGE;
