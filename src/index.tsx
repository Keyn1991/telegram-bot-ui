import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<div>Loading</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
