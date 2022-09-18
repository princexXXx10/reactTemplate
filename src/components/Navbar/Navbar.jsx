import React, { useState } from 'react';

//Import Harmburger icons later.

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo'/>
    </div>
    <ul className='app__navbar-links-one'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-links-two'>
      <button className='app__navbar-links-two-login'><a href='#login' className=''> Login </a></button>
      <div />
      <button className='app__navbar-links-two-signup'><a href='#signup' className=''>Sign Up</a></button>
    </div>

    <div className='app__navbar-smallscreen'>
      <p color='#e92121' fontSize={27} onClick={() => setToggleMenu(true)}>import hamburger</p>
      
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <p color='#e92121' fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}>import close</p>

          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
  )
};

export default Navbar;
