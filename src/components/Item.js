import React, { useState } from "react";




function Item({ name, category }) {
  
    const[isInCart, setIsInCart] = useState(false)
  

  function handleCLick(){
    setIsInCart(prevIsInCart => !prevIsInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {isInCart ? "In-Cart" : "Not in Cart"}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="in-cart" onClick={handleCLick}>{isInCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
