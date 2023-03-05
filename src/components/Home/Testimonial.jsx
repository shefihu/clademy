import React, { useEffect, useState } from "react";
import testimonial from "../../assets/images/testimonial.jpg";
import emma from "../../assets/images/emma.jpg";
import cynthis from "../../assets/images/cynthis.jpg";
import chat from "../../assets/images/icon_chat.png";
import { motion } from "framer-motion";
const Testimonial = () => {
  const data = [
    {
      id: 1,
      text: "We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out",
      name: "Barry Allen",
      job: "FullStack Developer",
      img: emma,
    },
    {
      id: 2,
      text: "We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out",
      name: "John Allen",
      job: "Backend Developer",
      img: testimonial,
    },
    {
      id: 3,
      text: "We could actually read something and then practice it right away and get feedback on it. The other platforms were more theoretical and expected you to go figure out",
      name: "Grant Allen",
      job: "Frontend Developer",
      img: cynthis,
    },
  ];
  const [index, setIndex] = useState(0);
  const first = data?.slice(0, 4);
  const movie = first[index];
  const setLimit = (number) => {
    if (number > first?.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = first?.length - 1;
    }
    return number;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(setLimit(index + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);
  const variants = {
    notMove: { opacity: 0 },
    moves: {
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
      opacity: 1,
    },
  };
  return (
    <div>
      <div className="w-full mb-20  max-w-[80%] bg-[#f0f3ff] mx-auto h-full py-20">
        <div className="w-full h-full  flex lg:flex-row flex-col items-center px-10 justify-between">
          <div key={index} className="">
            <motion.img
              variants={variants}
              initial={"notMove"}
              animate={"moves"}
              src={movie?.img}
              alt=""
              className="w-[300px] h-[334px] object-cover"
            />
          </div>

          <div className="lg:max-w-[50%] lg:mt-0 mt-4 max-w-full flex flex-col lg:items-start items-center  space-y-6">
            <h1 className="lg:text-[33px] text-[24px] font-[500]">
              Learner <span className="focus-text">Stories</span>
            </h1>
            <div>
              <img src={chat} alt="" />
            </div>
            <motion.p className="font-[600] lg:text-left text-center">
              {movie.text}
            </motion.p>
            <div>
              <motion.h4 className="text-[22px] font-[600]">
                {movie.name}
              </motion.h4>
              <motion.p>{movie.job}r</motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
