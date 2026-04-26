import "../Styles/ProfileCard.css";
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'


const Sidebar = () => {
  return (
    <div className="sidebar-card mt-5">

      {/* TOP */}
      <div style={{ textAlign: "center" }} className="flex flex-col items-center justify-center gap-3">
        
        <div className="profile-wrapper">
          
        </div>

        <p className="role-text text-md">FRONTEND DEVELOPER</p>
        <h1 className="name-text text-xxl">Vivek Govindraj</h1>

        <div className="social-icons flex items-center jusitfy-between gap-3">
            <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" className="icon">
                    <FaLinkedinIn />
                </a>

                <a href="https://github.com" target="_blank" className="icon">
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

export default Sidebar;