import React from 'react';

import { Footer, AboutUs, Contact, Menu } from './container';
import { Navbar, Slider } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Slider />
    <AboutUs />
    <Menu />
    <Contact />
    <Footer />
  </div>
);

export default App;
