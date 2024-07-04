import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1792px] h-[1758px] !m-[0] absolute bottom-[603px] left-[-340px] bg-gray-600 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[329px] pb-[1227px] pr-0 pl-[340px] box-border max-w-full z-[4] text-left text-6xl text-white font-lato mq1400:h-auto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[130px] box-border max-w-full shrink-0">
        <div className="w-[1483px] flex flex-row items-start justify-start max-w-[113%] shrink-0">
          <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1400:flex-wrap">
            <div className="w-[711px] flex flex-col items-start justify-start gap-[47px] max-w-full">
              <div className="self-stretch relative capitalize font-light mq450:text-xl">
                Watch and follow celebrities to get the best collection of NFTs
              </div>
              <div className="w-[439px] relative text-81xl capitalize font-medium font-display-text-header-big text-center inline-block max-w-full mq925:text-31xl mq450:text-11xl">
                Roadmap
              </div>
            </div>
            <div className="w-[172px] flex flex-row items-start justify-start text-center text-lg font-display-text-header-big">
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="w-1 h-[22px] relative bg-darkmagenta-100">
                  <div className="absolute top-[0px] left-[0px] bg-darkmagenta-100 w-full h-full hidden" />
                </div>
              </div>
              <div className="h-[43px] flex-1 bg-darkmagenta-200 box-border flex flex-row items-start justify-start py-2.5 pr-[47px] pl-12 whitespace-nowrap border-[1px] border-solid border-darkmagenta-100">
                <div className="h-[43px] w-[164px] relative bg-darkmagenta-200 box-border hidden border-[1px] border-solid border-darkmagenta-100" />
                <div className="self-stretch flex-1 relative capitalize font-medium z-[1]">
                  view all
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
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
      <div className="w-[1659px] h-[1426px] relative max-w-[115%] shrink-0 mt-[-75px]">
        <img
          className="absolute top-[219px] left-[-88px] w-[1571px] h-[856px] overflow-hidden object-contain"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-22-1@2x.png"
        />
        <img
          className="absolute top-[760px] left-[-214px] w-[1241px] h-[666px] overflow-hidden object-contain z-[1]"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-23-1@2x.png"
        />
        <img
          className="absolute top-[104px] left-[-26px] w-[1089px] h-[615px] overflow-hidden object-contain z-[1]"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-1@2x.png"
        />
        <img
          className="absolute top-[687px] left-[539px] w-[1089px] h-[615px] overflow-hidden object-contain z-[2]"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[570px] w-[1089px] h-[615px] overflow-hidden object-cover z-[2]"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
