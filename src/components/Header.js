import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";

const Header = ({ productsInCart, setCartVisible }) => {
  return (
    <nav className='header-page'>
      <Link to="/cart" >
      <button className="shopping-cart-btn" onClick={() => setCartVisible(true)}>
        <BsFillCartFill size={30} />
        {productsInCart.length > 0 && (<span className="product-count">{productsInCart.length}</span>)}
      </button>
      </Link>
      <h1 className='header-text'>THE MILK STORE</h1>
      <img className='header-logo' src="/imgs/AIKA-logos_transparent.png" alt='logo-Milk' />
    </nav>
  );
}

export default Header;
