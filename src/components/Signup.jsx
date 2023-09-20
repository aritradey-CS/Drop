// src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [showExtendedFields, setShowExtendedFields] = useState(false);

  const toggleFields = () => {
    setShowExtendedFields(!showExtendedFields);
  };

  return (
    <div className="section signup">
      <h2>Create New Account</h2>
      <div className={`form-container ${showExtendedFields ? 'extended' : 'basic'}`}>
        <form>
          <div className="form-group">
            <label>User Name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>User ID:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" />
          </div>
          {showExtendedFields && (
            <div>
              <div className="form-group">
                <label>Mobile Number:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email ID:</label>
                <input type="text" />
              </div>
            </div>
          )}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <button className="toggle-btn" onClick={toggleFields}>
        {showExtendedFields ? 'Hide Extended Fields' : 'Show Extended Fields'}
      </button>
    </div>
  );
};

export default Signup;
