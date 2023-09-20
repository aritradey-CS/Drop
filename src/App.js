// src/App.js
import React, { useState } from 'react';
import './App.css';
// import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <div className="app">
      <div className="background"></div>
      <div className="sections">
        <Signup />
        <div className={`section login ${loginVisible ? 'visible' : ''}`}>
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <button className="toggle-btn" onClick={toggleLogin}>
          {loginVisible ? 'Hide Login' : 'Show Login'}
        </button>
      </div>
    </div>
  );
}

export default App;
