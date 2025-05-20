import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import logo from "../assets/raviKumarLogo.webp";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        {/* -----------// left --------------*/}
        <div className="flex flex-shrink-0 items-center">
          <div class="flex items-center justify-center h-40 w-20 ">
            <h1 class=" text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              RY
            </h1>
          </div>
        </div>

        {/* -----------// right --------------*/}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500"
            whileHover={{
              backgroundColor: "##010618",
              color: "light-blue",
              scale: 1.3,
            }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{
              backgroundColor: "#010618",
              color: "white",
              scale: 1.3,
            }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-400"
            whileHover={{
              backgroundColor: "#010618",
              color: "dark-pink",
              scale: 1.3,
            }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400"
            whileHover={{
              backgroundColor: "black",
              color: "light-blue",
              scale: 1.3,
            }}
          >
            <FaTwitter />
          </motion.a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
