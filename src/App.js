import React from 'react';

import { Footer, Categories, Product, Newsletter } from './container';
import { Navbar, Slider } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Slider />
    <Categories />
    <Product />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
