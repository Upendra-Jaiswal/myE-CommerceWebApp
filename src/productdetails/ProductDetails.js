import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>this is product</p>
    </div>
  );
};

export default ProductDetails;
