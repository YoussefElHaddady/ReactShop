import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class='navbar navbar-expand-md navbar-light bg-light'>
      <Link to='/' class='navbar-brand'>
        ReactShop
      </Link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarText'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <Link to='/' class='nav-link'>
              Shop
            </Link>
          </li>
          <li class='nav-item'>
            <Link to='/cart' class='nav-link'>
              Cart
            </Link>
          </li>
          <li class='nav-item'>
            <Link to='/about' class='nav-link'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
