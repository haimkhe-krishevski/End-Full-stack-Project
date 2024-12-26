import react from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
  
    return (
      <header className="header">
        {/* {location.pathname !== "/ContactUs" && ( */}
          <Link to="/ContactUs" className="contact-button">
            Contact Us
          </Link>
        {/* )} */}
        {/* {location.pathname !== "/AboutMe" && ( */}
          <Link to="/AboutMe" className="about-button">
            About Me
          </Link>
        {/* )} */}
        {/* {location.pathname !== "/" && ( */}
          <Link to="/" className="projects-button">
            Projects
          </Link>
        {/* )} */}
      </header>
    );
  }

  export default Header