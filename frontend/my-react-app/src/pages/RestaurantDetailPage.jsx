import { useEffect, useState } from 'react';
import { List, Button } from 'antd';
import axios from 'axios';
import { useCart } from '../Contexts/CartContext';
import { useParams, useNavigate } from 'react-router-dom';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/menus/${id}`);
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, [id]);

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.menuid, 
      name: item.itemname,
      price: item.itemprice,
      quantity: 1,
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Restaurant Menu</h2>
      <List
        bordered
        dataSource={menuItems}
        renderItem={(item) => (
          <List.Item key={item.menuid} actions={[
            <Button
              key={`btn-${item.menuid}`}
              type="primary"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </Button>
          ]}>
            {item.itemname} - ${item.itemprice}
          </List.Item>
        )}
      />
    </div>
  );
};

export default RestaurantDetailPage;
