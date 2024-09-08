import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the App component
import './index.css';  // Optionally include your stylesheets

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
