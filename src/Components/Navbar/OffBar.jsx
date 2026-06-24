import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars, FaSchool} from "react-icons/fa";
import '../../Styles/SideBar.css'
import { useSideBarContext } from '../../Context/SideBarContext';

const OffBar = () => {

    const{menuOpen,setMenuOpen}= useSideBarContext()
    
  return (
    <>
    <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label='Mobile Menu'>
        <div className="menu-header">
        <div>
            <h3>Vivek Govindraj</h3>
            <span>Frontend Developer</span>
        </div>

        <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
        >
            ✕
        </button>
        </div>

        <div className="menu-items">
        <div className="menu-item" ><FaUser /> About</div>
        <div className="menu-item"><FaTools /> Skills</div>
        <div className="menu-item"><FaBriefcase /> Projects</div>
        <div className="menu-item"><FaSchool /> Experiece & Education</div>
        <div className="menu-item"><FaEnvelope /> Contact</div>
        </div>

        <div className='fixed bottom-0 left-0 right-0 mx-auto w-fit mb-5 lg:pb-5 pb-2'>
            © 2026 VivekCV
        </div>
    </nav>
    </>
  )
}

export default OffBar