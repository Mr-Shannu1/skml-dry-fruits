import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";

createRoot(document.getElementById("root")!).render(
  <WishlistProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </WishlistProvider>
);