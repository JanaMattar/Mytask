import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRestaurants } from '../Contexts/useRestaurants';
import axios from 'axios';
import { List, Typography } from 'antd';

const { Title } = Typography;

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useRestaurants();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Failed to fetch restaurants', error);
      }
    };

    fetchRestaurants();
  }, [setRestaurants]);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Restaurants</Title>
      {restaurants.length === 0 ? (
        <p>No restaurants available.</p>
      ) : (
        <List
          itemLayout="vertical"
          dataSource={restaurants}
          renderItem={(restaurant) => (
            <List.Item key={restaurant.id}>
              <List.Item.Meta
                title={<Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>}
                description={restaurant.address}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default RestaurantList;