import React from 'react';


import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import './Categories.css';

const Categories = () => (
  <div className='categories__container'>
    <div className='categories__wrapper'>
      <div className='categories__content'>
        {categories.map(item=>(
          <CategoryItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  </div>
);

export default Categories;
