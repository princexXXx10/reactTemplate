import React, { useState } from 'react';

//Import Harmburger icons later.
import { images } from '../../constants'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper custom__wrapper'>
        <div className='navbar__content'>


          <nav className='navbar__content--main'>
            <img src={images.Logo} alt="" />

            <div className='navbar__links'>
              <p className='navbar__links--home'><a href='#login' > Home </a></p>
              <p className='navbar__links--product'><a href='#signup' >Products</a></p>
              <p className='navbar__links--training'><a href='#signup' >Training & Mentorship</a></p>
              <p className='navbar__links--contact'><a href='#cart' >Contact</a></p>
            </div>


            <div className='navbar__smallScreen'>
              <p color='#e92121' fontSize={27} onClick={() => setToggleMenu(true)}>import hamburger</p>
              
              {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                  <p color='#e92121' fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}>import close</p>
      
                  <ul className='app__navbar-smallscreen-links'>
                    <li className='p__opensans'><a href='#home'>Buy Crypto</a></li>
                    <li className='p__opensans'><a href='#about'>Market</a></li>
                    <li className='p__opensans'><a href='#menu'>Trade</a></li>
                    <li className='p__opensans'><a href='#contact'>Earn</a></li>
                    <li className='p__opensans'><a href='#more'>More</a></li>
                  </ul>
      
                  <div className='app__navbar-mobileLinks-two'>
                    <button className='app__navbar-links-two-login' id='mobileLogin'><a href='#login' className=''> Login </a></button>
                    <div />
                    <button className='app__navbar-links-two-signup'><a href='#signup' className=''>Sign Up</a></button>
                  </div>
                </div>
              )}
            </div>
          </nav>

        </div>
      </div>
    </div>
  )
};

export default Navbar;