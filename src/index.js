import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mo2hdes2lkp53k2h.us.auth0.com"
      clientId="miYHDU0BH7A9TM7e1G4x8zoeCnfpUQ4U"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
