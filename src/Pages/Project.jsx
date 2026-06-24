import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBriefcase} from "react-icons/fa";
import '../Styles/Project.css'

import cineprime from '../assets/SkillsIcon/PojectIcon/cinePrimeImage.png'
import piggame from '../assets/SkillsIcon/PojectIcon/piggame.png'
import Bankist from '../assets/SkillsIcon/PojectIcon/bankist.png'
import MemoryVerse from '../assets/SkillsIcon/PojectIcon/memoryVerse.png'

const projects = [
  {
    title: "Cine Prime",
    image: cineprime,
    tech: "React • Node.js • MongoDB",
    github: "https://github.com/VivekGovindaraj/Js_Practice/tree/main/practice/CineFliX",
    live: "https://vivekcineprime.netlify.app/",
  },
  {
    title: "PIG Game",
    image: piggame,
    // tech: "React • Node.js • MongoDB",
    github    : "https://github.com/VivekGovindaraj/Js_Practice/tree/main/js/PIGGAME",
     live: "https://vivekspiggame.netlify.app/",

  },
  {
    title: "Bankist",
    image: Bankist,
    // tech: "React • Node.js • MongoDB",
    github    : "https://github.com/VivekGovindaraj/Bankist-App",
     live: "https://vivekgovindaraj.github.io/Bankist-App/",

  },
  {
    title: "Memory-Verse",
    image: MemoryVerse,
    // tech: "React • Node.js • MongoDB",
    github    : "https://github.com/VivekGovindaraj/Portfolio",
     live: "https://vivekgovindaraj.github.io/Memory-verse/",

  }
];
const Project = () => {
  return (
    <>
    <section id='project' className='px-6 md:px-10 lg:px-14 py-12 md:py-18 mt-0 lg:mt-6 card-block '>
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 text-sm text-gray-300 project-pill">
          <FaBriefcase />
          <span>PROJECTS</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-10">
          Explore My Projects
        </h2>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div  key={index} className=" group rounded-2xl bg-white/[0.03] backdrop-blur-lg
              border border-white/10
              overflow-hidden
              transition-all duration-300
              hover:border-green-500/40
              hover:-translate-y-2
            "
          >
        
            <div className="relative overflow-hidden p-4">
              <img  src={project.image} alt={project.title} 
              className=" w-full  h-[220px]  md:h-[280px] object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105 " />

          
              <div
                className="  absolute inset-4   rounded-[24px]  bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 " >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    hover:bg-green-500
                    hover:text-black
                    transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    hover:bg-green-500
                    hover:text-black
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>

              {/* <p className="mt-3 text-gray-400 text-sm md:text-base">
                {project.tech}
              </p> */}

              <div className=" flex justify-between items-center">
                <span className="text-green-500 text-sm">
                  View Project
                </span>

                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-white/5
                    flex items-center justify-center
                    transition
                    group-hover:bg-green-500
                    group-hover:text-black
                  "
                >
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
    </>
  );
};

export default Project