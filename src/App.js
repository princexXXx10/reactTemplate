import React from 'react';

import { Feature, Footer, Download, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Feature />
    <Download />
    <Footer />
  </div>
);

export default App;
