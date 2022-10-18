import React from 'react';

import SendIcon from '@mui/icons-material/Send'

import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter__container'>
    <div className='newsletter__wrapper'>
      <div className='newsletter__content'>
        <h1 className='newsletter__title'>Newsletter</h1>
        <p className='newsletter__description'>Get timely updates for your favorite products</p>
        <div className='newsletter__input'>
          <input type="text" placeholder='Your Email' />
          <button><SendIcon /></button>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
