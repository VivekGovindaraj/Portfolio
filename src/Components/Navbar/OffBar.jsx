import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars, FaSchool} from "react-icons/fa";
import '../../Styles/SideBar.css'
import { useSideBarContext } from '../../Context/SideBarContext';
import scrollToSection from '../../utils/scrollToSection';
import navItems from '../../utils/navItem';
scrollToSection

const OffBar = () => {

    const{menuOpen,setMenuOpen}= useSideBarContext()
    const handleNavigation =(id) => {
        scrollToSection(id)
    }
    
  return (
    <>
    <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label='Mobile Menu'>
        <div className="menu-header">
        <div>
            <h3>Vivek Govindraj</h3>
            <span>MERN Full Stack Developer</span>
        </div>

        <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
        >
            ✕
        </button>
        </div>
        <div className='flex flex-col justify-between h-full'>
        <div className="menu-items">

               {
                navItems.map((navItem) => {
                  const Icon = navItem.icon

                   return (
                    
                    <div key={navItem.id} className="menu-item" onClick={() => handleNavigation(navItem.id)}>
                      <Icon/> {navItem.label}
                    </div>
                    )
                })
               }
                {/* <div className="" ><FaUser /> About</div>
                <div className="menu-item"><FaTools /> Skills</div>
                <div className="menu-item"><FaBriefcase /> Projects</div>
                <div className="menu-item"><FaSchool /> Experiece & Education</div>
                <div className="menu-item"><FaEnvelope /> Contact</div> */}
        </div>

        <div className='right-0 mx-auto w-fit mb-5 lg:pb-5 pb-2'>
            © 2026 VivekCV
        </div>
        </div>
    </nav>
    </>
  )
}

export default OffBar