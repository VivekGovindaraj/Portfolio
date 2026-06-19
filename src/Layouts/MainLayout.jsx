import React from 'react'
import SideBar from '../Components/Navbar/SideBar';
import ProfileCard from '../Components/ProfileCard'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-bg text-textMain min-h-screen">

      <SideBar />

      {/* Mobile & Tablet */}
      <div className="block lg:hidden">

        <ProfileCard />

        <main>
          {children}
        </main>

      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-screen overflow-hidden">

        {/* Fixed Profile */}
        <aside
          className=" w-[420px] shrink-0 flex justify-center pt-16 "
        >
          <ProfileCard />
        </aside>

        {/* Scroll Area */}
        <main className=" flex-1 overflow-y-auto ps-32 pe-8 py-10 " >
          {children}

          <footer className="mt-10 py-5 text-center">
            © 2026 VivekCV
          </footer>
        </main>

      </div>

    </div>
  )
}

export default MainLayout;