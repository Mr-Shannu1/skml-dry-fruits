import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext<any>(null);

export function WishlistProvider({
  children,
}: any) {
  const [wishlistItems, setWishlistItems] =
    useState<any[]>([]);

  // Load from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem(
      "wishlist"
    );

    if (storedWishlist) {
      setWishlistItems(
        JSON.parse(storedWishlist)
      );
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  // Add To Wishlist
  const addToWishlist = (product: any) => {
    const exists = wishlistItems.find(
      (item: any) => item.id === product.id
    );

    if (!exists) {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  // Remove From Wishlist
  const removeFromWishlist = (id: any) => {
    const updated = wishlistItems.filter(
      (item: any) => item.id !== id
    );

    setWishlistItems(updated);
  };

  // Check Exists
  const isInWishlist = (id: any) => {
    return wishlistItems.some(
      (item: any) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}