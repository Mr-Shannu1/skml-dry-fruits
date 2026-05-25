import { Route, Switch } from "wouter";

import Home from "@/pages/home";
import Shop from "@/pages/shop";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import Contact from "@/pages/contact";
import Wholesale from "@/pages/wholesale";

import Wishlist from "@/pages/wishlist";
import ProductDetails from "@/pages/product-details";
import OrderSuccess from "@/pages/order-success";

function App() {
  return (
    <Switch>

      {/* Home */}
      <Route path="/" component={Home} />

      {/* Shop */}
      <Route path="/shop" component={Shop} />

      {/* Product Details */}
      <Route
        path="/product/:id"
        component={ProductDetails}
      />

      {/* Wishlist */}
      <Route
        path="/wishlist"
        component={Wishlist}
      />

      {/* Cart */}
      <Route path="/cart" component={Cart} />

      {/* Checkout */}
      <Route
        path="/checkout"
        component={Checkout}
      />

      {/* Success */}
      <Route
        path="/order-success"
        component={OrderSuccess}
      />

      {/* Contact */}
      <Route
        path="/contact"
        component={Contact}
      />

      {/* Wholesale */}
      <Route
        path="/wholesale"
        component={Wholesale}
      />

    </Switch>
  );
}

export default App;