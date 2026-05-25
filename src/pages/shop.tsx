import { useEffect, useMemo, useState } from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { supabase } from "@/lib/supabase";

import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

import { Link } from "wouter";

import {
  Search,
  Heart,
} from "lucide-react";

export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (!error) {
      setProducts(data || []);
    }
  };

  const categories = [
    "All",
    "Almonds",
    "Cashews",
    "Pistachios",
    "Dates",
    "Walnuts",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.name
          ?.toLowerCase()
          .includes(
            selectedCategory.toLowerCase()
          );

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#faf7f0]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#1a3d2b] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shop Premium Dry Fruits
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover handpicked luxury dry fruits,
            premium nuts and healthy snacks.
          </p>

        </div>
      </section>

      {/* Search + Filters */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-10">

          <Search className="absolute left-5 top-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search almonds, cashews, pista..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full pl-14 pr-5 py-4 rounded-2xl border text-lg shadow-sm focus:outline-none"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#1a3d2b] text-white"
                  : "bg-white text-[#1a3d2b]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product: any) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
            >

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer relative">

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    if (
                      isInWishlist(product.id)
                    ) {
                      removeFromWishlist(
                        product.id
                      );
                    } else {
                      addToWishlist(product);
                    }
                  }}
                  className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isInWishlist(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                {/* Product Details */}
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
                      className="bg-green-950 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
                    >
                      Add To Cart
                    </button>

                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">

            <h2 className="text-4xl font-bold text-gray-400">
              No products found
            </h2>

          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}