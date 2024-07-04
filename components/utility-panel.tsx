import type { NextPage } from "next";

export type UtilityPanelType = {
  className?: string;
};

const UtilityPanel: NextPage<UtilityPanelType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1603px] !m-[0] absolute top-[0px] left-[546px] flex flex-row items-start justify-start max-w-full text-left text-lg text-white font-display-text-header-big ${className}`}
    >
      <img
        className="h-[1000px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-11-1@2x.png"
      />
      <div className="w-[604px] !m-[0] absolute top-[35px] left-[155px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-7 px-[71px] pb-[29px] box-border max-w-full z-[3]">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/background.svg"
        />
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq925:flex-wrap">
          <div className="relative uppercase font-semibold inline-block min-w-[120px]">
            White-paper
          </div>
          <div className="relative uppercase font-semibold inline-block min-w-[124px]">
            VISUAL NOVEL
          </div>
          <div className="relative uppercase font-semibold inline-block min-w-[118px]">
            INITIAL DEMO
          </div>
          <div className="self-stretch w-[118px] relative uppercase hidden">
            influencers
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityPanel;
