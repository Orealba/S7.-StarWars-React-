import './index.css';
import App from './App.tsx';
import 'flowbite/dist/flowbite.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
