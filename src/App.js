import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Categories, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Slider } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Slider />
    <Categories />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
