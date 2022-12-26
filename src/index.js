import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PhoneBookApp } from 'components/PhoneBookApp/PhoneBookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneBookApp />
  </React.StrictMode>
);


