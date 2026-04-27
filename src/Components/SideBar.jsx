import {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../Styles/SideBar.css'


const SideBar = () => {

  const [darkMode,setDarkMode] = useState(true)
  return (

    <>
     <div className="floating-controls">
        <div className="circle-btn">
          <FaBars />
        </div>

        <div
          className="circle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>

    
    <div className="sidebar-nav">

     
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
    </div>
    </>
  );
};

export default SideBar;