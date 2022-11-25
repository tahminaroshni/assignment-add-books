const getCart = () => {
  const myCart = localStorage.getItem('cart');
  return myCart;
}

const addToLocalStorage = (name) => {
  getCart();
  let cart = {};
  if (getCart()) {
    cart = JSON.parse(getCart());
    if (cart[name]) {
      cart[name] = cart[name] + 1;
    }
    else {
      cart[name] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else {
    cart[name] = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

const restoreFromLocalStorage = () => {
  const myCart = JSON.parse(getCart());
  return myCart;
}

export { addToLocalStorage, restoreFromLocalStorage };