import React from 'react'
import { motion } from "motion/react";


export default function Home() {
  return (
    <motion.div
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}

    className=" flex sm:flex-col sm:justify-c sm:items-center justify-between h-2/3 pl-40 pr-40 text-justify sm:h-full">
      <div className=" w-96 sm: flex flex-col items-center">
        <h1 className="text-gray-300  uppercase tracking-wider text-3xl font-condenseda font-light">
          So, you want to travel to
        </h1>
        <h2 className="text-huge uppercase tracking-widest font-laga text-white h-fit">Space
        </h2>
        <p className=" text-custom text-gray-400  ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className=" flex w-48 items-center justify-center ">
        <span className="text-3xl w-40 h-40 bg-white rounded-full flex items-center justify-center font-laga font-extralight mb-9 ">
          Explore
        </span>
      </div>
    </motion.div>
  );
}
