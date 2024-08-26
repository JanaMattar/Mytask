import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => setOrders(prevOrders => [...prevOrders, order]);
  const removeOrder = (orderId) => setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  const clearOrders = () => setOrders([]);

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrderContext;

