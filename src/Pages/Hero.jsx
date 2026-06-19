import React from 'react'
import '../../src/index.css'

const Hero = () => {
  return (
    <section className='px-6 md:px-10 lg:px-14 py-12 md:py-19 card-block card-block-rounded'>
        <div className='text-2xl md:text-2xl lg:text-3xl '>Hello, I’m <span className='txt-green aboutUpdater ms-1'>UI/UX Developer</span></div>
        <div className='mt-6 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal leading-[1.8] tracking-tight'>
            Associate Software Developer and {" "}
            <span className='bg_green text-black px-7 py-3 my-2 rounded-full inline-block font-semibold textslant'>
                UI/UX Developer
            </span>{" "}
            Based in Vellore, Tamilnadu, India.
        </div>

        <p className='mt-10 lg:mt-14 text-md text-gray-200'>Have worked in a variety of positions, including key developer, solution designer, and data architect. 
            Strong engineering background combined with closely working with business customers.</p>

        <div className='mt-10 flex  flex-col md:flex-row  items-center justify-around gap-8 md:gap-8'>
            <div className='flex flex-row gap-4 items-center justify-center'> 
                <span className='project-count text-4xl md:text-6xl '>10</span>
                <div className='text-md text-gray-300'>Completed Projects</div>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center'> 
                <span className='project-count  text-4xl  md:text-6xl '>3</span>
                <div className='text-md text-gray-300'>Years of Experience </div>
            </div>
           <div className='flex flex-row gap-4 items-center justify-center'> 
                <span className='project-count  text-4xl md:text-6xl'>10+</span>
                <div className='text-md text-gray-300'>Awards Winning </div>
            </div>
        </div>
    </section> 
  )
}

export default Hero