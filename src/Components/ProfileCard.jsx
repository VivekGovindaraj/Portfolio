import "../Styles/ProfileCard.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import scrollToSection from "../utils/scrollToSection";

import resume from '../assets/resume.pdf'

const ProfileCard = () => {
  return (
    <div className="sidebar-card">

      <div className="profile-content">

        {/* Profile Image */}
        <div className="profile-wrapper"></div>

        {/* Profile Details */}
        <div className="profile-details">

          <p className="role-text">MERN STACK DEVELOPER</p>

          <h1 className="name-text text-3xl font-bold">
            Vivek Govindraj
          </h1>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/vivekgovindaraj0701"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/VivekGovindaraj"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="bottom-bar">
            <a  href={resume}  download="Vivek_Resume.pdf"  className="bottom-btn" >
              Download CV
            </a>

            <button className="bottom-btn" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;