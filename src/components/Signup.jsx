// src/components/Signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [showExtendedFields, setShowExtendedFields] = useState(false);

  const toggleFields = () => {
    setShowExtendedFields(!showExtendedFields);
  };

  return (
    <div className="section">
      <h2>Create New Account</h2>
      {showExtendedFields ? (
        <form>
          <label>
            User Name:
            <input type="text" />
          </label>
          <label>
            User ID:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <label>
            Mobile Number:
            <input type="text" />
          </label>
          <label>
            Email ID:
            <input type="text" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <div>
          {/* Basic fields */}
          <p>Basic Fields</p>
          <button onClick={toggleFields}>Show Extended Fields</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
