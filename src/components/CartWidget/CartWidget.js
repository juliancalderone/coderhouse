import React from "react"
import { Link } from "react-router-dom";
import  { CartContext } from "../../context/CartContext"
import "./CartWidget.scss"

export default function CartWidget() {
  const { itemsInCart } = React.useContext(CartContext);
  return (
    <>
      <div className="cart d-flex align-items-center">
        <Link to="/cart">
          <img height={25} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" />
        </Link>
        <div className="cart__counter d-flex align-items-center justify-content-center">
          <span >{itemsInCart() || 0}</span>
        </div>
      </div>
    </>
  )
}