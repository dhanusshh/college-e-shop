import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext<any>(null);

export const CartProvider = ({
  children,
}: any) => {
  const [cartItems, setCartItems] =
    useState<any[]>([]);

  const addToCart = (
    product: any
  ) => {
    const existingItem =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (
    id: string
  ) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          item._id !== id
      )
    );
  };

  const increaseQuantity = (
    id: string
  ) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: string
  ) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};