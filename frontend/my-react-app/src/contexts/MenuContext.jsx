import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);

  const addMenu = (menu) => setMenus(prevMenus => [...prevMenus, menu]);
  const removeMenu = (menuId) => setMenus(prevMenus => prevMenus.filter(menu => menu.id !== menuId));
  const clearMenus = () => setMenus([]);

  return (
    <MenuContext.Provider value={{ menus, addMenu, removeMenu, clearMenus }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuContext;
