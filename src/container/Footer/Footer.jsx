import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='footer__container'>
    <div className='footer__wrapper'>
      <div className='footer__content'>

        <div className='footer__left'>
          <h1 className='footer__left-title'>Koin</h1>
          <p className='footer__left-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit adipisicing elit.
          </p>
          <div className='footer__left-socials'>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>
        </div>
        <div className='footer__right'>
          <h1 className='footer__right-title'>About</h1>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Company News</li>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Legal</h1>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Law Enforcement</li>
          <li>Community</li>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Service</h1>
          <li>Api</li>
          <li>Historical Market Data</li>
          <li>Fee Schedule</li>
          <li>Token Listing</li>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Support</h1>
          <li>Support Center</li>
          <li>Announcement</li>
          <li>Connect with Koin</li>
          <li>Success Victor c 2022</li>
        </div>

      </div>
    </div>
  </div>
);

export default Footer;
