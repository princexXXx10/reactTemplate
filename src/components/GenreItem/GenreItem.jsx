import React from 'react';

import './GenreItem.css';

const GenreItem = ({item}) => (
  <div className='genre__container'>
    <div className='genre__wrapper'>
      <div className='genre__content'>
        <h1 className='genre__title'>{item.title}</h1>
      </div>
    </div>
  </div>
);

export default GenreItem
