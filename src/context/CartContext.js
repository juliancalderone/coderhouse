import React, { useState } from "react"

const CartContext = React.createContext()
const { Provider } = CartContext

const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    if (isInCart(item.productId)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.productId) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart);
  };

  const deteleAll = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deteleAll,
      isInCart,
      cart
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}