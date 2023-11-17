import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);

  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    const existItem = cart.find((item) => item.id === id);

    if (existItem) {
      const updateItem = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: existItem.amount + 1 };
        }
        return item;
      });
      setCart(updateItem);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const existItem = cart.find((item) => item.id === id);

    if (existItem.amount === 1) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } else {
      const updateItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: existItem.amount - 1 };
        }
        return item;
      });
      setCart(updateItem);
    }
  };

  const addMoreToCart = (id) => {
    const updatedCart = cart.find((item) => item.id === id);
    addToCart(updatedCart, id);
  };

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
      setNumOfItems(amount);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, addMoreToCart, numOfItems,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
