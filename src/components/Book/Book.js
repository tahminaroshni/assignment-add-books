import React from 'react';
import './Book.css'

const Book = (props) => {
  // console.log(props);
  const { name, img, author, publishedDate, price } = props.book;
  const { handleAddToCart } = props;

  return (
    <div className='book'>
      <div className='book-img'>
        <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p style={{ margin: 0 }}>{author}, {publishedDate}</p>
      <h3>Price: ${price}</h3>
      <button
        style={{ backgroundColor: '#222', color: '#aaa', padding: '5px 25px', borderRadius: '3px' }}
        onClick={() => handleAddToCart(props.book)}>Add To Cart</button>
    </div>
  );
};

export default Book;