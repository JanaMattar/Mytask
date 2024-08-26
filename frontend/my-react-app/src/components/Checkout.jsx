import { useState } from 'react';
import { useCart } from '../Contexts/useCart';
import { useOrders } from '../Contexts/useOrders';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [orderStatus, setOrderStatus] = useState('');

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const order = {
      userId: 'some-user-id',
      items: cart,
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      status: 'Pending',
    };

    try {
      addOrder(order);
      clearCart();
      setOrderStatus('Order placed successfully!');
    } catch (error) {
      console.error('Failed to place order', error);
      setOrderStatus('Failed to place order');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.menuid}>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </li>
            ))}
          </ul>
          <button 
            onClick={handleCheckout} 
            style={{ padding: '10px 20px', fontSize: '16px' }}
          >
            Place Order
          </button>
        </>
      )}
      {orderStatus && <p style={{ color: 'green', fontWeight: 'bold' }}>{orderStatus}</p>}
    </div>
  );
};

export default Checkout;
