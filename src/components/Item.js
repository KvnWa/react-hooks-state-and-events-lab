import React, { useState } from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function addToCart() {
    setIsInCart(isInCart => !isInCart)

  }

  const color = isInCart ? 'in-cart' : ''

  const text = isInCart ? 'Remove from Cart' : 'Add to Cart'

  const buttonColor = isInCart ? 'remove' : 'add'

  return (
    <li className={color}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={addToCart}>{text}</button>
    </li>
  );
}

export default Item;
