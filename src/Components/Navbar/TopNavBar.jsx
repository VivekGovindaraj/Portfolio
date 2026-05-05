import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'
const TopNavBar = () => {
      const [darkMode,setDarkMode] = useState(true);
       const [menuOpen, setMenuOpen] = useState(false);
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