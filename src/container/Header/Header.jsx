import React from 'react';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='header__container'>
    <div className='header__wrapper' id='home'>
      <div className='header__content'>

        <div className='content__left'>
          <div className='header__info'>
            <h1 className='header__info-h1'>A trading platform you will Love</h1>
            <p className='header__info-subtitle'>Buy, Sell and Swap crypto assets easily and effortlessly. Join over 200,000 people in trading today.</p>
            <button type='button' className='header__button'>Get Started</button>
          </div>
        </div>

        <div className='content__right'>
          <div className='header__img'>
            <img src={images.welcome} alt="a phone displaying cryptocurrencies - credit Unsplash" />
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Header;
