import React from 'react';

import { Footer, About, Contact } from './container';
import { Navbar, Slider } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Slider />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default App;
