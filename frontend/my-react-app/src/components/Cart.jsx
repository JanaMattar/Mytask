import { Button, List, Typography } from 'antd';
import { useCart } from '../Contexts/useCart';

const { Title } = Typography;

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  console.log('Cart items:', cart);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Shopping Cart</Title>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={(item) => (
              <List.Item
                key={item.menuid}
                actions={[
                  <Button
                    key={`remove-${item.menuid}`}
                    type="link"
                    onClick={() => removeFromCart(item.menuid)}
                  >
                    Remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={`$${item.price.toFixed(2)} x ${item.quantity}`}
                />
              </List.Item>
            )}
          />
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <Title level={4}>Total: ${getTotalPrice().toFixed(2)}</Title>
            <Button
              type="primary"
              onClick={clearCart}
              style={{ marginTop: '20px' }}
            >
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
