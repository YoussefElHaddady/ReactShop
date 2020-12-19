import React from 'react';

const ProductCard = ({ prod }) => {
  return (
    <div className='card mx-4 my-3' style={{ width: '18rem' }}>
      <img
        src={prod.image}
        alt={prod.title}
        className='card-img-top'
        style={{ objectFit: 'contain', maxHeight: '20rem', height: '20rem' }}
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
          style={{ maxHeight: '5rem', height: '5rem', minHeight: '5rem' }}
        >
          {prod.description}
        </p>
        <button className='btn btn-primary'>Add to my cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
