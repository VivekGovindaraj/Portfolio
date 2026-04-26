import React from 'react'

const Hero = () => {
  return (
    <section className=' px-10 py-20 card-block card-block-rounded'>
        <div className='text-lg md:text-xl lg:text-2xl '>Hello , I'm <span className='txt-green aboutUpdater ms-1'>UI/UX Developer</span></div>
        <div className='mt-4 text-2xl md:text-4xl  leading-[1.8] md:leading-[1.6]'>
             Associate Software Developer and 
            <span className='bg_green text-black px-6 py-2 rounded-full  w-fit mx-1 align-middle whitespace-nowrap'>
                UI/UX Developer
            </span>Based in Vellore, Tamilnadu, India.
        </div>

        <p className='mt-4 text-md text-gray-200'>Have worked in a variety of positions, including key developer, solution designer, and data architect. 
            Strong engineering background combined with closely working with business customers.</p>

        <div className='mt-7 flex flex-col md:flex-row  items-center justify-between'>
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

export default Hero