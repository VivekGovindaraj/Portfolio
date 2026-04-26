import React from 'react'
import SideBar from '../Components/SideBar';
import ProfileCard from '../Components/ProfileCard'

const MainLayout = ({children}) => {
  return (
    <div className="bg-bg text-textMain min-h-screen">
      <div className='mx-5 flex flex-col lg:flex-row pt-6 gap-5 '>
        {/* <SideBar/> */}
        <aside className='w-full lg:w-80 xl:w-80 2xl:w-96 lg:fixed lg:top-6 lg:left-5 p-6'>
            <ProfileCard/>
        </aside>
        

        <main className='flex-1 lg:ml-96 2xl:ml-[30rem] p-6 md:p-12 lg:p-20 overflow-y-auto min-h-screen  lg:h-[calc(100vh-3rem)]'>
            {children}
        </main>
      </div>
        
    </div>
  )
}

export default MainLayout;