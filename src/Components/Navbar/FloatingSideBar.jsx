import React, {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'
const FloatingSideBar = () => {

   const [menuOpen, setMenuOpen] = useState(false);
     const [darkMode,setDarkMode] = useState(true);
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
   
         </div>
   </>
  )
}

export default FloatingSideBar