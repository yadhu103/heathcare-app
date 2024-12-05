import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      // Redirect to the login page or display a success message
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;