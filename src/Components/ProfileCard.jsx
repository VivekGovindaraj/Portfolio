import "../Styles/ProfileCard.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="sidebar-card">

      <div className="profile-content">

        {/* Profile Image */}
        <div className="profile-wrapper"></div>

        {/* Profile Details */}
        <div className="profile-details">

          <p className="role-text">FRONTEND DEVELOPER</p>

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
            <button className="bottom-btn ">
              Download CV
            </button>

            <button className="bottom-btn">
              Contact Me
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;