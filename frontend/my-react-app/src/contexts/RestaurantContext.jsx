import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => setRestaurants(prevRestaurants => [...prevRestaurants, restaurant]);
  const removeRestaurant = (restaurantId) => setRestaurants(prevRestaurants => prevRestaurants.filter(restaurant => restaurant.id !== restaurantId));
  const clearRestaurants = () => setRestaurants([]);

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, removeRestaurant, clearRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RestaurantContext;

