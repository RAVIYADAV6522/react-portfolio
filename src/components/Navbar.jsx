import React from "react";
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
          <a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
