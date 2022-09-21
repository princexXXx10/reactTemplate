import React from 'react';

import { images } from '../../constants';
import './FeatureImages.css';

const FeatureImages = () => {
  return (
    <div className='feature-images__container'>
      <div className='feature-images__container-wrapper'>
        <div className='feature-images__container-card'><img src={images.gericht} alt="a card" /><p>Buy & Sell</p></div>
        <div className='feature-images__container-card'><img src={images.gericht} alt="a card" /><p>Trade</p></div>
        <div className='feature-images__container-card'><img src={images.gericht} alt="a card" /><p>Discover NFT</p></div>
      </div>
    </div>
  )
}

export default FeatureImages;