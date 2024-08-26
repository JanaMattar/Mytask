import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenus } from '../Contexts/useMenus';
import axios from 'axios';

const MenuList = () => {
  const { restaurantId } = useParams();
  const { menus, setMenus } = useMenus();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(`/api/menus?restaurantId=${restaurantId}`);
        setMenus(response.data);
      } catch (error) {
        console.error('Failed to fetch menus', error);
      }
    };

    fetchMenus();
  }, [restaurantId, setMenus]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Menu</h2>
      {menus.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        <ul>
          {menus.map((item) => (
            <li key={item.menuid} style={{ marginBottom: '20px' }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuList;
