import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PromoCodeProvider } from './context/PromoCodeContext';

ReactDOM.render(
  <PromoCodeProvider>
    <App />
  </PromoCodeProvider>,
  document.getElementById('root')
);
