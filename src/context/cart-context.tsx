import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: any) {
  const [cartItems, setCartItems] =
    useState<any[]>([]);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart =
      localStorage.getItem("cart");

    if (storedCart) {
      setCartItems(
        JSON.parse(storedCart)
      );
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Add To Cart
  const addToCart = (product: any) => {
    const existingItem =
      cartItems.find(
        (item: any) =>
          item.id === product.id
      );

    if (existingItem) {
      const updatedCart =
        cartItems.map((item: any) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      setCartItems(updatedCart);
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

  // Increase Quantity
  const increaseQuantity = (
    id: string
  ) => {
    const updatedCart =
      cartItems.map((item: any) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );

    setCartItems(updatedCart);
  };

  // Decrease Quantity
  const decreaseQuantity = (
    id: string
  ) => {
    const updatedCart =
      cartItems
        .map((item: any) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item: any) =>
            item.quantity > 0
        );

    setCartItems(updatedCart);
  };

  // Remove Item
  const removeItem = (id: string) => {
    const updatedCart =
      cartItems.filter(
        (item: any) =>
          item.id !== id
      );

    setCartItems(updatedCart);
  };

  // Open Cart
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Close Cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDrawer() {
  return useContext(CartContext);
}