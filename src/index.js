import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './components/App';

const domain = 'dev-16x-ihqq.us.auth0.com';
const clientID = 'UMaosArS46jlBu8qKrt62Ppk70B6lYOr';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


