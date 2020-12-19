import React, { useEffect, useState } from 'react';

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
      <h1>Shop</h1>
      {products.map((prod) => (
        <h2 key={prod.id}>{prod.title}</h2>
      ))}
    </div>
  );
};

export default Shop;
