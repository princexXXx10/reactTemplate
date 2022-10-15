import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
              <p color='#e92121' fontSize={27} onClick={() => setToggleMenu(true)}><MenuIcon/></p>
              
              {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                  <div className='navbar__content--main'>
                    <img src={images.Logo} alt="" className='overlay__close overlay__closeLogo' />
                    <p color='#e92121' fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}><CloseIcon /></p>
                  </div>
                  <ul className='app__navbar-smallscreen-links'>
                    <li className=''><a href='#home'>Home</a></li>
                    <li className=''><a href='#about'>Products</a></li>
                    <li className=''><a href='#menu'>Training & Mentorship</a></li>
                    <li className=''><a href='#contact'>Contact</a></li>
                  </ul>
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