import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";

import { Link } from "wouter";

import { Heart, ShoppingCart } from "lucide-react";

export default function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#faf7f0]">

      <Navbar />

      {/* Header */}
      <section className="bg-[#1a3d2b] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Wishlist
          </h1>

          <p className="text-xl text-gray-300">
            Your favorite premium products saved in one place.
          </p>

        </div>

      </section>

      {/* Wishlist Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {wishlistItems.length === 0 ? (

          <div className="text-center py-24">

            <Heart className="mx-auto h-24 w-24 text-gray-300 mb-8" />

            <h2 className="text-4xl font-bold text-gray-500 mb-4">
              Your wishlist is empty
            </h2>

            <p className="text-lg text-gray-400 mb-10">
              Save your favorite dry fruits and premium products.
            </p>

            <Link href="/shop">
              <button className="bg-[#1a3d2b] text-white px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
                Explore Products
              </button>
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {wishlistItems.map((product: any) => (

              <Link
                href={`/product/${product.id}`}
                key={product.id}
              >

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer relative">

                  {/* Remove Wishlist */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      removeFromWishlist(
                        product.id
                      );
                    }}
                    className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                  >
                    <Heart className="h-6 w-6 fill-red-500 text-red-500" />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  {/* Product Info */}
                  <div className="p-5">

                    <h3 className="text-2xl font-bold text-green-950">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-5">

                      <span className="text-xl font-bold">
                        ₹{product.price}
                      </span>

                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          addToCart({
                            ...product,
                            quantity: 1,
                          });
                        }}
                        className="bg-green-950 text-white px-5 py-2 rounded-xl hover:scale-105 transition flex items-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />

                        Add
                      </button>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
}