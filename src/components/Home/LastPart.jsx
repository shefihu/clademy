import React from "react";
import shape1 from "../../assets/images/shape_1.png";
import shape2 from "../../assets/images/shape_2.png";
import shape3 from "../../assets/images/line_shape_2.png";
const LastPart = () => {
  return (
    <div>
      <div className="w-full h-80 bg-[#fcbb3b] relative">
        <div className="absolute lg:top-20 lg:left-10 top-2 left-4">
          <img src={shape1} alt="" className="lg:w-full w-12" />
        </div>
        <div className="absolute lg:top-32 right-2 top-60 lg:right-10">
          <img src={shape2} alt="" className="lg:w-full w-14" />
        </div>
        {/* <div className="absolute -top-14 right-60">
          <img src={shape3} alt="" />
        </div> */}
        <div className="w-full h-full flex flex-col px-1 items-center space-y-5 justify-center">
          <h1 className="text-[40px] text-center font-semibold">
            Ready to kick start a career?
          </h1>
          <a
            href="/register"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastPart;
