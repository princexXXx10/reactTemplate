import React from 'react';

import { images } from '../../constants'

import './About.css';

const About = () => (
  <div className='aboutUs__container'>
    <div className='aboutUs__wrapper custom__wrapper'>
      <div className='aboutUS__content'>
        <div className='aboutUs__text'>
            <h1>About Us</h1>
            <div className='aboutUs__description'>
                <p>
                    Omoike Integrated Farm is family-owned and operated farm, growing high quality crops, produce, 
                    and pasture-raised meat, located in the mountains of Edo state. 
                    We are craftsmen and cultivators of the land, creating a place we call home, and sharing our journey with others.
                </p>
            </div>
        </div>
        <div className='holder'>
            <div className="aboutUs__cards">
                <div className="aboutUs__cardItem">
                    <figure className="aboutUs__img--box">
                        <img src={images.Fowl} alt="" className='img' />
                    </figure>
                    <div className="aboutUs__card--subtitle">
                        <div className="aboutUs__subtitle--content">
                            <h2 className="aboutUs__subtitle--title">Livestock</h2>
                            <p className="aboutUs__subtitle--items">
                                <ol>i. Goat</ol>
                                <ol>ii. Poultry</ol>
                                <ol>iii. Catfish</ol>
                                <ol>iv. Grasscutters</ol>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="aboutUs__cardItem">
                    <figure className="aboutUs__img--box">
                        <img src={images.Crop} alt="" className='img'/>
                    </figure>
                    <div className="aboutUs__card--subtitle">
                        <div className="aboutUs__subtitle--content">
                            <h2 className="aboutUs__subtitle--title">Limited Crop Farming</h2>
                            <p className="aboutUs__subtitle--items">
                                <ol>i. Palm Oil management and storage</ol>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="aboutUs__cardItem">
                    <figure className="aboutUs__img--box">
                        <img src={images.Training} alt="" className='img'/>
                    </figure>
                    <div className="aboutUs__card--subtitle">
                        <div className="aboutUs__subtitle--content">
                            <h2 className="aboutUs__subtitle--title">Training & Mentorship</h2>
                            <p className="aboutUs__subtitle--items">
                                <ol>i. Training for upcoming farmers</ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
