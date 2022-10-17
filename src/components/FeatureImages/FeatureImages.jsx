import React from 'react';

import { images } from '../../constants';
import './FeatureImages.css';

const FeatureImages = () => {
  return (
    <div className='featureImages__container'>
      <div className='featureImages__wrapper'>
        <div className='featureImages__content'>
          <h2>Learn about Cryptocurrency and Blockchain with our 'How To:' blog</h2>

          <div className='featureImages__content--main'>
            <div className='featureImages__card'><img src={images.Buy} alt="a bitcoin token coin on a keyboard - Jievani Weerasinghe (UnSplash)" /><p>Buy & Sell with Koiyn</p></div>
            <div className='featureImages__card'><img src={images.Trade} alt="a cryptocurrency market chart - Maxim Hopman (UnSplash)" /><p>Trade with Koiyn</p></div>
            <div className='featureImages__card'><img src={images.NFT} alt="a blue colored humanoid face covered in flowers behind on a black background - Barbora Dostalova (UnSplash)" /><p>Discover NFT's with Koiyn</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureImages;