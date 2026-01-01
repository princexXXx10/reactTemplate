import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Market from './pages/Market';
import './App.css';

const App = () => {
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      document.body.style.setProperty('--x', `${clientX}px`);
      document.body.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="spotlight-overlay"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  )
};

export default App;
