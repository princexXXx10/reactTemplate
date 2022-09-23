import React from 'react';

import FeatureImages from '../../components/FeatureImages/FeatureImages';
import FeatureMarkets from '../../components/FeatureMarkets/FeatureMarkets';


import './Feature.css';

const Feature = () => (
  <div className='feature__container'>
    <div className='feature__wrapper'>
      <div className='feature__content'>


        <div className='feature__card'>
          <FeatureImages />
        </div>

        <div className='feature__market'>
          <FeatureMarkets />
        </div>


      </div>
    </div>
  </div>
);

export default Feature;
