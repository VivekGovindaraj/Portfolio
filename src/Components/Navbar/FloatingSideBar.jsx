import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars, FaSchool} from "react-icons/fa";
import '../../Styles/SideBar.css'
import { useThemeContext } from '../../Context/ThemeContext';
import { useSideBarContext } from '../../Context/SideBarContext';
import navItems from '../../utils/navItem.js';
import scrollToSection from "../../utils/scrollToSection.js";


const FloatingSideBar = () => {

  const{darkMode,setDarkMode}=useThemeContext();
  const{menuOpen,setMenuOpen}=useSideBarContext();

  const handleNavigation = (id) => {
    scrollToSection(id)
  }
     
  const toggleTheme = () => {
    setDarkMode( prev => !prev)
  }
  return (
   <>
    <div className='left-controls'>
           <div className="floating-controls">
             <div className="circle-btn" onClick={() => setMenuOpen(true)}>
               <FaBars />
             </div>
   
             <div
               className="circle-btn"
               onClick={() => setDarkMode(!darkMode)}
             >
               {darkMode ? <FaSun /> : <FaMoon />}
             </div>
           </div>
           {/* navbar on desktop  */}
   
           <nav className="sidebar-nav">
               {
                navItems.map((navItem) => {
                  const Icon = navItem.icon
                  
                   return (
                    <div key={navItem.id} className="nav-icon" onClick={() => handleNavigation(navItem.id)}>
                      <Icon/>
                    </div>
                    )
                })
               }

          {/*            
             <div className="nav-icon active" onClick={() => scrollToSection("home")}>
               <FaHome />
             </div> */}

            {/* <div className="nav-icon" onClick={() =>{ console.log("skills") 
              scrollToSection("skills")}}>
               <FaTools />
             </div>
             
   
             <div className="nav-icon" onClick={() => scrollToSection("project")}>
               <FaBriefcase />
             </div>

             <div className="nav-icon" onClick={() => scrollToSection("education")}>
               <FaSchool />
             </div>
   
           
   
             <div className="nav-icon" onClick={() => scrollToSection("contact")}>
               <FaEnvelope />
             </div> */}
           </nav>
   
         </div>
   </>
  )
}

export default FloatingSideBar