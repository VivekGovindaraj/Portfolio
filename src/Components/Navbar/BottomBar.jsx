import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'
import navItems from '../../utils/navItem.js';
import scrollToSection from "../../utils/scrollToSection.js";
import { useSideBarContext } from '../../Context/SideBarContext.jsx';


const BottomBar = () => {


   const{activeSection,setActiveSection}=useSideBarContext();

     const handleNavigation = (id) => {
    scrollToSection(id,setActiveSection)
  }
  return (
    <>
    <nav className="mobile-bottom-nav flex items-center justify-around">
          {
                navItems.map((navItem) => {
                  const Icon = navItem.icon

                   return (
                    
                    <div key={navItem.id} className={`nav-icon ${ activeSection === navItem.id ? "active" : ""} `} onClick={() => handleNavigation(navItem.id)}>
                      <Icon/>
                    </div>
                    )
                })
               }
    </nav>
    </>
  )
}

export default BottomBar