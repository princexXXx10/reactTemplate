import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.mode === 'register');

  useEffect(() => {
    // Update state if location changes
    if (location.state?.mode) {
      setIsRegister(location.state.mode === 'register');
    }
  }, [location.state]);

  useEffect(() => {
    // Set body background to black to fix navbar white corners issue
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#050505'; // Matches Auth.css background

    return () => {
      // Revert on unmount
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      <div className={`auth-box ${isRegister ? 'register-mode' : ''}`}>
        
        {/* Toggle Switch */}
        <div className="auth-toggle">
          <button 
            type="button"
            className={`auth-toggle-btn ${!isRegister ? 'active' : ''}`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button 
            type="button"
            className={`auth-toggle-btn ${isRegister ? 'active' : ''}`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        {/* Content */}
        <div className="auth-content">
          <h1 className="auth-title">
            {isRegister ? 'JOIN THE RAID' : 'WELCOME BACK'}
          </h1>
          <p className="auth-subtitle">
            {isRegister 
              ? 'Create your account and start your collection.' 
              : 'Enter the gateway to your gaming world.'}
          </p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            {isRegister && (
              <div className="input-group">
                 <input type="text" placeholder="Username" required />
                 {/* Decorative line/icon could go here */}
              </div>
            )}
            
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>

            {isRegister && (
              <div className="input-group">
                <input type="password" placeholder="Confirm Password" required />
              </div>
            )}

            <button type="submit" className="auth-submit-btn">
              {isRegister ? 'INITIATE' : 'LOGIN'}
            </button>
          </form>

          <p className="auth-footer">
            {isRegister ? 'Already a player?' : 'New to the game?'}{' '}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Login here' : 'Sign up now'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
