import React from "react";

//* Styles

import "./Discord.css";

const Discord = () => {
  return (
    <section id='discord'>
      <div className='container'>
        <div className='discord'>
          <h2 className='heading'>Discord</h2>
          <div className='content'>
            <div className='discord__right'>
              <p className='para'>
                "Unleash your inner developer and learn to build stunning web
                applications with our comprehensive courses and interactive
                exercises."
              </p>
              <p className='para'>
                "From HTML and CSS to JavaScript and beyond, we'll take you on a
                journey to become a full-stack web developer. Enroll now and
                start building the future."
              </p>
            </div>
            <img
              className='discord__right--image'
              src='./src/assets/discord.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discord;
