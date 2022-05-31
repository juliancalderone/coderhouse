import React from "react"
import  { CartContext } from "../../context/CartContext"
import "./CartWidget.scss"

export default function CartWidget() {
  const { cart } = React.useContext(CartContext);
  return (
    <>
      <div className="cart">
        <img height={25} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" />
        <span className="cart__counter">{cart.length}</span>
      </div>
    </>
  )
}