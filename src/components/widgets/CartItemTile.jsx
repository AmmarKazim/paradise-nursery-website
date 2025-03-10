import React, { useContext, useEffect, useState } from "react";
import CartItemsContext from "../../models/cartItemsContext";
import { allProducts } from "../../models/products";

function CartItemTile({ name }) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    if (cartItems.length > 0) {
      const _cartItem = cartItems.find((item, i) => item.name == name);
      setCartItem(_cartItem);
    }
  }, [cartItems, name]);

  return (
    <article className="w-50 d-flex shadow my-3 cartTile flex-wrap">
      <img src={cartItem.image} alt={cartItem.name} />
      <div className="ps-5 py-3">
        <h4>{cartItem.name}</h4>
        <p className="fw-bold">${cartItem.price}</p>
        <button
          className="btn btn-outline-secondary"
          onClick={(e) => {
            // e.stopPropagation();
            let currentItem = cartItems.find(
              (item, i) => item.name == cartItem.name
            );
            let _cartItems = cartItems.filter(
              (item, i) => item.name !== currentItem.name
            );
            if (currentItem.quantity > 1) {
              setCartItems([
                ..._cartItems,
                { ...currentItem, quantity: currentItem.quantity - 1 },
              ]);
              setCartItem((prev) => {
                return { ...prev, quantity: prev.quantity - 1 };
              });
            } else {
              setCartItems(_cartItems);
            }
          }}
        >
          <i className="bi bi-dash"></i>
        </button>
        <span className="px-2">{cartItem.quantity}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={(e) => {
            // e.stopPropagation();
            let currentItem = cartItems.find(
              (item, i) => item.name == cartItem.name
            );
            let _cartItems = cartItems.filter(
              (item, i) => item.name !== currentItem.name
            );
            setCartItems([
              ..._cartItems,
              { ...currentItem, quantity: currentItem.quantity + 1 },
            ]);
            setCartItem((prev) => {
              return { ...prev, quantity: prev.quantity + 1 };
            });
          }}
        >
          <i className="bi bi-plus"></i>
        </button>
        <p className="fw-bold mt-2">
          Total: ${cartItem.quantity * cartItem.price}
        </p>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            let _cartItems = cartItems.filter(
              (item, i) => item.name !== cartItem.name
            );
            setCartItems(_cartItems);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default CartItemTile;
