import React from 'react';

import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './Footer.css';

const Footer = () => (
  <div className='footer__container'>
    <div className='footer__wrapper'>
      <div className='footer__content'>

        <div className='footer__left'>
          <h1 className='footer__logo'>Eclipse Games</h1>
          <p className='footer__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sequi, perspiciatis nam aspernatur sunt dolorem fuga eius voluptates
          </p>
          <div className='footer__icons'>
            <p><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt='Facebook - (Icon8)' /></p>
            <p><img src="https://img.icons8.com/color/48/228BE6/whatsapp--v1.png" alt='Whatsapp - (Icon8)'/></p>
            <p><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt='Instagram - (Icon8)'/></p>
            <p><img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt='Twitter - (Icon8)'/></p>
          </div>
        </div>

        <div className='footer__center'>
          <h3 className='footer__center--title'>Useful Links</h3>
          <div className='footer__center--list'>
            <li className='footer__center__listItem'>Home</li>
            <li className='footer__center__listItem'>Cart</li>
            <li className='footer__center__listItem'>Categories</li>
            <li className='footer__center__listItem'>Wishlist</li>
            <li className='footer__center__listItem'>Accessories</li>
            <li className='footer__center__listItem'>My Account</li>
            <li className='footer__center__listItem'>Track Order</li>
            <li className='footer__center__listItem'>Support</li>
            <li className='footer__center__listItem'>Terms and Conditions</li>
            <li className='footer__center__listItem'> Eclipse Games Career</li>
          </div>
        </div>

        <div className='footer__right'>
          <h3 className='footer__right--title'>Contact</h3>
          <div className='footer__right--location'><RoomIcon /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores</div>
          <div className='footer__right--phone'><LocalPhoneOutlinedIcon /> +234 23456789</div>
          <div className='footer__right--email'><EmailOutlinedIcon /> contact@eclipsegames.gmail.com</div>
          <img src="https://w7.pngwing.com/pngs/117/675/png-transparent-visa-and-mastercard-ads-mastercard-credit-card-american-express-visa-debit-card-mastercard-text-payment-logo-thumbnail.png" alt="Available payment options" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
