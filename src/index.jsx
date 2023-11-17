import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductProvider from './components/context/ProductContext';
import CartProvider from './components/context/CartContext';
import App from './App';
import ModalProvider from './components/context/ModalContext';
import Cart from './components/cart/Cart';
import './index.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
          <Cart />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </ModalProvider>,
);
