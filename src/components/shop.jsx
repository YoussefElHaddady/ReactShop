import React, { useEffect, useState } from 'react';

import ProductCard from './product-card';

const Shop = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    console.log(products);
    setProducts(products);
  };

  return (
    <div>
      <h1 className='mb-5'>Our products</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
