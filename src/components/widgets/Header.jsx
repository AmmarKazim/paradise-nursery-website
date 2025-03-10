import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartItemsContext from "../../models/cartItemsContext";

function Header() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    //TODO: calculate total articles in cart items
    if (cartItems.length > 0) {
      let _totalCartItems = 0;
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        _totalCartItems += item.quantity;
      }
      setTotalCartItems(_totalCartItems);
    }
  }, [cartItems]);

  return (
    <header className=" bg-success p-3">
      <nav className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <section className="d-flex text-light brand">
            <div className="bg-light px-3 rounded-circle">
              <i className="bi bi-tree-fill text-success fs-1"></i>
            </div>
            <div className="brandName">
              <h3 className="m-0 p-0">Paradise Nursery</h3>
              <p className="m-0 p-0">Where Green Meets Serenity</p>
            </div>
          </section>
        </NavLink>
        <NavLink className="text-light fs-2" to="/products">
          Plants
        </NavLink>
        <NavLink className="text-light cartIcon" to="/cart">
          <i className="bi bi-cart fs-1"></i>

          <span className="cartItemsCount">{totalCartItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
