import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../index.css";

const ShoppingCard = ({
  cartsVisibility,
  productsInCart,
  setCartVisible,
  onProductRemove,
  onQuantityChange,
}) => {
  // Calculate the total price of all products in the cart
  const totalCartPrice = productsInCart.reduce((total, product) => {
    return total + 10 * product.count; // Assuming the price per product is 10 kr
  }, 0);

  return (
    <div className="modal" style={{ display: cartsVisibility ? "block" : "none" }}>
      <h2>Shopping cart</h2>
      <button className="btn close-btn" onClick={() => setCartVisible(false)}>
        <AiFillCloseCircle size={30} />
      </button>
      <div className="cart-products">
        {productsInCart.length === 0 ? (<span className="empty-text">Your basket is currently empty</span>) : (
          productsInCart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">{10 * product.count} kr</span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => onQuantityChange(product.id, event.target.value)}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return <option value={num} key={num}>{num}</option>;
                })}
              </select>
              <button className="btn remove-btn" onClick={() => onProductRemove(product)}>
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))
        )}
        {productsInCart.length > 0 && (
          <div className="total-price">Total: {totalCartPrice} kr</div>
        )}
        
      </div>
    </div>
  );
};

export default ShoppingCard;

