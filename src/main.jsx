import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import { ShopProvider } from './Context/ShopContext.jsx'; // ⬅️ Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </ShopProvider>
  </StrictMode>
);
