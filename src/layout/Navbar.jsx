import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import dot from "../assets/images/navdot.png";
import shape1 from "../assets/images/shape1.png";
import { NavLink, useNavigate } from "react-router-dom";
import NProgress from "nprogress";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const activeLink = "text-[#1a73e8] font-bold ";
  const normalLink = "   ";
  const navigate = useNavigate();
  return (
    <div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <header
        className={`w-full h-[4rem] mt-4  flex  fixed top-0 z-50 transition-all  ${
          isScrolled && " "
        }`}
      >
        <div className="w-full lg:hidden justify-between items-center flex px-4">
          <h1 className="text-2xl font-bold">clademy</h1>
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-[50px] h-[50px] lg:hidden flex justify-center items-center rounded-full bg-white/80 backdrop-blur-md drop-shadow-md "
          >
            <BiMenu className="w-8 h-8" />
          </div>
        </div>
        <div className="w-full xl:max-w-[60%] lg:max-w-[70%] relative px-7 h-full overflow-hidden items-center rounded-full bg-white/80 backdrop-blur-md drop-shadow-md border-gray-300 border md:flex hidden justify-between mx-auto">
          <div className="absolute w-[5%] -z-10 right-0 bottom-0">
            <img src={dot} alt="" />
          </div>
          <div className="absolute w-[3%] -z-10 left-4 top-1">
            <img src={shape1} alt="" />
          </div>
          <div className="w-[20%] ">
            <h1 className="text-2xl font-bold">clademy</h1>
          </div>
          <div className="w-[58%]  h-full">
            <ul className="w-full h-full space-x-8 flex items-center">
              <li className="text-base font-semibold">
                <NavLink>About us</NavLink>
              </li>
              <li className="text-base font-semibold">
                <NavLink>Contact us</NavLink>
              </li>
              <li className="text-base font-semibold">
                <NavLink>Resources</NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <Button
              className="bg-black "
              onClick={function () {
                NProgress.start();
                setTimeout(() => {
                  NProgress.done();
                  navigate("/register");
                }, 3000);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
