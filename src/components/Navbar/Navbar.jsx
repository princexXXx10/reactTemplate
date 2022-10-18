import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper'>
        <div className='navbar__content'>


          <nav className='navbar__content--main'>
            <div className='navbar__searchContainer'>
              <input placeholder="Search"/>
              <p><SearchIcon/></p>
            </div>

            <h1 className='navbar__logo'>Eclipse Games</h1>

            <div className='navbar__links'>
              <p className='navbar__links--register'><a href='#login' > Register </a></p>
              <div />
              <p className='navbar__links--signIn'><a href='#signup' >Sign In</a></p>
              <div />
              <a href="#cart"><ShoppingCartOutlinedIcon className='x'/></a>
            </div>


            <div className='navbar__smallScreen'>
              <div className='navbar__x'>
                <a href="#cart"><ShoppingCartOutlinedIcon className='y'/></a>
                <p onClick={() => setToggleMenu(true)}><MenuIcon color='#fff' className='x'/></p>
              </div>
              
              {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                  <div className='app__navbar-smallscreen_overlay--icons'>
                    <ShoppingCartOutlinedIcon />
                    <p className='overlay__close' onClick={() => setToggleMenu(false)}><CloseIcon color='#fff'className='x'/></p>
                  </div>
                  
      
                  <ul className='app__navbar-smallscreen-links'>
                    <li className='link__items'><a href='#home'>Account</a><ExpandMoreIcon /></li>
                    <div />
                    <li className='link__items'><a href='#about'>Store</a><ExpandMoreIcon /></li>
                    <div />
                    <li className='link__items'><a href='#about'>Community</a><ExpandMoreIcon /></li>
                    <div />
                    <li className='link__items'><a href='#menu'>News</a><ExpandMoreIcon /></li>
                    <div />
                    <li className='link__items'><a href='#contact'>Support</a><ExpandMoreIcon /></li>
                    <div />
                  </ul>
      
                  <div className='app__navbar-mobileLinks-two'>
                    <button className='app__navbar-links-two-login custom__button' id='mobileLogin'><a href='#login'> Login </a></button>
                    <div />
                    <button className='app__navbar-links-two-signup'><a href='#signup'> Sign Up</a></button>
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