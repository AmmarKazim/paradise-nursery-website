import React, { useContext, useEffect, useState } from "react";
import CartItemsContext from "../../models/cartItemsContext";
import { allProducts } from "../../models/products";

function ProductTile({ name, image, price, description }) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);

  useEffect(() => {
    const alreadyAdded = cartItems.find((item, i) => item.name == name);
    if (alreadyAdded) {
      setIsAlreadyAdded(true);
    } else {
      setIsAlreadyAdded(false);
    }
  }, [cartItems, name]);

  return (
    <article className="bg-white shadow card p-3 m-3 rounded d-inline-flex flex-column justify-content-center align-items-center productTile">
      <span className="bg-danger py-1 px-3 text-light rounded saleBanner">
        Sale
      </span>
      <h5>{name}</h5>
      <img src={image} alt="plant image" />
      <h6 className="text-danger">${price}</h6>
      <p>{description}</p>
      <button
        className={`btn btn-success ${isAlreadyAdded && "disabled"}`}
        onClick={(e) => {
          e.stopPropagation();
          if (!isAlreadyAdded) {
            setCartItems((carItems) => [
              ...carItems,
              { name: name, image: image, price: price, quantity: 1 },
            ]);
          }
        }}
      >
        {isAlreadyAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </article>
  );
}

export default ProductTile;
