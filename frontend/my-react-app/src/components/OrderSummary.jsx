import { Card, List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/useCart';

const OrderSummary = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Card title="Order Summary">
        <List
          bordered
          dataSource={cart}
          renderItem={(item) => (
            <List.Item key={item.menuid}>
              {item.name} x {item.quantity} - ${item.price.toFixed(2)}
            </List.Item>
          )}
          footer={
            <div style={{ textAlign: 'right', fontSize: '16px' }}>
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          }
        />
        <Link to="/order-confirmation">
          <Button type="primary" block style={{ marginTop: '20px' }}>
            Confirm Order
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default OrderSummary;
