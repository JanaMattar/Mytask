import { Card, List, Typography, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { order } = location.state?.order|| {};

  if (!order || !order.items) {
    return <div>Loading...</div>; 
  }

  const totalAmount = order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Card title="Order Confirmation" bordered={false}>
        <Typography.Title level={4}>Thank you for your order!</Typography.Title>
        <Typography.Paragraph>
          Your order ID is <strong>{order.orderId}</strong>.
        </Typography.Paragraph>
        <Typography.Paragraph>Status: <strong>{order.status}</strong></Typography.Paragraph>

        <List
          header={<strong>Order Summary</strong>}
          bordered
          dataSource={order.items}
          renderItem={(item) => (
            <List.Item key={item.name}>
              <Typography.Text>{item.name} x {item.quantity}</Typography.Text>
              <Typography.Text strong style={{ float: 'right' }}>
                ${item.price.toFixed(2)}
              </Typography.Text>
            </List.Item>
          )}
          footer={
            <div style={{ textAlign: 'right', fontSize: '16px' }}>
              <strong>Total: ${totalAmount}</strong>
            </div>
          }
        />

        <Link to="/">
          <Button type="primary" block style={{ marginTop: '20px' }}>
            Continue Shopping
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default OrderConfirmationPage;

