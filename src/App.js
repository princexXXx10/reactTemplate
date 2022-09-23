import React from 'react';

import { Feature, Chef, FindUs, Footer, Download, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Feature />
    <Download />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer />
  </div>
);

export default App;
