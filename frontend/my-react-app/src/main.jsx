import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css'; 
import { RestaurantProvider } from './Contexts/RestaurantContext';
import { MenuProvider } from './Contexts/MenuContext';
import { CartProvider } from './Contexts/CartContext'; 
import { OrderProvider } from './Contexts/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RestaurantProvider>
      <MenuProvider>
        <CartProvider> 
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartProvider>
      </MenuProvider>
    </RestaurantProvider>
  </React.StrictMode>
);
