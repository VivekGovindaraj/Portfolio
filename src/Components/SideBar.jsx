import {useState} from 'react'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../Styles/SideBar.css'


const SideBar = () => {

  const [darkMode,setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <>
      {/* Mobile top navbar*/}
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

      { /* floating hamburer on desktop */}
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

        {/* /off bar mobile puls desktop*/ }
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
            <div className="menu-item"><FaUser /> About</div>
            <div className="menu-item"><FaTools /> Skills</div>
            <div className="menu-item"><FaBriefcase /> Projects</div>
            <div className="menu-item"><FaEnvelope /> Contact</div>
          </div>
      </nav>

      {/* mobile nav bar */}
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
  );
};

export default SideBar;