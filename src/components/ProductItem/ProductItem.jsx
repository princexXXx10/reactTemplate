import React from 'react'
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './ProductItem.css';

const ProductItem = ({item}) => {
  return (
    <div className='productItem__container'>
        <div className='productItem__wrapper'>
            <div className='productItem__content'>
                <div className='productItem__box'>
                    <Link to={`/product/${item.id}`}>
                        <img src={item.img} alt={item.title} style={{ cursor: 'pointer' }} />
                    </Link>

                    <div className='productItem__text'>
                        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1 className='productItem__text--title'>{item.title}</h1>
                        </Link>
                        <div className='productItem__textTwo'>
                            <h2 className='productItem__textTwo--price'>{item.price}</h2>
                            <div className='productItem__textTwo--icons'>
                                <FavoriteBorderIcon/>
                                <ShoppingCartOutlinedIcon/>
                            </div>
                        </div>
                        <h2 className='productItem__console'>{item.console}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem