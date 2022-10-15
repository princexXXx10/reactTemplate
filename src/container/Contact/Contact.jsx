import React from 'react';

import { images } from '../../constants';

import './Contact.css';

const Contact = () => (
  <div className='contact__container'>
    <div className='contact__wrapper custom__wrapper'>
      <div className='contact__content'>
        <h1>Contact Us</h1>

        <div className='contact__content--main'>
          <div className='contact__left'>
            <div className='contact__left--one'>
              <img src={images.Crop} alt="" />
            </div>
            

            <div className='contact__left--two'>
              <form action="">
                <label htmlFor="name"><p><b>Name:</b></p></label>
                <input type="text" id="name" required />

                <label htmlFor="name"><p><b>Email:</b></p></label>
                <input type="text" id="email" required />

                <label htmlFor="name"><p><b>Phone Number:</b></p></label>
                <input type="text" id="phone" required />

                <label htmlFor="name"><p><b>Message:</b></p></label>
                <textarea type="message" rows="6" required ></textarea>

                <div className='center'>
                  <input type="submit" value="Send" className='submit' />
                </div>
              </form>
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__address"><img src="https://img.icons8.com/ios-glyphs/30/000000/place-marker.png" alt='Location icon - (Icon8)' className="icon"/><p>Homer’s Plaza, Opp. Winners’ Chapel, Uromi-ilushi Road, Orhuen-Ubiaja, Edo State.</p></div>
            <div className="contact__phone"><img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" alt='Phone icon - (Icon8)' className="icon"/><p>+234 9023456789</p></div>
            <div className="contact__email"><img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" alt='Email icon - (Icon8)' className="icon"/><p>omoikefarms@gmail.com</p></div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Contact;
