import type { NextPage } from "next";

export type SubscribeType = {
  className?: string;
};

const Subscribe: NextPage<SubscribeType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute right-[0px] bottom-[153px] left-[0px] flex flex-col items-start justify-start pt-[191px] pb-[32.4px] pr-[275px] pl-[553px] box-border gap-[104.1px] max-w-full z-[3] text-center text-45xl text-mintcream font-display-text-header-big mq925:gap-[26px] mq925:pl-[138px] mq925:pr-[68px] mq925:box-border mq1400:gap-[52px] mq1400:pl-[276px] mq1400:pr-[137px] mq1400:box-border ${className}`}
    >
      <div className="w-[819px] flex flex-col items-start justify-start gap-[12.3px] max-w-full z-[1]">
        <b className="self-stretch relative leading-[130px] shrink-0 mq925:text-32xl mq925:leading-[104px] mq450:text-19xl mq450:leading-[78px]">
          Join Whitelist
        </b>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[69px] box-border max-w-full text-left text-5xl text-lightslategray font-lato mq925:pl-[34px] mq925:pr-[34px] mq925:box-border">
          <div className="flex-1 rounded-mini box-border flex flex-row items-start justify-end pt-[5px] px-2.5 pb-1.5 shrink-0 max-w-full border-[1px] border-solid border-dodgerblue-100">
            <div className="h-24 w-[680px] relative rounded-mini box-border hidden max-w-full border-[1px] border-solid border-dodgerblue-100" />
            <div className="w-[617px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq925:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[23.3px] px-0 pb-0">
                <div className="relative leading-[36px] whitespace-nowrap mq450:text-lgi mq450:leading-[28px]">
                  info@gmail.com
                </div>
              </div>
              <div className="w-[90px] rounded-mini bg-dodgerblue-100 flex flex-col items-start justify-start py-[35px] px-5 box-border">
                <img
                  className="self-stretch h-[12.5px] relative max-w-full overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/arrow@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/pic@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left text-base text-white font-arial">
        <div className="w-[1005.8px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1400:flex-wrap">
          <div className="w-[377px] flex flex-col items-start justify-start pt-[13.6px] px-0 pb-0 box-border max-w-full text-gray-500 font-abel">
            <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mq925:flex-wrap mq450:gap-[17px]">
              <div className="flex-1 relative inline-block min-w-[73px]">
                WHITE-PAPAER
              </div>
              <div className="w-[101px] relative inline-block shrink-0">
                VISUAL NOVEL
              </div>
              <div className="w-[91px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative">INITIAL DEMO</div>
              </div>
            </div>
          </div>
          <div className="h-[54.2px] w-[278px] relative">
            <div className="absolute top-[14.7px] left-[0px] inline-block w-[72.6px] h-[20.3px] min-w-[72.6px]">
              Follow us
            </div>
            <div className="absolute top-[0px] left-[42.4px] w-[235.6px] h-[54.2px] z-[1]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[54.6px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
              <div className="absolute top-[14.4px] left-[0px] w-[11.3px] h-[24.6px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[16px] [transform:scale(6.31)]"
                  alt=""
                  src="/group86.svg"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[119.5px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
              <div className="absolute top-[17.6px] left-[57.5px] w-[19.2px] h-[20.7px] z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[0px] top-[16px] [transform:scale(4.125)]"
                  alt=""
                  src="/group87.svg"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[184.3px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
              <div className="absolute top-[16px] left-[118.6px] w-[18.4px] h-[20.8px] z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[0px] top-[16px] [transform:scale(4.261)]"
                  alt=""
                  src="/group-72.svg"
                />
              </div>
            </div>
          </div>
          <div className="shadow-[0px_16px_30px_#003861] rounded-4xl-5 [background:linear-gradient(65.84deg,_#00c3fd,_#0194fe)] flex flex-row items-start justify-start pt-[17px] pb-[16.9px] pr-7 pl-9 whitespace-nowrap">
            <div className="h-[54.2px] w-[185.8px] relative shadow-[0px_16px_30px_#003861] rounded-4xl-5 [background:linear-gradient(65.84deg,_#00c3fd,_#0194fe)] hidden" />
            <b className="relative inline-block min-w-[120.7px] z-[1]">
              Connect wallet
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
