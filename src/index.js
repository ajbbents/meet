import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
// import * as serviceWorker from './service-worker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.register();
serviceWorkerRegistration.register();

reportWebVitals();

atatus.config('b3a460cacbfa47ca936d55523d3c31d6').install();
