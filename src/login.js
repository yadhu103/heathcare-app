import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      // Redirect to the authenticated user's dashboard or home page
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle login error
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;