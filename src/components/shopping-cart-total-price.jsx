import React, { useContext } from 'react';
import { CartProductsContext } from '../context/cartProducts';

const ShoppingCartTotalPrice = () => {
  const [cartProducts, setCartProducts] = useContext(CartProductsContext);

  const totalPrice = () => {
    let sum = 0;
    cartProducts.map((p) => (sum += p.price * p.quantity));
    return sum;
  };

  return (
    <div className='mt-4'>
      <h2>Total : {totalPrice()}</h2>
    </div>
  );
};

export default ShoppingCartTotalPrice;
