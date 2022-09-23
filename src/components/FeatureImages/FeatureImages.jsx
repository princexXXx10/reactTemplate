import React from 'react';

import { images } from '../../constants';
import './FeatureImages.css';

const FeatureImages = () => {
  return (
    <div className='feature-images__container'>
      <div className='feature-images__container-wrapper'>
        <div className='feature-images__container-card'><img src={images.Buy} alt="a bitcoin token coin on a keyboard - Jievani Weerasinghe (UnSplash)" /><p>Buy & Sell</p></div>
        <div className='feature-images__container-card'><img src={images.Trade} alt="a cryptocurrency market chart - Maxim Hopman (UnSplash)" /><p>Trade</p></div>
        <div className='feature-images__container-card'><img src={images.NFT} alt="a blue colored humanoid face covered in flowers behind on a black background - Barbora Dostalova (UnSplash)" /><p>Discover NFT</p></div>
      </div>
    </div>
  )
}

export default FeatureImages;