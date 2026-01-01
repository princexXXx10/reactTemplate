import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1><Link to='/'>Koiyn</Link></h1>
      </div>
      <ul className='app__navbar-links-one'>
        <li className='link__item'><Link to='/'>Home</Link></li>
        <li className='link__item'><Link to='/market'>Market</Link></li>
        <li className='link__item'><a href='#trade'>Trade</a></li>
        <li className='link__item'><a href='#earn'>Earn</a></li>
        <li className='link__item'><a href='#more'>More</a></li>
      </ul>
      
      <div className='app__navbar-links-two'>
        <Link to='/login' className='app__navbar-links-two-login'>Login</Link>
        <div />
        <Link to='/register' className='app__navbar-links-two-signup'>Sign Up</Link>
      </div>

      <div className='app__navbar-smallscreen'>
        <p onClick={() => setToggleMenu(true)}><MenuIcon className='x'/></p>
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <p className='overlay__close' onClick={() => setToggleMenu(false)}><CloseIcon/></p>

            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><Link to='/' onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li className='p__opensans'><Link to='/market' onClick={() => setToggleMenu(false)}>Market</Link></li>
              <li className='p__opensans'><a href='#trade' onClick={() => setToggleMenu(false)}>Trade</a></li>
              <li className='p__opensans'><a href='#earn' onClick={() => setToggleMenu(false)}>Earn</a></li>
              <li className='p__opensans'><a href='#more' onClick={() => setToggleMenu(false)}>More</a></li>
            </ul>

            <div className='app__navbar-mobileLinks-two'>
              <Link to='/login' className='app__navbar-links-two-login' id='mobileLogin' onClick={() => setToggleMenu(false)}>Login</Link>
              <div />
              <Link to='/register' className='app__navbar-links-two-signup' onClick={() => setToggleMenu(false)}>Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
