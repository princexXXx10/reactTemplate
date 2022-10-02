import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Categories, Intro, Product, SpecialMenu } from './container';
import { Navbar, Slider } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Slider />
    <Categories />
    <Product />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <FindUs />
    <Footer />
  </div>
);

export default App;
