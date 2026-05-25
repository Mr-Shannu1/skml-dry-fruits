import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Checkout from "@/pages/checkout";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react";
import { CartProvider } from "@/context/cart-context";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Shop from "@/pages/shop";
import Cart from "@/pages/cart";
import Wholesale from "@/pages/wholesale";
import Offers from "@/pages/offers";
import Contact from "@/pages/contact";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Admin from "@/pages/Admin";

const queryClient = new QueryClient();

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918074643922"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/shop" component={Shop} />

      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />

      <Route path="/wholesale" component={Wholesale} />

      <Route path="/offers" component={Offers} />

      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />

      <Route path="/signup" component={Signup} />

      <Route path="/admin" component={Admin} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />

            <FloatingWhatsApp />
          </WouterRouter>

          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
