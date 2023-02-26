import React from "react";

const OnboardingLayout = ({ children }) => {
  return (
    <>
      <div className="h-full w-full relative lg:flex hidden items-center bg-[#202329] pr-10">
        <div className="w-full h-screen ">
          <a
            href="/"
            className="text-white font-bold absolute top-10 text-[30px] left-4"
          >
            clademy
          </a>
          {/* <img
            src={farmersMarket}
            alt=""
            className="w-full object-cover fixed bottom-0 "
          /> */}
        </div>
        {/* <div className="z-20 w-full fixed gong top-[50%]   flex justify-center ">
          <img src={backLogo} alt="" className="w-[70%]  object-cover " />
        </div> */}
        <div className=" w-full h-full relative">
          <div className="w-[400px] z-30 h-[86%] top-16 bg-[#F5F5F5]/70 rounded-[14px] absolute right-32"></div>

          {children}
        </div>
      </div>
      <div className="w-full h-[40rem] relative lg:hidden flex ">
        <div className="w-full relative h-full ">
          <div className="w-full relative op-0 h-[300px] bg-[#202329]">
            <a
              href="/"
              className="text-white font-bold fixed top-5 text-[25px] left-4"
            >
              clademy
            </a>
            {/* <img
              src={farmersMarket}
              alt=""
              className="w-full fixed object-cover top-0 "
            /> */}
          </div>
          {/* <div className=" w-full fixed gong top-32   flex justify-center ">
            <img src={backLogo} alt="" className="w-[70%]  object-cover " />
          </div> */}
          <div className="w-full h- absolute overflow-hidden  top-52 rounded-t-[15px] bg-[#F5F5F5]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingLayout;
