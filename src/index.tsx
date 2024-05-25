import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.css';
import './utils/fixLeafletIcon';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

