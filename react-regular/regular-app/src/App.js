import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import SimpleCounter from './Gallery';
import MyCardComponent from './cards';
import MyComponent from './cards';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const registrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg('exito');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMsg('error');
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 id="main-heading" data-cy="main-heading">Welcome to the test app</h1>
        <h2 id="registration-heading">Register a user in Google Firebase</h2>

        <SimpleCounter data-cy="simple-counter" />

        <MyComponent/>

        <h2 id="registration-heading" data-cy="registration-heading">Register a user in Google Firebase</h2>
        <form className="App-form" data-cy="registration-form">
          <label htmlFor="email-input" id="email-label">Email:</label>
          <input
            type="email"
            id="email-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="app-form-input"
            placeholder="Enter your email"
            data-cy="email-input"
            aria-labelledby="email-label"
          />

          <label htmlFor="password-input" id="password-label">Password:</label>
          <input
            type="password"
            id="password-input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="app-form-input"
            placeholder="Enter your password"
            data-cy="password-input"
            aria-labelledby="password-label"
          />

          {msg === 'exito' && <span id="success-message" data-cy="success-message">Registration successful</span>}
          {msg === 'error' && <span id="error-message" data-cy="error-message">Error occurred during registration</span>}

          <button
            onClick={registrar}
            type="button"
            className="app-form-button"
            data-cy="register-button"
            aria-live="assertive"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
