import { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Header className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#001529' }}>
        <div className="logo" style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
          Logo
        </div>
        <Button
          className="menu-button"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ display: 'block', background: 'transparent', border: 'none', color: '#fff' }}
        />
        <Menu theme="dark" mode="horizontal" className="desktop-menu" style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/cart">Cart</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/checkout">Checkout</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/order-confirmation">Order Confirmation</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={onClose}
        visible={visible}
        className="mobile-menu"
        bodyStyle={{ padding: '0' }}
      >
        <Menu mode="vertical" onClick={onClose}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/cart">Cart</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/checkout">Checkout</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/order-confirmation">Order Confirmation</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
