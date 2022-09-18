import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="A trading platform you will Love" />
      <h1 className='app__header-h1'>A trading platform you will Love</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Buy, Sell and Swap crypto assets easily and effortlessly. Join over 200,000 people in trading today.</p>
      <button type='button' className='custom__button'>Get Started</button>
    </div> 

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="a phone displaying cryptocurrencies - credit Unsplash" />
    </div>
  </div>
);

export default Header;
