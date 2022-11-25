import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const { carts } = props;

  let cartsQuantity = 0;
  let totalPrice = 0;

  for (const cart of carts) {
    cart.quantity = cart.quantity ? cart.quantity : 1;
    cartsQuantity += cart.quantity;
    console.log(cart.quantity, cartsQuantity);
    const cartsPrice = cart.quantity * cart.price;
    totalPrice += cartsPrice;
    console.log(cart);
  }

  // const totalPrice = carts.reduce((previous, current) => previous + current.price, 0);

  return (
    <div className='cart'>
      <h3>Books Ordered:{cartsQuantity} </h3>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <h4>Books Name
          {
            carts.map(cart => <p style={{ fontWeight: 400 }}>{cart.name}</p>)
          }
        </h4>
        <h4>Books Price
          {
            carts.map(cart => <p style={{ fontWeight: 400 }}>{cart.price}</p>)
          }
        </h4>
      </div>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  );
};

export default Cart;