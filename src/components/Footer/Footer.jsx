import React from "react";

//* Styles
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img className="footer__img" src="./src/assets/logo1.jpg" alt="" />
        <span>LOGO</span>
        <img className="footer__img" src="./src/assets/logo1.jpg" alt="" />
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
      <p className="copyright__text">&copy; All right reserved Since 2022 </p>
    </footer>
  );
};

export default Footer;
