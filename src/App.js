import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Login from './login';
import Signup from './signup';
import './App.css';

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="app-container">
          {user ? (
            // Authenticated user content
            <div>
                
              <h1>Welcome, {user.username}!</h1>
              {/* Add your main app content here */}
              <button onClick={signOut}>Sign Out</button>
            </div>
          ) : (
            // Unauthenticated user content
            <div>
              <Login />
              <Signup />
            </div>
          )}
        </div>
      )}
    </Authenticator>
  );
};

export default App;