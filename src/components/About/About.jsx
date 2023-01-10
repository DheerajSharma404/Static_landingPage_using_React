import React from "react";

//* Style

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <h2 className="heading">About</h2>
          <div className="content">
            <img
              className="about__img--image"
              src="./src/assets/banner.jpg"
              alt=""
            />

            <div className="about__right">
              <p className="para">
                "Unleash your inner developer and learn to build stunning web
                applications with our comprehensive courses and interactive
                exercises."
              </p>
              <p className="para">
                "From HTML and CSS to JavaScript and beyond, we'll take you on a
                journey to become a full-stack web developer. Enroll now and
                start building the future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
