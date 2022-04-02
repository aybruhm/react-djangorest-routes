import React from 'react';
import './index.css';
import App from './App';


import * as ReactDOMClient from 'react-dom/client';

const app = document.getElementById('root');

// Create a root 
const root = ReactDOMClient.createRoot(app);

// Initial render: Render an element to the root.
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
)