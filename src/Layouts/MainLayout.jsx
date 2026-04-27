import React from 'react'
import SideBar from '../Components/SideBar';
import ProfileCard from '../Components/ProfileCard'

const MainLayout = ({children}) => {
  return (
    <div className="bg-bg text-textMain min-h-screen bg-img">
      <div className='mx-5 flex flex-col md:flex-col lg:flex-row gap-3 items-start'>
        <SideBar/> 
        <aside className=' fixed top-11 left-40 w-[360px]'>
            <ProfileCard/>
        </aside>
        

        <main className='lg:ml-[480px] px-6 md:px-10 lg:px-14 py-16 overflow-y-auto min-h-screen '>
            {children}
        </main>
      </div>
        
    </div>
  )
}
  
export default MainLayout;