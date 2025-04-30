import React from "react";
// import profilePic from "../assets/raviyadav.webp";
import profilePic2 from "../assets/raviyadav2.webp";
import { HERO_CONTENT } from "../constants";
const Hero = () => {
  return (
    <>
      <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8  ">
              <img
                src={profilePic2}
                alt="Ravi Yadav"
                className="border rounded-3xl border-white"
              ></img>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-center mt-10">
              <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Ravi Yadav
              </h2>
              <span className="bg-gradient-to-r from-stone-200 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                Front-End Developer
              </span>
              <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {HERO_CONTENT}
              </p>
              <a
                href="/resume.pdf"
                target="blank"
                rel="noopener noreferrer"
                download
                className=" rounded-full p-4 text-sm  mb-10 text-white border border-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
