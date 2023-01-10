import React from "react";

//*Styles
import "./NavBar.css";

const NavBar = () => {
  return (
    <section id="nav">
      <div className="container">
        <nav className="nav">
          <figure className="logo">
            <img
              className="logo__img"
              src="./src/assets/logo1.jpg"
              alt="logo"
            />
            <span>LOGO</span>
            <img
              className="logo__img"
              src="./src/assets/logo1.jpg"
              alt="logo"
            />
          </figure>
          <ul className="nav__links">
            <li>
              <a href="" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                Project
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
