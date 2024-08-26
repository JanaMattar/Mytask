import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'antd';
import axios from 'axios';

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/restaurants');
        console.log('Fetched restaurants:', response.data); 
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div style={{ 
      padding: '50px', 
      backgroundImage: 'url("https://images.unsplash.com/photo-1566843971552-b8142a06c0f4")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh',
    }}>
      <Row gutter={[16, 16]} justify="center">
        {restaurants.map((restaurant) => (
          <Col span={8} key={restaurant.restaurantid}>
            <Card
              title={restaurant.name}
              bordered={false}
              style={{ 
                textAlign: 'center', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: '10px',
              }}
              cover={
                <img 
  alt={restaurant.name} 
  src={restaurant.imageurl || 'https://via.placeholder.com/300x200?text=No+Image+Available'} 
  style={{ 
    height: '200px', 
    width: '100%', 
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  }} 
  onError={(e) => {
    console.error('Image failed to load:', e.target.src); 
    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available';
  }}
/>

              }
            >
              <p>{restaurant.description}</p>
              <Button type="primary">
              <Link to={`/restaurant/${restaurant.restaurantid}`} style={{ color: '#fff' }}>
  View Menu
</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

