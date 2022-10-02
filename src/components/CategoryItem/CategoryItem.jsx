import React from 'react';

import './CategoryItem.css';

const CategoryItem = ({item}) => (
  <div className='categoryItem__container'>
    <div className='categoryItem__wrapper'>
      <div className='categoryItem__content'>
        <img src={item.img} alt=''/>
        <div className='categoryItem__info'>
          <h1 className='categoryItem__title'>{item.title}</h1>
          <button className='custom__button'>SHOP NOW</button>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryItem;
