import React from 'react';

import { images } from '../../constants';
import './FeatureImages.css';

const FeatureImages = () => {
  return (
    <div className='featureImages__container'>
      <div className='featureImages__wrapper'>
        <div className='featureImages__content'>
          <h2 className="section-title-gradient">Learn about Cryptocurrency and Blockchain with our 'How To:' blog</h2>

          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-value">2M+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">$500M+</span>
              <span className="stat-label">Daily Volume</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">120+</span>
              <span className="stat-label">Countries Support</span>
            </div>
          </div>

          <div className='bento-grid'>
            <div className='bento-item item-large'>
              <div className="bento-content">
                <img src={images.Buy} alt="Buy Crypto" className="bento-img" />
                <div className="bento-text">
                  <h3>Buy & Sell</h3>
                  <p>Instant transactions with zero fees.</p>
                </div>
              </div>
            </div>
            
            <div className='bento-item item-normal'>
              <div className="bento-content">
                <img src={images.Trade} alt="Trade Crypto" className="bento-img" />
                 <div className="bento-text">
                  <h3>Advanced Trading</h3>
                  <p>Professional tools for experts.</p>
                </div>
              </div>
            </div>

            <div className='bento-item item-normal'>
              <div className="bento-content">
               <img src={images.NFT} alt="NFTs" className="bento-img" />
                <div className="bento-text">
                  <h3>Discover NFTs</h3>
                  <p>Explore the world of digital art.</p>
                </div>
              </div>
            </div>

            <div className='bento-item item-wide'>
               <div className="bento-content glass-effect">
                  <div className="bento-text-only">
                     <h3>Start Your Journey</h3>
                     <p>Join millions of users worldwide.</p>
                     <button className="bento-btn">Get Started</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureImages;