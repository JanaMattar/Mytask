import { useContext } from 'react';
import RestaurantContext from './RestaurantContext';

export const useRestaurants = () => useContext(RestaurantContext);
