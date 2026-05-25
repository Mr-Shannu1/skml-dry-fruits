import { Link } from "wouter";
import { ShoppingCart, Menu, X, Phone, MapPin } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

export function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.length;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Offers", href: "/offers" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="text-2xl font-bold text-green-950">
                SKML
              </span>

              <span className="text-xs tracking-[0.2em] text-yellow-600">
                DRY FRUITS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="cursor-pointer text-sm font-medium hover:text-yellow-600 transition">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Location */}
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-yellow-600" />

              <span>Visakhapatnam</span>
            </div>

            {/* Cart */}
            <Link href="/cart">
              <div className="relative cursor-pointer p-2">
                <ShoppingCart className="h-6 w-6 text-black" />

                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="py-3 border-b cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="py-4 flex items-center gap-2 text-sm text-green-950">
              <Phone className="h-4 w-4" />

              <span>+91 98765 43210</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}