import React from 'react'
import SideBar from '../Components/Navbar/SideBar';
import ProfileCard from '../Components/ProfileCard'

const MainLayout = ({children}) => {
  return (
    <div className="bg-bg text-textMain min-h-screen bg-img">
      
        <SideBar/> 
      <div className='flex flex-col lg:flex-row gap-2'>
        <aside className='w-full lg:w-[360px] lg:fixed'>
            <ProfileCard/>
        </aside>
        

        <main className="w-full px-0 md:px-6 py-6 md:py-8 lg:py-16 md:pl-[150px] lg:pl-[560px] flex-1">
            {children}
        </main>
      </div>
        
    </div>
  )
}
  
export default MainLayout;