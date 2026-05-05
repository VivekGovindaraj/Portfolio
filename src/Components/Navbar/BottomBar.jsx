import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'
const BottomBar = () => {
  return (
    <>
    <nav className="mobile-bottom-nav flex items-center justify-around">
        <div className="nav-icon active">
            <FaHome />
        </div>

        <div className="nav-icon">
            <FaUser />
        </div>

        <div className="nav-icon">
            <FaBriefcase />
        </div>

        <div className="nav-icon">
            <FaTools />
        </div>

        <div className="nav-icon">
            <FaEnvelope />
        </div>
    </nav>
    </>
  )
}

export default BottomBar