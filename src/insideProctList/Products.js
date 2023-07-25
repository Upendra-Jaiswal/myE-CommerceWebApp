import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, onCardClick, addToCart }) => {
  return (
    <div>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => onCardClick(product)}
            addToCart={addToCart}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

//notes
/* The map function is a higher-order function available in JavaScript arrays. 
  It allows you to iterate over each element of an array and apply a transformation
  function to create a new array based on the original elements. In the context of 
  the code snippet you provided, products.map() is used to iterate over the products 
  array and generate a list of ProductCard components based on each product in the array.

  Let's break down the map function and understand the arguments:



  1. `products`: This is the array that you want to iterate over. 
  It is assumed that `products` is an array of objects, with each object representing a product.

  2. `.map()`: This is the `map` function applied to the `products` array. 
  It takes a callback function as an argument and returns a new array containing 
  the results of applying the callback function to each element of the original array.

  3. `(product, index) => ( ... )`: This is the callback function passed to the `map` function. 
  The `map` function will call this callback function for each element in the `products` array,
  passing the current element (`product`) and its index (`index`) as arguments.

  4. `<ProductCard ... />`: This is the JSX element returned by the callback function. 
  For each `product` in the `products` array, this JSX element creates a `ProductCard` component 
  and passes various props to it.

  - `key={index}`: The `key` prop is used to uniquely identify each `ProductCard` component in the 
  list. As we discussed earlier, using the index as the key is not recommended for dynamic lists that 
  can change order.

  - `product={product}`: The `product` prop is passed to each `ProductCard` component, allowing it to 
  access the specific product data for rendering.

  - `onClick={() => onCardClick(product)}`: This sets the `onClick` event of each `ProductCard` to
  call the `onCardClick` function with the corresponding `product` as an argument when the user clicks 
  on a product card.

  - `addToCart={addToCart}`: The `addToCart` prop is passed down to each `ProductCard` component,
  enabling it to use the `addToCart` function when the user interacts with the "Add to Cart" button 
  or any other suitable action.

  In summary, the `map` function is used to iterate over the `products` array, and for each product,
  a `ProductCard` component is created with specific props based on the product's data and its position 
  in the array (index).
  */
