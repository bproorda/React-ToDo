import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import { SettingsProvider } from './contexts/settings';
import { AuthProvider } from './contexts/auth.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <SettingsProvider>
    <App />
    </SettingsProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
