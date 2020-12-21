import React, { useContext } from 'react';

import { CartProductsContext } from '../context/cartProducts';

import { Link } from 'react-router-dom';

const NavBar = () => {
  const [products] = useContext(CartProductsContext);

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        ReactShop
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/products' className='nav-link'>
              Shop
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/cart' className='nav-link'>
              Cart{' '}
              <span className='badge badge-pill badge-secondary'>
                {products.length}
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
