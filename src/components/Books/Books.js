import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import { addToLocalStorage, restoreFromLocalStorage } from '../local-storage/localStorage';
import './Books.css'

const Books = () => {
  const [books, setBooks] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  useEffect(() => {
    if (books.length) {
      const myCart = restoreFromLocalStorage();
      const carts = [];
      for (const name in myCart) {
        const cart = books.find(book => book.name === name);
        cart.quantity = myCart[name];
        carts.push(cart);
      }
      setCarts(carts);
    }

  }, [books])

  const handleAddToCart = (book) => {
    setCarts([...carts, book]);
    addToLocalStorage(book.name);
  }

  return (
    <div className='books'>
      <div className="books-container">
        {
          books.map(book => <Book key={book.name} book={book} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <Cart carts={carts} />
      </div>
    </div>
  );
};

export default Books;