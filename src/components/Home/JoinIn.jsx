import React from "react";
import count from "../../assets/images/count1.png";
const JoinIn = () => {
  return (
    <div className="py-16">
      <div className="w-full h-[219px] relative flex-wrap md:flex overflow-hidden hidden justify-center items-center bg-[#3a10e5]">
        <div className="absolute md:-right-10 lg:right-10 lg:top-6">
          <img src={count} alt="" />
        </div>
        <div className="w-full max-w-[80%]  h-[125px]">
          <div className="w-full items-center flex justify-between h-full">
            <div className=" w-[40%]">
              <h1 className="xl:text-[36px]  text-[29px] text-white  font-semibold">
                Join in on <br /> something big
              </h1>
            </div>
            <div className=" w-[58%] h-full items-center flex justify-between">
              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  14M
                </h1>
                <p className="xl:text-[24px]">Learners</p>
              </div>

              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  55+
                </h1>
                <p className="xl:text-[24px]">Countries</p>
              </div>

              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  1.0B
                </h1>
                <p className="xl:text-[24px]">Code submits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[219px] py-3 h-full relative flex-wrap overflow-hidden md:hidden flex  justify-center items-center bg-[#3a10e5]">
        <div className="absolute top-20 -right-14">
          <img src={count} alt="" />
        </div>
        <div className="w-full  ">
          <div className="w-full items-center flex  flex-col justify-center h-full">
            <div className=" w-full">
              <h1 className="xl:text-[36px]  text-[29px] text-white text-center font-semibold">
                Join in on <br /> something big
              </h1>
            </div>
            <div className=" w-full space-y-4 h-full mt-3 items-center flex flex-col justify-between">
              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  14M
                </h1>
                <p className="xl:text-[24px]">Learners</p>
              </div>

              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  55+
                </h1>
                <p className="xl:text-[24px]">Countries</p>
              </div>

              <div className="w-[32%] text-white font-semibold text-center ">
                <h1 className="xl:text-[44px] lg:text-[38px] text-[35px]">
                  1.0B
                </h1>
                <p className="xl:text-[24px]">Code submits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinIn;
