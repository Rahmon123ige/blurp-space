import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import { ShopProvider } from './Context/ShopContext.js'; // ⬅️ Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ShopProvider> */}
      <App />
    {/* </ShopProvider> */}
  </StrictMode>
);
