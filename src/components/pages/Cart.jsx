import React, { useContext, useEffect, useState } from "react";
import Header from "../widgets/Header";
import CartItemsContext from "../../models/cartItemsContext";
import products, { allProducts } from "../../models/products";
import CartItemTile from "../widgets/CartItemTile";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let _cartTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      _cartTotal = _cartTotal + cartItem.quantity * cartItem.price;
    }
    setCartTotal(_cartTotal);
  }, [cartItems]);

  return (
    <main>
      <Header />
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-5">Total Cart Amount: ${cartTotal}</h2>
        {cartItems.map((item, i) => (
          <CartItemTile
            key={i}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <NavLink
          className="btn btn-success btn-lg py-3 px-5 mt-5"
          to="/products"
        >
          Continue Shopping
        </NavLink>
        <button
          className={`btn btn-success btn-lg py-3 px-5 mt-5 ${
            cartTotal == 0 && "disabled"
          }`}
          onClick={(e) => {
            Swal.fire({
              icon: "success",
              title: "Thank You!",
              text: "We appreciate you shopping with us.",
              confirmButtonColor: "green",
            });
            setCartItems([]);
          }}
        >
          Checkout
        </button>
      </section>
    </main>
  );
}

export default Cart;
