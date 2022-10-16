import { React, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1><a href='#home'>Koiyn</a></h1>
      </div>
      <ul className='app__navbar-links-one'>
        <li className='p__opensans'><a href='#home'>Buy Crypto</a></li>
        <li className='p__opensans'><a href='#about'>Market</a></li>
        <li className='p__opensans'><a href='#menu'>Trade</a></li>
        <li className='p__opensans'><a href='#contact'>Earn</a></li>
        <li className='p__opensans'><a href='#more'>More</a></li>
      </ul>
      
      <div className='app__navbar-links-two'>
        <button className='app__navbar-links-two-login'><a href='#login' className=''> Login </a></button>
        <div />
        <button className='app__navbar-links-two-signup'><a href='#signup' className=''>Sign Up</a></button>
      </div>

      <div className='app__navbar-smallscreen'>
        <p onClick={() => setToggleMenu(true)}><MenuIcon className='x'/></p>
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <p className='overlay__close' onClick={() => setToggleMenu(false)}><CloseIcon/></p>

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
  )
};

export default Navbar;
