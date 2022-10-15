import React from 'react';

import { games } from "../data";
import ProductItem from "../../components/ProductItem/ProductItem";
import Genre from "../Genre/Genre";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

import './Product.css';

const Product = () => (
  <div className='product__container'>
    <div className='product__wrapper'>
      <div className='product__content'>
        <p className='product_trending'><WhatshotOutlinedIcon /> Trending</p>
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
