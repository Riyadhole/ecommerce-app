
import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity), 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <div className="checkout-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Checkout;
