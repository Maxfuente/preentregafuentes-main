import React from "react";

const CartItem = ({ id, name, price, category, quantity }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Categoría: {category}</p> 
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
    </div>
  );
};

export default CartItem


