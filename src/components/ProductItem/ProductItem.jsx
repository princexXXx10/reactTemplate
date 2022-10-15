import React from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './ProductItem.css';

const ProductItem = ({item}) => {
  return (
    <div className='productItem__container'>
        <div className='productItem__wrapper'>
            <div className='productItem__content'>
                <div className='productItem__box'>
                    <img src={item.img} alt='' />

                    <div className='productItem__text'>
                        <h1 className='productItem__text--title'>{item.title}</h1>
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