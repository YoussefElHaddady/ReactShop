import React, { useContext } from 'react';

import { CartProductsContext } from '../context/cartProducts';

import { Link } from 'react-router-dom';

const ProductCard = ({ prod }) => {
  const [cartProducts, setCartProducts] = useContext(CartProductsContext);

  const addToCart = (p) => {
    const cp = [...cartProducts];
    const foundProd = cp.find((pp) => pp.id === p.id);

    if (foundProd) {
      foundProd.quantity++;
      setCartProducts([...cp]);
    } else {
      p.quantity = 1;
      setCartProducts([...cp, p]);
    }
  };

  return (
    <div className='card mx-4 my-3' style={{ width: '18rem' }}>
      <img
        src={prod.image}
        alt={prod.title}
        className='card-img-top'
        style={{
          objectFit: 'contain',
          maxHeight: '20rem',
          height: '20rem',
        }}
      />
      <div className='card-body'>
        <h5
          className='card-title overflow-hidden'
          style={{
            maxHeight: '3rem',
            height: '3rem',
            minHeight: '3rem',
          }}
        >
          {prod.title}
        </h5>
        <h6 className='card-subtitle mb-2 mt-2' style={{ color: 'green' }}>
          {prod.price} $
        </h6>
        <p
          className='card-text overflow-hidden'
          style={{
            height: '3rem',
            minHeight: '1rem',
            whiteSpace: 'normal',
            textOverflow: 'ellipsis',
          }}
        >
          {prod.description}
        </p>
        <button className='btn btn-primary' onClick={(e) => addToCart(prod)}>
          Add to my cart
        </button>
        <Link to={`/products/${prod.id}`} className='card-link ml-3'>
          Details...
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
