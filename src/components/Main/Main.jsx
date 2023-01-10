import React from "react";

//* Styles
import "./Main.css";

const Main = () => {
  return (
    <section id="main">
      <section id="about">
        <div className="container">
          <h2 className="heading">About</h2>
          <div className="content">
            <p className="para">
              "Unleash your inner developer and learn to build stunning web
              applications with our comprehensive courses and interactive
              exercises."
            </p>
            <p className="para">
              "From HTML and CSS to JavaScript and beyond, we'll take you on a
              journey to become a full-stack web developer. Enroll now and start
              building the future."
            </p>
            <figure className="about__img">
              <img className="about__img--image" src="" alt="" />
            </figure>
          </div>
        </div>
      </section>
      <section id="discord">
        <div className="container">
          <h2 className="heading">Discord</h2>
          <div className="content">
            <figure className="discord__img">
              <img className="discord__img--image" src="" alt="" />
            </figure>
            <p className="para">
              Transform your career with the skills to build, deploy, and
              maintain professional web applications. Join our community of
              developers today!
            </p>
            <p className="para">
              Join the ranks of successful web developers and bring your ideas
              to life with our expert-led courses and hands-on projects. Start
              learning today!"
            </p>
          </div>
        </div>
      </section>
      <section id="contacts">
        <div className="container">
          <h2 className="heading">Contact</h2>
          <form action="">
            <input className="email" type="text" placeholder="Email" />
            <textarea
              className="textarea"
              placeholder="Meassage"
              cols="30"
              rows="10"
            ></textarea>
            <button className="submit__btn">Submit</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Main;
