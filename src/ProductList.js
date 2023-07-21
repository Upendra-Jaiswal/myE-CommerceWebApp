import React, { useState } from "react";
import Filters from "./insideProctList/Filters";
import Products from "./insideProctList/Products";
import product1 from "./photos/schshampoo.jpeg";
import product2 from "./photos/lorealshampoo.jpeg";
import product3 from "./photos/senhora.jpeg";
import product4 from "./photos/Head-and-Shoulders-Dandruff-Shampoo-Original-Classic-Clean-8.45-oz6.jpg";
import product5 from "./photos/tresemme-ks-keratin-smooth-shampoo-185ml.png";
import product6 from "./photos/newish-red-onion-shampoo-for-hair-growth-and-hairfall-control-200ml-pack-of-2-product-images-orvpjwjethd-p591195181-0-202203161934.avif";
import product7 from "./photos/keshkingShampoo.jpg";
import product8 from "./photos/tryones.jpeg";
import Cart from "./Cart";
import "./css/cart.css";
import "./css/productlist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [emptyCart, setEmptyCart] = useState(true);
  const [sortBy, setSortBy] = useState(""); // State to track the sorting option

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    removeAllFromCart();
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setOrderPlaced(false);
    setEmptyCart(false);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  const generateUniqueId = () => {
    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  const originalProducts = [
    {
      id: generateUniqueId(),
      name: "Schwarzkopf Schauma Shampoo  Ultimate Shine Superfruit Shampoo",
      price: 3.24,
      description: "Schwarzkopf Schauma",
      image: product1,
      ratings: 2667,
    },
    {
      id: generateUniqueId(),
      name: "L'Oreal Paris Elvive Total Repair Shampoo ",
      price: 6.98,
      description: "L'Oreal Paris Shampoo",
      image: product2,
      ratings: 5167,
    },
    {
      id: generateUniqueId(),
      name: "SENHORA INTERNATIONAL Professional Keratin Milk Protein Collagen Argan Oil Shampoo ",
      price: 4.35,
      description: "SENHORA INTERNATIONAL",
      image: product3,
      ratings: 1089,
    },
    {
      id: generateUniqueId(),
      name: "Head & Shoulders Classic Clean 2-in-1 Anti-Dandruff Shampoo and Conditioner (250 ml)  ",
      price: 4.58,
      description: "Head & Shoulders",
      image: product4,
      ratings: 6089,
    },
    {
      id: generateUniqueId(),
      name: "TRESemme HD Hair Fall Defense Shampoo 185ml",
      price: 2.79,
      description: "TRESemme HD",
      image: product5,
      ratings: 4789,
    },

    {
      id: generateUniqueId(),
      name: "Newish Red Onion Shampoo For Hair Growth & Hairfall Control 200ml(Pack of 2)",
      price: 3.85,
      description: "Newish Red Onion Shampoo",
      image: product6,
      ratings: 1689,
    },

    {
      id: generateUniqueId(),
      name: "Kesh King Anti Hairfall Shampoo, 200ml",
      price: 1.99,
      description: "Kesh King",
      image: product7,
      ratings: 2376,
    },
    {
      id: generateUniqueId(),
      name: "Tryones Keratin Shampoo 1L and Hair fall Defense Shampoo 1L (Pack of 2)",
      price: 6.56,
      description: "Tryones Keratin",
      image: product8,
      ratings: 4749,
    },
  ];

  const [products, setProducts] = useState(originalProducts);

  // Function to handle sorting based on price
  const handleSort = (sortOrder) => {
    setSortBy(sortOrder);
    let sortedProducts = [...products];
    if (sortOrder === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "popularity") {
      sortedProducts.sort((a, b) => b.ratings - a.ratings);
    } else if (sortOrder === "default") {
      sortedProducts = originalProducts;
    }
    // Update the products array with sorted products
    setProducts(sortedProducts);
  };

  return (
    <div>
      <nav className="navbar" style={{ color: "black" }}>
        <h2>My E-commerce App</h2>
        <div className="cart-icon" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          <span className="cart-item-count">{cartItems.length}</span>
        </div>
        {showCart && (
          <Cart
            onClose={closeCart}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            placeOrder={placeOrder}
            orderPlaced={orderPlaced}
            emptyCart={emptyCart}
          />
        )}
      </nav>
      <div class="flex-container">
    <div class="left-column">
      <Filters handleSort={handleSort} sortBy={sortBy} />
    </div>
    <div class="right-column">
      <div>
        <div>
          <Products products={products} addToCart={addToCart} />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ProductList;


// <div className="product-list-container">
// <div className="product-list-filters">
//   <Filters handleSort={handleSort} sortBy={sortBy} />
// </div>
// <div className="product-list-products">
// {/* <div   style={{ flex: "80%" }}> */}
//   <div>
//     <div>
//       <Products products={products} addToCart={addToCart} />
//     </div>
//   </div>
// </div>
// </div>

// {/* <div style={{ display: "flex" }}>
// <div style={{ flex: "20%", marginRight: "20px" }}>
//   <Filters handleSort={handleSort} sortBy={sortBy} />
// </div>
// <div style={{ flex: "80%" }}>
//   <div>
//     <div>
//       <Products products={products} addToCart={addToCart} />
//     </div>
//   </div>
// </div> */}