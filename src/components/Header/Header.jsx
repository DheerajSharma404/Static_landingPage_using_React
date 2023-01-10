import React from "react";

//* Styles
import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <header className="header">
          <div className="left">
            <h1 className="header__text">
              Unleash your inner developer and Transform your career with the
              skills to build, deploy, and maintain professional web
              applications
            </h1>
            <p className="header__subtext">
              Join our community of developers todayFrom HTML and CSS to
              JavaScript and beyond, we'll take you on a journey to become a
              full-stack web developer. Enroll now and start building the
              future."
            </p>
            <button className="header__btn">Enroll Now</button>
          </div>
          <figure className="right">
            <img src="/src/assets/hero2.jpg" alt="" className="header__img" />
          </figure>
        </header>
      </div>
    </section>
  );
};

export default Header;
