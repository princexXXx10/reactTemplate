import React from 'react'

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
                            <p className='productItem__textTwo--price'>{item.price}</p>
                            <div className='productItem__textTwo--icons'>
                                <p>icon</p>
                                <p>icon</p>
                            </div>
                        </div>
                        <h1 className='productItem__console'>{item.console}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem