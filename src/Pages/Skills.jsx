import React from 'react'

const Skills = () => {
  return (
    <section className='px-6 md:px-10 lg:px-14 py-12 md:py-20 card-block  mt-6'>
        <div className='text-lg md:text-2xl lg:text-3xl '>Hello, I’m <span className='txt-green aboutUpdater ms-1'>UI/UX Developer</span></div>
        <div className='mt-4 text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.8] tracking-tight'>
            Associate Software Developer and{" "}
            <span className='bg_green text-black px-7 py-3 my-2 rounded-full mx-2 inline-block font-semibold'>
                UI/UX Developer
            </span>{" "}
            Based in Vellore, Tamilnadu, India.
            </div>

        <p className='mt-14 text-md text-gray-200'>Have worked in a variety of positions, including key developer, solution designer, and data architect. 
            Strong engineering background combined with closely working with business customers.</p>

        <div className='mt-10 flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
                <span className='project-count text-6xl'>10</span>
                <div className='text-md text-gray-300'>Completed<br/> Projects</div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
                <span className='project-count text-6xl'>3</span>
                <div className='text-md text-gray-300'>Years<br/> of Experience</div>
            </div>
           <div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
                <span className='project-count text-6xl'>10+</span>
                <div className='text-md text-gray-300'>Awards <br/> Winning</div>
            </div>
        </div>
    </section> 
  )
}

export default Skills