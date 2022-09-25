import React from 'react';

import { images } from '../../constants'
import './Download.css';

const Download = () => (
  <div className='download__container'>
    <div className='download__wrapper'>
      <div className='download__content'>
        
        <div className='download__left'>
          <div className='download__left-images'>
            <img src={images.Welcome} alt="A phone displaying cryptocurrencies - credit Unsplash" className='download__left__image-one'/>
            <img src={images.Welcome} alt="A phone displaying cryptocurrencies - credit Unsplash" className='download__left__image-two'/>
            <img src={images.Welcome} alt="A phone displaying cryptocurrencies - credit Unsplash" className='download__left__image-three'/>
          </div>
        </div>

        <div className='download__right'>
          <div className='download__right-text'>
            <h2 className='download__right-title'>Trade on the go. Anytime, Anyhow, Anywhere.</h2>
            <p className='download__right-subtitle'>The Koin app and website allow you to start crypto trading with ease</p>
  
            <div className='download__buttons'>
              <div className='download__button__appStore'>
                <img src={images.Appstore} alt="The apple app store logo" />
                <div className='appStore__right'><p>Download on the<br /><span>App Store</span></p></div>
              </div>
              <div className='download__button__playStore'>
                <img src={images.Playstore} alt="The google play store logo" />
                <div className='playStore__right'><p>GET IT ON<br /><span>Google Play</span></p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Download;
