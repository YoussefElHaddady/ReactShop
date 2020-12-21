import React, { useContext, useEffect } from 'react';
import { CartProductsContext } from '../context/cartProducts';

import ShoppingCartItem from './shopping-cart-item';
import ShoppingCartTotalPrice from './shopping-cart-total-price';

const ShoppingCart = () => {
  const [cartProducts] = useContext(CartProductsContext);

  return (
    <div>
      <h1 className='mb-5'>Shopping Cart</h1>
      {cartProducts.map((prod) => (
        <ShoppingCartItem key={prod.id} product={prod} />
      ))}
      <ShoppingCartTotalPrice />
    </div>
  );
};

export default ShoppingCart;
