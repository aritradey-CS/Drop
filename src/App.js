// src/App.js
import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <div className="sections">
        <Login />
        <div className="section-transition">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
