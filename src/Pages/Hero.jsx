import React, {useState, useEffect } from 'react'
import '../../src/index.css'
import {AnimatePresence, motion} from 'framer-motion'

const roles = ["UI Developer", "Frontend Developer", "React Developer", "MERN Stack Devloper"];
const badgeroles = [ "React Developer", "MERN Stack Devloper","UI Developer", "Frontend Developer"];


const Hero = () => {

    
const [index, setIndex] = useState(0)

useEffect(() => {

    const timer = setInterval(() => {
        setIndex((prev) => (prev +1) % roles.length )
    },1800)

    return () => clearInterval(timer)
}, [])
  return (
    <section id='home' className='px-6 md:px-10 lg:px-14 py-12 md:py-20 card-block '>
        <div className='text-2xl md:text-2xl lg:text-3xl '>Hello, I’m 
            <span className="relative  inline-block w-[290px] h-[40px] overflow-hidden align-middle ms-2 lg:mt-0 mt-3">
            <AnimatePresence mode="wait">
                <motion.span
                    key={roles[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="txt-green  absolute left-0  whitespace-nowrap" >
                    {roles[index]}
                </motion.span>
                </AnimatePresence>
            </span>
        </div>
        <div className='mt-6 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal leading-[1.8] tracking-tight'>
            Associate Software Developer in Mphasis {" "}
            {/* <span className='bg_green text-black px-7 py-3 my-2 rounded-full inline-flex items-center justify-center font-semibold textslant min-w-[250px] overflow-hidden'>
              
                <AnimatePresence mode="wait">
                    <motion.span
                    key={badgeroles[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block"
                    >
                    {badgeroles[index]}
                    </motion.span>
                </AnimatePresence>

            </span>{" "} */}
            Based in Vellore, Tamilnadu, India.
        </div>

        <p className='mt-10 lg:mt-12 text-md text-gray-200'>
            Mern Stack Developer with 3+ years of Experience building responsive  and scalable web applications
            using React.js, Express.js, MongoDB, Redux, Javascript and REST API's. Experienced in developing
            modern frontend interfaces and backend services for banking applications.
        </p>

        <div className='mt-10 flex  flex-row  items-center justify-around gap-8 md:gap-8'>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
                <span className='project-count text-4xl md:text-6xl '>10+</span>
                <div className='text-md text-gray-300'>Projects Worked on</div>
            </div>
            <div className='flex flex-col md:flex-row  gap-4 items-center justify-center'> 
                <span className='project-count  text-4xl  md:text-6xl '>3+</span>
                <div className='text-md text-gray-300'>Years of Experience </div>
            </div>
           <div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
                <span className='project-count  text-4xl md:text-6xl'>9+</span>
                <div className='text-md text-gray-300'>Technologies</div>
            </div>
        </div>
    </section> 
  )
}

export default Hero