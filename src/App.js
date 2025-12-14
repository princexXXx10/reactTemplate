import React from 'react';

import { Footer, Categories, Product, Newsletter } from './container';
import { Navbar, Slider } from './components';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import Auth from './pages/Auth/Auth';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Categories />
            <Product />
            <Newsletter />
          </>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
