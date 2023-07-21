import React from "react";
import "./css/cart.css";

const Cart = ({
  onClose,
  cartItems,
  removeFromCart,
  removeAll,
  placeOrder,
  orderPlaced,
  emptyCart,
}) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {/* Cart content goes here */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div class="item-container">
                <span class="item-name">{item.description}</span>
                <span class="item-price">$ {item.price}</span>

                <span class="remove-item">
                  {" "}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="Button Remove-Button"
                  >
                    Remove
                  </button>{" "}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div>
        {" "}
        {emptyCart ? (
          ""
        ) : (
          <div>
            <div>
              <p>
                {" "}
                {orderPlaced ? (
                  ""
                ) : (
                  <p> Total price : ${calculateTotalPrice().toFixed(2)} </p>
                )}
              </p>
            </div>
            <div>
              {orderPlaced ? (
                "order is placed"
              ) : (
                <button onClick={placeOrder} className="Button Place-Order">
                  Place Order
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="close-button-container">
        <button onClick={onClose} className="Button Close-Button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
