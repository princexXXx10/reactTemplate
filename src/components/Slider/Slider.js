import React, { useState, useEffect } from "react";
import './Slider.css';
import BtnSlider from './BtnSlider';
import sliderData from './sliderData';


export default function Slider2() {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== sliderData.length){
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === sliderData.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex -1)
    }
    else if (slideIndex === 1){
      setSlideIndex(sliderData.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }



  useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 7000);
        return () => clearInterval(interval);
    });

  return (
    <div className='slider__container'>
        <div className='slider__wrapper'>
            <div className='slider__content'>
                <div className="container-slider">
                    {sliderData.map((obj, index) => {
                      return (
                        <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                          <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='Right arrow icon'/>
              
                          <div className='slider__text'>
                            <h1 className="game-title">{obj.title}</h1>
                            <p className="game-description">{obj.description}</p>
                            <button className="buy-button">Buy Now</button>
                          </div>
                      
                        </div>
              
                      )
                    })}
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
              
              
                    <div className="container-dots">
                      {Array.from({length: 4}).map((item, index) => (
                        <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

