import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import './Footer.css';

const Footer = () => (
  <div className='footer__container'>
    <div className='footer__wrapper'>
      <div className='footer__content'>

        <div className='footer__left'>
          <h1 className='footer__left-title'>Koiyn</h1>
          <p className='footer__left-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit adipisicing elit.
          </p>
          <div className='footer__left-socials'>
            <FacebookIcon className='x'/>
            <InstagramIcon className='x'/>
            <TwitterIcon className='x'/>
            <TelegramIcon className='x'/>
            <YouTubeIcon className='x'/>
          </div>
        </div>
        <div className='footer__right'>
          <h1 className='footer__right-title'>About</h1>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Company News</li>
          <div className='mobileView'>
            <h1 className='footer__right-mobileTitle'>About</h1>
            <ExpandMoreIcon className='x'/>
          </div>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Legal</h1>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Law Enforcement</li>
          <li>Community</li>
          <div className='mobileView'>
            <h1 className='footer__right-mobileTitle'>Legal</h1>
            <ExpandMoreIcon className='x'/>
          </div>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Service</h1>
          <li>Api</li>
          <li>Historical Market Data</li>
          <li>Fee Schedule</li>
          <li>Token Listing</li>
          <div className='mobileView'>
            <h1 className='footer__right-mobileTitle'>Service</h1>
            <ExpandMoreIcon className='x'/>
          </div>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right-title'>Support</h1>
          <li>Support Center</li>
          <li>Announcement</li>
          <li>Connect with Koin</li>
          <li>Success Victor © 2022</li>
          <div className='mobileView'>
            <h1 className='footer__right-mobileTitle'>Support</h1>
            <ExpandMoreIcon className='x'/>
          </div>
          <div className='mobileCommunity'>Community</div>
          <div className='footer__left-mobileSocials'>
            <FacebookIcon className='x'/>
            <InstagramIcon className='x'/>
            <TwitterIcon className='x'/>
            <TelegramIcon className='x'/>
            <YouTubeIcon className='x'/>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Footer;
