import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper'>
        <div className='navbar__content'>


          <nav className='navbar__content--main'>
            <div className='navbar__searchContainer'>
              <input type="text" />
              <p><SearchIcon/></p>
            </div>

            <h1 className='navbar__logo'>Eclipse Games</h1>

            <div className='navbar__links'>
              <p className='navbar__links--register'><a href='#login' > Register </a></p>
              <div />
              <p className='navbar__links--signIn'><a href='#signup' >Sign In</a></p>
              <div />
              <p className='navbar__links--cart'><a href='#cart' >Cart</a></p>
            </div>


            <div className='navbar__smallScreen'>
              <p onClick={() => setToggleMenu(true)}><MenuIcon color='#fff' className='x'/></p>
              
              {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                  <p className='overlay__close' onClick={() => setToggleMenu(false)}><CloseIcon color='#fff'className='x'/></p>
      
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