import React from "react";

//* Styles
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <img className="footer__img" src="./src/assets/logo1.jpg" alt="" />
            <span>LOGO</span>
            <img className="footer__img" src="./src/assets/logo1.jpg" alt="" />
          </div>
          <div className="footer__links">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#contact">Contacts</a>
          </div>
          <p className="copyright__text">
            &copy; All right reserved Since 2022{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
