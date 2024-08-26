import { List, Button, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../Contexts/CartContext'; 

const ShoppingCartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, createOrder } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const newOrder = createOrder();
    navigate('/order-confirmation', { state: { order: newOrder } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <List
        bordered
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button key={`remove-${item.id}`} onClick={() => removeFromCart(item.id)}>Remove</Button>,
              <InputNumber
                key={`quantity-${item.id}`}
                min={1}
                value={item.quantity}
                onChange={(value) => updateQuantity(item.id, value)}
              />,
            ]}
          >
            {item.name} x {item.quantity} - ${item.price.toFixed(2)}
          </List.Item>
        )}
      />
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <Button type="primary" onClick={handleCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
