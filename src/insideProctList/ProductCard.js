import React from "react";
import "../css/productcard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price">Price: ${product.price}</p>
        <button onClick={() => addToCart(product)} className="AddCartButton">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
