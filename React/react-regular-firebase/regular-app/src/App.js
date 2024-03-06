import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import SimpleCounter from './SimpleCounter';

import Carousel from './components/Carousel';
import goyaUno from './images/Goya-1.jpg';
import goyaDos from './images/Goya-2.jpg';
import goyaTres from './images/Goya-3.jpg';
import CardsComponent from './components/CardsComponent';
import Accordion from './components/accordion'; 

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

  const sections = [
    { title: 'First title  1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  const images = [goyaUno, goyaDos, goyaTres];

  return (
    <>
      <div>
        <h1 id="main-heading" data-cy="main-heading">
          Welcome to the App
        </h1>
        <p>This web App was built using react <br/>
        native tools, so created using npx-create-react-app<br/>
        It displays simple functionality seen in others of my<br/>
        pages, but for showing i can handle them with react syntax<br/>
        and react native tools, i display functionality<br/>
        to create a user, i display a counter, an accordion<br/>
        and an image Carousel. find also some bootstrap cards  </p>
        

        <SimpleCounter data-cy="simple-counter" />

        <CardsComponent />

        <h2 id="registration-heading">
          Register a user in Google Firebase
        </h2>
        <form className="App-form" data-cy="registration-form">
          <label htmlFor="email-input" id="email-label">
            Email:
          </label>
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

          <label htmlFor="password-input" id="password-label">
            Password:
          </label>
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

          {msg === 'exito' && (
            <span id="success-message" data-cy="success-message">
              Registration successful
            </span>
          )}
          {msg === 'error' && (
            <span id="error-message" data-cy="error-message">
              Error occurred during registration
            </span>
          )}

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

      <div>
        <h1>Accordion</h1>
        <Accordion sections={sections} />
      </div>

      <div>
        <h1>Image Carousel</h1>
        <Carousel images={images} />
      </div>
    </>
  );
}

export default App;
