import React, { useContext, useEffect } from 'react';
import { CartProductsContext } from '../context/cartProducts';

import ShoppingCartItem from './shopping-cart-item';

const ShoppingCart = () => {
  const [cartProducts] = useContext(CartProductsContext);

  useEffect(() => console.log(cartProducts));

  return (
    <div>
      <h1 className='mb-5'>Shopping Cart</h1>
      {cartProducts.map((prod) => (
        <ShoppingCartItem key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ShoppingCart;
