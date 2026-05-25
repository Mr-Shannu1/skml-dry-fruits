import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <WishlistProvider>
    <CartProvider>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1a3d2b",
            color: "#fff",
            borderRadius: "16px",
            padding: "16px",
            fontWeight: "bold",
          },
        }}
      />

      <App />

    </CartProvider>
  </WishlistProvider>
);