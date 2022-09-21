import React from 'react';

import { images } from '../../constants';
import './FeatureImages.css';

const FeatureImages = () => {
  return (
    <div className='app__container'>
      <div className='app__container-wrapper'>
        <div className='app__container-card'><img src={images.welcome} alt="a card" /><p>Buy & Sell</p></div>
        <div className='app__container-card'><img src={images.welcome} alt="a card" /><p>Trade</p></div>
        <div className='app__container-card'><img src={images.welcome} alt="a card" /><p>Discover NFT</p></div>
      </div>
    </div>
  )
}

export default FeatureImages;