import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'
import { useSideBarContext} from '../../Context/SideBarContext';
import { useThemeContext } from '../../Context/ThemeContext';


const TopNavBar = () => {
      const {menuOpen,setMenuOpen}=useSideBarContext();
        const{darkMode,setDarkMode}=useThemeContext()
  return (
    <>
      <nav className='top-navbar' aria-label="Mobile Navigation">
        <div className='nav-left' onClick={() =>{setMenuOpen(true)}}>
          <FaBars/>
        </div >

        <div className='nav-center'>
          <h3 className='font-bold text-xl'>Vivek Govindaraj</h3>

        </div>

        <div className='nav-right' onClick={() =>setDarkMode(!darkMode)}>
          { darkMode ? <FaSun/> : <FaMoon/>}
        </div>
      </nav>
    </>
  )
}

export default TopNavBar