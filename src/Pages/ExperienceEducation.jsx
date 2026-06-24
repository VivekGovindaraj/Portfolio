import React from 'react'
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import '../Styles/ExperienceEducation.css'

const experiences = [
  {
    year: "2023 - Present",
    title: "Associate Software Developer",
    company: "Mphasis Ltd.",
    description:
      "Working on React applications, reusable components and UI architecture.",
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    company: "Company Name",
    description:
      "Built responsive dashboards and enterprise applications.",
  },
];

const education = [
  {
    year: "2018 - 2022",
    title: "B.E - Electrical and Electronics Engineering",
    company: "Adhi College of Engineering and Teachnology. Anna University",
    description: "CGPA: 8.31",
  },
  {
    year: "2018 - 2020",
    title: "Higher Secondary",
    company: "Govt Boys Higher Seconday School. Kizhvaithuna Kuppam, Vellore.",
    description: "Computer Science - 77.34% ",
  },
];


const ExperienceEducation = () => {
  return (
    <>
    <section id='education' className='px-6 md:px-10 lg:px-14 py-12 md:py-18 mt-0 lg:mt-6 card-block '>
        <div className="resume-pill">
        <FaBriefcase />
        <span>Work Experience & Education</span>
      </div>

      {/* EXPERIENCE */}

      <div className="mb-16 md:mb-20 mt-6 ">

        <div className="flex items-center gap-3 mb-8">
          <FaBriefcase className="text-green-500 text-xl md:text-2xl" />

          <h3 className="text-xl md:text-2xl
              font-semibold
            "
          >
            Work Experience
          </h3>
        </div>

        <div className="timeline">

          {experiences.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className=" timeline-content p-3 md:p-3 lg:p-4 " >

                <span className=" inline-block px-3 py-1  rounded-full bg-green-500/10  text-green-500 text-xs md:text-sm font-semibold " >
                  {item.year}
                </span>

                <h4 className=" mt-4 text-lg md:text-xl lg:text-2xl
                    font-semibold " >
                  {item.title}
                </h4>

                <p
                  className=" mt-2 text-xs  md:text-sm uppercase tracking-wider text-gray-400 " >
                  {item.company}
                </p>

                <p
                  className=" mt-4 text-sm md:text-base leading-7 text-gray-300 " >
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* EDUCATION */}

      <div>

        <div className="flex items-center gap-3 mb-8">
          <FaGraduationCap className="text-green-500 text-xl md:text-2xl" />

          <h3 className="text-xl md:text-2xl font-semibold" >
            Education
          </h3>
        </div>

        <div className="timeline">

          {education.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content p-3 md:p-3  lg:p-4 " >

                <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs md:text-sm font-semibold" >
                  {item.year}
                </span>

                <h4 className="mt-4 text-lg md:text-xl lg:text-2xl font-semibold " >
                  {item.title}
                </h4>

                <p
                  className=" mt-2 text-xs md:text-sm uppercase tracking-wider text-gray-400 "  >
                  {item.company}
                </p>

                <p  className=" mt-4 text-sm md:text-base leading-7 text-gray-300 " >
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
    </>
  )
}

export default ExperienceEducation