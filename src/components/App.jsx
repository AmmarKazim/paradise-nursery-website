import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CartItemsContext from "../models/cartItemsContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <CartItemsContext.Provider
        value={{ cartItems: cartItems, setCartItems: setCartItems }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />{" "}
        </Routes>
      </CartItemsContext.Provider>
    </>
  );
}

export default App;
