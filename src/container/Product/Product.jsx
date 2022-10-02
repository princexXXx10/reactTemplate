import React from 'react';

import { games } from "../data";
import ProductItem from "../../components/ProductItem/ProductItem";
import Genre from "../Genre/Genre";
import { WhatshotOutlined } from '@material-ui/icons';

import './Product.css';

const Product = () => (
  <div className='product__container'>
    <div className='product__wrapper'>
      <div className='product__content'>
        <p className='product_trending'> icon Trending</p>
        <Genre />
        <div className='product__content--main'>
          {games.map(item=>(
              <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Product;
