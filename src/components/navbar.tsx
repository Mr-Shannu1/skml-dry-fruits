import { Link } from "wouter";

import {
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const { cartItems } = useCart();

  const { wishlistItems } = useWishlist();

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Wholesale",
      href: "/wholesale",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">

              <h1 className="text-3xl font-bold text-[#1a3d2b]">
                SKML
              </h1>

              <p className="text-sm text-gray-500">
                Dry Fruits & General Stores
              </p>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <span className="cursor-pointer font-semibold text-[#1a3d2b] hover:text-[#d4af37] transition">
                  {link.label}
                </span>
              </Link>
            ))}

          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-5">

            {/* Phone */}
            <a
              href="tel:8074643922"
              className="hidden lg:block text-sm font-semibold text-[#1a3d2b]"
            >
              📞 8074643922
            </a>

            {/* Wishlist */}
            <Link href="/wishlist">

              <div className="relative cursor-pointer">

                <Heart className="h-7 w-7 text-[#1a3d2b]" />

                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}

              </div>

            </Link>

            {/* Cart */}
            <Link href="/cart">

              <div className="relative cursor-pointer">

                <ShoppingCart className="h-7 w-7 text-[#1a3d2b]" />

                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1a3d2b] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}

              </div>

            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (

          <div className="md:hidden py-6 border-t space-y-5">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >

                <div
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="block font-semibold text-[#1a3d2b] cursor-pointer"
                >
                  {link.label}
                </div>

              </Link>
            ))}

            <a
              href="tel:8074643922"
              className="block font-semibold text-[#1a3d2b]"
            >
              📞 8074643922
            </a>

          </div>

        )}

      </div>

    </header>
  );
}