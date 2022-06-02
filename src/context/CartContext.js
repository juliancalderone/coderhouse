import React, { useState } from "react"

const CartContext = React.createContext()
const { Provider } = CartContext

const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    if (isInCart(item.productId)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.productId === item.productId) {
          return {...cartItem, quantity: cartItem.quantity + item.quantity}
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((carItem) => carItem.id !== id));
  };

  const deteleAll = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.find(item => item.productId === id)
  }

  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0)
  }

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deteleAll,
      isInCart,
      itemsInCart,
      cart
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}