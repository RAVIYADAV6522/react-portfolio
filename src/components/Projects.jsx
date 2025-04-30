import React from "react";
import { PROJECTS } from "../constants";
function Projects() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex items-center justify-center">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="mb-4 text-stone-400 ">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded shadow-[0_0_15px_rgba(255,255,255,0.2)] p-2 text-sm font-medium  bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent "
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
                <div className="mt-4 flex items-center justify-center  gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-4 py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
