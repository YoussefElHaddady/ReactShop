import React from 'react';

import ShoppingCartItem from './shopping-cart-item';

const ShoppingCart = () => {
  return (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <ShoppingCartItem></ShoppingCartItem>
      <ShoppingCartItem></ShoppingCartItem>
      <ShoppingCartItem></ShoppingCartItem>
      <ShoppingCartItem></ShoppingCartItem>
    </React.Fragment>
  );
};

export default ShoppingCart;
