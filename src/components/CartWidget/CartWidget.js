import React from "react"
import  { CartContext } from "../../context/CartContext"
import "./CartWidget.scss"

export default function CartWidget() {
  const { itemsInCart } = React.useContext(CartContext);
  return (
    <>
      <div className="cart d-flex align-items-center">
        <img height={25} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" />
        <div className="cart__counter d-flex align-items-center justify-content-center">
          <span >{itemsInCart() || ''}</span>
        </div>
      </div>
    </>
  )
}