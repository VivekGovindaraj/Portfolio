import React from 'react'
import '../Styles/Skills.css'

const skills = [
  { name: "HTML 5", level: 90, icon: "../../src/assets/SkillsIcon/html.png" },
  { name: "CSS 3", level: 85, icon: "../../src/assets/SkillsIcon/css-3.png" },
  { name: "Bootstrap 5", level: 85, icon: "../../src/assets/SkillsIcon/bootstrap.png" },
  { name: "JavaScript", level: 75, icon: "../../src/assets/SkillsIcon/js.png" },
  { name: "JQuery", level: 60, icon: "../../src/assets/SkillsIcon/Jquery.png" },
  { name: "React", level: 60, icon: "../../src/assets/SkillsIcon/React.png" },
  { name: "Node.js", level: 50, icon: "../../src/assets/SkillsIcon/Node.png" },
  { name: "Express.js", level: 60, icon: "../../src/assets/SkillsIcon/Express-js.png" },
  { name: "MongoDB", level: 50, icon: "../../src/assets/SkillsIcon/MongoDB.png" }
];

const tools = [
  { name: "Git", level: 85, icon: "../../src/assets/SkillsIcon/git.png" },
  { name: "Git Lab", level: 75, icon: "../../src/assets/SkillsIcon/github.png" },
  { name: "Git Hub", level: 75 , icon: "../../src/assets/SkillsIcon/gitlab.png"},
  { name: "VS Code", level: 90 , icon: "../../src/assets/SkillsIcon/VSCode.png"},
  { name: "Figma", level: 70, icon: "../../src/assets/SkillsIcon/figma.png" },
  { name: "ChatGPT", level: 50, icon: "../../src/assets/SkillsIcon/chatgpt.png" },
  { name: "Adobe Express", level: 50, icon: "../../src/assets/SkillsIcon/Adobe_Express_logo.png" },
];



const Skills = () => {
  return (
    <section className='px-6 md:px-10 lg:px-14 py-12 md:py-20 card-block  mt-6'>
    

      {/* CORE SKILLS*/}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Technical Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>

        {

          skills.map((skill,index) => (
            
              <div key={index} className='glass-card p-4 sm:p-5 md:p-6 rounded-2xl w-full transition duration-300'>
                <div className='flex items-center justify-between mb-4'>

                  <div className='flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg'>
                    <img src={skill.icon} alt="" className='w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:w-8 object-contain'/>
                    {skill.name}
                  </div>
                  <span className='text-xs sm:text-sm text-gray-300 border px-3 py-1 rounded-md'>
                   {skill.level}%
                  </span>

                </div>

                <div className='w-full h-1 sm:h-1 bg-[#2a2a2a] rounded-full overflow-hidden mt-6'>

                  <div className='h-full  bg-green-500 rounded-full progress-glow' style={{width:`${skill.level}%`}} ></div>
                </div>

              </div>

          

          )
          )
        }
       
       </div>
       
      </div>

      {/* ================= TOOL STACK ================= */}
      
      <div className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Tool Stack
      </h2>


      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8'>

        {tools.map((tool,index) => (

       

        <div key={index} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center transition duration-300">

          <div className='relative w-30 h-30 sm:w-24 sm:h-24 md:w-28 md:h-28'>
           <svg className="w-full h-full transform -rotate-90">
                {/* Background */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="#2a2a2a"
                  strokeWidth="4"
                  fill="none"
                />

                {/* Progress */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="#22c55e"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={251}
                  strokeDashoffset={
                    251 - (251 * tool.level) / 100
                  }
                  strokeLinecap="round"
                  className="ring-glow"
                />
              </svg>
              
         

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img src={tool.icon} alt={tool.name} className="w-8 h-8 sm:w-8 sm:h-8  md:w-8 md:h-8 object-contain" />
              <span className="text-[10px]  text-gray-400 mt-2">
                {tool.level}%
              </span>
            </div>
           </div>
          

           <p className="mt-4 text-sm text-gray-300">
              {tool.name}
            </p>

        </div>
         ))}

      </div>

    
    </div>
    
    </section> 
  )
}

export default Skills