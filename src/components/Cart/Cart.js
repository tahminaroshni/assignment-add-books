import React from 'react';
import { restoreFromLocalStorage } from '../local-storage/localStorage';
import './Cart.css'

const Cart = (props) => {
  const { carts } = props;

  let cartsQuantity = 0;
  let totalPrice = 0;
  const myCart = restoreFromLocalStorage();
  for (const key in myCart) {
    const cartQuantity = myCart[key];
    console.log(cartQuantity);
    cartsQuantity += cartQuantity;
    const cart = carts.find(cart => cart.name === key);
    console.log(cart);
    if (cart) {
      const cartPrice = cart.price;
      const cartsPrice = cartQuantity * cartPrice;
      totalPrice += cartsPrice;
    }
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