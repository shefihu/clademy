import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { GreenLogo } from "../../assets/icons/icons";
// import logo from "../../assets/images/accredit.png";
// import dev from "../../assets/icons/dev.png";
const Footer = () => {
  return (
    <div>
      <div className="w-full lg:h-[20rem] bg-black py-6 text-white">
        <div className="max-w-[90%] w-full  mx-auto h-full md:flex-row flex-col flex lg:justify-between lg:items-center">
          <div className="md:w-[35%] space-y-5">
            {/* <img src={logo} alt="" /> */}
            {/* <GreenLogo /> */}
            <h1 className="text-2xl font-bold">clademy</h1>
            <p className="text-[16px] text-white">
              Not everyone can afford to quit their job to learn full-time.
              We’re here to make coding more flexible and accessible
            </p>
            <div className="flex gap-x-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/shefihu"
                className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
              >
                <AiFillGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shefiu-balogun-726a8a240/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Shefihuuu"
                target="_blank"
                rel="noreferrer"
                className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
              >
                <AiOutlineTwitter className="w-5 h-5" />
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/shefihu"
                className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
              >
                <img src={dev} alt="" className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <div className="grid gap-10 mt-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-x-20">
            <div>
              <h5 className="text-white text-[14px]">GET STARTED</h5>
              <ul className="mt-3 space-y-2">
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-[14px]">COMPANY</h5>
              <ul className="mt-3 space-y-2">
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-[14px]">HELP</h5>
              <ul className="mt-3 space-y-2">
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
                <li className="text-[16px] font-[400]">Link one link</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
