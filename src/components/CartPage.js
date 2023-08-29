
// CartPage.js
import React from 'react';
import Cart from './Cart'; // Import your Cart component

const CartPage = ({ productsInCart, setCartVisible, onQuantityChange, onProductRemove, addProductToCart }) => {
  return (
    <div>
      {/* You can add any cart page content here */}
      <h2>Your Cart</h2>
      <Cart
        cartsVisibility={true} // You can set this to true when the cart page is active
        productsInCart={productsInCart}
        setCartVisible={setCartVisible}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        addProductToCart={addProductToCart}
      />
    </div>
  );
};

export default CartPage;





