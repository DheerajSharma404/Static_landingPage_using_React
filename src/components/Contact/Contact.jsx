import React from "react";

//* Styles

import "./Contact.css";

const Contact = () => {
  return (
    <section id='contacts'>
      <div className='container'>
        <div className='contact'>
          <h2 className='contact__heading'>Contact</h2>
          <form>
            <div>
              <input className='email' type='text' placeholder='Email' />
            </div>
            <div className=''>
              <textarea
                className='textarea'
                placeholder='Meassage'
                cols='10'
                rows='10'
              ></textarea>
            </div>
            <button className='submit__btn'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
