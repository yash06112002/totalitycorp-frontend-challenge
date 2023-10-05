import { ReactNode, createContext, useContext, useState } from "react";
import Cart from "../components/Cart";

type CartProviderProps = {
  children: ReactNode;
};
type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseQuantity(id: number) {
    setCartItems((items) => {
      if (items.find((item) => item.id === id) == null) {
        return [...items, { id, quantity: 1 }];
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseQuantity(id: number) {
    setCartItems((items) => {
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }
  function openCart() {
    setIsOpen(true);
  }
  function closeCart() {
    setIsOpen(false);
  }
  return (
    <CartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart />
    </CartContext.Provider>
  );
}
