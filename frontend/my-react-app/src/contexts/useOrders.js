import { useContext } from 'react';
import OrderContext from './OrderContext';

export const useOrders = () => useContext(OrderContext);
