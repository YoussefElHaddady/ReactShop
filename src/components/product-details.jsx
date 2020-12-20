import React, { useEffect, useState } from 'react';

const ProductDetails = ({ match }) => {
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/${match.params.id}`
      );
      const product = await data.json();
      setProduct(product);
    };

    fetchProduct();
  }, []);

  const [product, setProduct] = useState({});

  return (
    <div className=''>
      {!product ? <h1>No item founded</h1> : <h1>{product.title}</h1>}
    </div>
  );
};

export default ProductDetails;
