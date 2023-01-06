import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {NotContextProvider} from "./contexts/NotContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotContextProvider>
          <App />
    </NotContextProvider> 
  </React.StrictMode>
);
