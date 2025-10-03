import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  
  const removeFromCart = (itemToRemove) => {
    setCartItem(prev => prev.filter(item => item.id !== itemToRemove.id));
  };
  
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

