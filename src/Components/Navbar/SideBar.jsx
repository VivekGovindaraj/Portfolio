import {useState} from 'react'
import TopNavBar from './TopNavBar';
import FloatingSideBar from './FloatingSideBar';
import OffBar from './OffBar';
import BottomBar from './BottomBar';
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope, FaSun, FaMoon, FaBars} from "react-icons/fa";
import '../../Styles/SideBar.css'



const SideBar = () => {

  return (

    <>
      {/* Mobile top navbar*/}
      <TopNavBar />
      { /* floating hamburer on desktop */}
      <FloatingSideBar />
      {/* /off bar mobile puls desktop*/ }
        <OffBar />
      {/* mobile nav bar */}
      <BottomBar />
     
    </>
  );
};

export default SideBar;