import React from 'react'
import SideBar from '../Components/SideBar';
import ProfileCard from '../Components/ProfileCard'

const MainLayout = ({children}) => {
  return (
    <div className="bg-bg text-textMain min-h-screen bg-img">
      <div className='mx-5 flex flex-col md:flex-col lg:flex-row gap-3 items-start'>
        <SideBar/> 
        <aside className='w-full lg:w-[360px]  lg:top-11 lg:left-40 lg:fixed'>
            <ProfileCard/>
        </aside>
        

        <main className='w-full lg:ml-[480px] px-6 md:px-10 lg:px-14 lg:py-16 pb-25 overflow-y-auto min-h-screen '>
            {children}
        </main>
      </div>
        
    </div>
  )
}
  
export default MainLayout;