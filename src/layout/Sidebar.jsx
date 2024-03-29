import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import NProgress from "nprogress";
const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarVariant = {
    open: {
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
    closed: {
      y: "-120%",
      transition: {
        duration: 0.45,
      },
    },
  };

  const listvariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const itemvariants = {
    open: {
      // x: 0,
      y: [0, 20, 0],
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div>
      {" "}
      <motion.aside
        animate={isSidebarOpen ? "open" : "closed"}
        // initial={"closed"}
        variants={sidebarVariant}
        className={`fixed top-0 bottom-0 right-0 w-[100vw] h-[100vh] z-[60] max-w-[400px]  bg-white shadow-lg overflow-hidden md:hidden }`}
      >
        <div className="py-[2rem] flex flex-col items-center justify-center w-full h-full">
          <button
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            className="flex top-10 absolute justify-end w-full mb-[4rem] pr-[2rem]"
          >
            <AiOutlineClose className="w-6 h-6 text-black" />
          </button>
          <motion.nav>
            <motion.ul className="" variants={listvariants}>
              <motion.li
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                variants={itemvariants}
                className={`relative w-full mb-[1.5rem] ${
                  location.pathname === "/about" ? "activeLink" : ""
                }`}
              >
                <Link to={"/about"}>
                  <a className="text-[#000] text-[1.3rem] tracking-[2.7px] uppercase">
                    <span className="text-black  mr-[11px]">01</span> About us
                  </a>
                </Link>
              </motion.li>

              <motion.li
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                variants={itemvariants}
                className={`relative w-full mb-[1.5rem] ${
                  location.pathname === "/about" ? "activeLink" : ""
                }`}
              >
                <Link to={`/category/${"education"}`}>
                  <a className="text-[#000] text-[1.3rem] tracking-[2.7px] uppercase">
                    <span className="text-black  mr-[11px]">03</span> Contact us
                  </a>
                </Link>
              </motion.li>
              <motion.li
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                variants={itemvariants}
                className={`relative w-full mb-[1.5rem] ${
                  location.pathname === "/about" ? "activeLink" : ""
                }`}
              >
                <Link to={"/quiz"}>
                  <a className="text-[#000] text-[1.3rem] tracking-[2.7px] uppercase">
                    <span className="text-black  mr-[11px]">04</span> Resources
                  </a>
                </Link>
              </motion.li>
              <motion.li
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                variants={itemvariants}
                className={`relative w-full flex justify-center mt-[5.5rem] ${
                  location.pathname === "/" ? "activeLink" : ""
                }`}
              >
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
              </motion.li>
            </motion.ul>
            <motion.div className="w-full  h-10 border-t border-t-gray-200"></motion.div>
          </motion.nav>
        </div>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
