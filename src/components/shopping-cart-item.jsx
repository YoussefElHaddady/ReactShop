import React, { useContext } from 'react';
import { CartProductsContext } from '../context/cartProducts';

const ShoppingCartItem = ({ prod: product }) => {
  const [cartProducts, setCartProducts] = useContext(CartProductsContext);

  const getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += product.quantity <= 0 ? 'warning' : 'primary';
    return classes;
  };

  const handleIncreaseQte = () => {
    const cp = [...cartProducts];
    const index = cp.indexOf(product);
    cp[index] = { ...product };
    cp[index].quantity++;
    setCartProducts([...cp]);
  };

  const handleDecreaseQte = () => {
    const existedProd = cartProducts.find((p) => p.id === product.id);
    if (existedProd.quantity > 0) {
      existedProd.quantity--;
      setCartProducts([...cartProducts]);
    }
  };

  return (
    <div>
      <span>{product.title}</span>
      <button className='btn btn-secondary btn-sm' onClick={handleDecreaseQte}>
        -
      </button>
      <span className={getBadgeClasses()}>{product.quantity}</span>
      <button className='btn btn-secondary btn-sm' onClick={handleIncreaseQte}>
        +
      </button>
    </div>
  );
};

export default ShoppingCartItem;
