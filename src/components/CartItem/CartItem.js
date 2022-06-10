import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
      <p>Producto: {item.title}</p>
      <p>Precio: {item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Cantidad: {item.quantity}</p>
    </div>
  );
}

export default CartItem