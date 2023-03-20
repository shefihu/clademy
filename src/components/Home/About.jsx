import { Button } from "@material-tailwind/react";
import React from "react";
import shape1 from "../../assets/images/shape_1.png";
import shape2 from "../../assets/images/shape_2.png";
import shape3 from "../../assets/images/line_shape_2.png";
const About = () => {
  return (
    <div>
      <div className="w-full h-full md:px-10 px-4 pb-6 mt-14">
        <div className="w-full h-[30rem] max-w-[80rem] lg:flex hidden justify-center overflow-hidden items-center mx-auto bg-[#f0f3ff] relative px-10">
          <div className="absolute top-20 left-10">
            <img src={shape1} alt="" />
          </div>
          <div className="absolute top-40 right-10">
            <img src={shape2} alt="" />
          </div>
          <div className="absolute -top-14 right-60">
            <img src={shape3} alt="" />
          </div>
          <div className="w-[70%]  h-[15rem] flex justify-center items-center flex-col space-y-10">
            <h1 className="text-[42px] leading-[1.1] font-bold text-center">
              Explore different classroms and gain first class knowledge
            </h1>{" "}
            <a
              href="/register"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
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
                  class="w-5 h-5 text-green-400"
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
        <div className="w-full md:h-[30rem]  h-[21rem] relative overflow-hidden  lg:hidden flex justify-center items-center mx-auto bg-[#f0f3ff] px-">
          <div className="absolute w-[16%]  top-60 left-6">
            <img src={shape1} alt="" />
          </div>
          <div className="absolute top-40 w-[16%]  right-5">
            <img src={shape2} alt="" />
          </div>
          <div className="absolute w-[20%] -top-14 right-20">
            <img src={shape3} alt="" />
          </div>
          <div className="w-full h-[15rem] flex justify-center items-center flex-col space-y-10">
            <h1 className="md:text-[42px] text-[26px] leading-[1.1] font-bold text-center">
              Explore different classroms and gain first class knowledge
            </h1>{" "}
            <a
              href="/register"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
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
                  class="w-5 h-5 text-green-400"
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
    </div>
  );
};

export default About;
