import React, { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product, addedQuantity = 1) => {
    const elem = state.cart.findIndex(item => item.id === product.id);
    if (elem == -1) {
      setState({
        ...state,
        cart: [
          ...state.cart,
          {
            id: product.id,
            cartItem: { ...product },
            quantity: addedQuantity,
            total: product.price * addedQuantity,
          },
        ],
      });
    } else {
      const quantity = state.cart[elem].quantity + addedQuantity;
      const newItem = {
        id: product.id,
        cartItem: { ...product },
        quantity,
        total: product.price * quantity,
      };
      const cartFilter = state.cart.filter(item => item.id != product.id);
      setState({
        ...state,
        cart: [...cartFilter, newItem],
      });
    }
  };

  const removeFromCart = product => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== product.id),
    });
  };

  const clearCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  return { state, addToCart, removeFromCart, clearCart };
};

export { useInitialState };
