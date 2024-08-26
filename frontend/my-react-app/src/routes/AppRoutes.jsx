import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RestaurantDetailPage from '../pages/RestaurantDetailPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import Navbar from '../components/Navbar'; 
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';


const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
    
    </Routes>
    </>
  );
};

export default AppRoutes;

