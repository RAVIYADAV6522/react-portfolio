import React from "react";
import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Tech-Stack
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="p-4"
          whileHover={{
            scale: 1.5,
          }}
        >
          <FaHtml5 className="text-7xl text-orange-500" />
          <p>Html</p>
        </motion.div>

        <motion.div
          className="p-4"
          whileHover={{
            scale: 1.5,
          }}
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
          <p>Css</p>
        </motion.div>

        <motion.div
          className="p-4"
          whileHover={{
            scale: 1.5,
          }}
        >
          <FaJsSquare className="text-7xl text-yellow-400" />
          <p>Javascript</p>
        </motion.div>

        <motion.div
          className="p-4"
          whileHover={{
            scale: 1.5,
          }}
        >
          <SiTailwindcss className="text-7xl text-sky-400" />
          <p>Tailwind</p>
        </motion.div>

        <motion.div
          className="p-4"
          whileHover={{
            scale: 1.5,
          }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p>React</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
