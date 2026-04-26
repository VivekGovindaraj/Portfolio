import "../Styles/ProfileCard.css";
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'


const ProfileCard = () => {
  return (
    <div className="sidebar-card flex flex-col justify-between items-center gap-3 mt-5 lg:fixed">

      {/* TOP */}
      <div style={{ textAlign: "center" }} className="flex flex-col items-center justify-center gap-2">
        
        <div className="profile-wrapper mt-4"></div>

        <p className="role-text text-md mt-3">FRONTEND DEVELOPER</p>
        <h1 className="name-text text-xxl">Vivek Govindraj</h1>

        <div className="social-icons flex items-center justify-between gap-3">
            <div className="social-icons">
                <a href="www.linkedin.com/in/vivekgovindaraj0701" target="_blank" className="icon">
                    <FaLinkedinIn />
                </a>

                <a href="https://github.com/VivekGovindaraj" target="_blank" className="icon">
                    <FaGithub />
                </a>

                <a href="https://instagram.com" target="_blank" className="icon">
                    <FaInstagram />
                </a>

                </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="bottom-bar flex justify-between gap-3">
        <div className="bottom-btn p-3 btn">Download CV</div>
        <div className="bottom-btn">Contact Me</div>
      </div>

    </div>
  );
};

export default ProfileCard;