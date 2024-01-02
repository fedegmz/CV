// Importa createRoot desde react-dom/client
import { createRoot } from 'react-dom/client';

// Resto de tus importaciones
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/js/indice';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderToString } from 'react-dom/server';

const root = document.getElementById('root');
const rootInstance = createRoot(root);

  // Usa rootInstance.render en lugar de ReactDOM.render
  rootInstance.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

document.addEventListener('DOMContentLoaded', () => {
  // Crea una instancia de createRoot
  const moonIcon = <FontAwesomeIcon icon={faMoon} className="moon-icon" />;
  const sunIcon = <FontAwesomeIcon icon={faSun} className="sun-icon" />;
  const modeSwitch = document.getElementById('modeSwitch');
  let localConfig = localStorage.getItem('tema');

  if (modeSwitch && localConfig === 'dark') {
    modeSwitch.innerHTML = "";
  } else if (modeSwitch && localConfig === 'light') {
    modeSwitch.innerHTML = "";
  }

  serviceWorkerRegistration.register();
  reportWebVitals();
});