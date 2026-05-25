import { useEffect, useState } from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { supabase } from "@/lib/supabase";

import { useCart } from "@/context/cart-context";

import toast from "react-hot-toast";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(8);

    if (!error) {
      setProducts(data || []);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f0]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#003b1f] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <p className="bg-yellow-500 text-black inline-block px-5 py-2 rounded-full font-semibold mb-6">
              Same-Day Delivery in Visakhapatnam
            </p>

            <h1 className="text-6xl font-bold leading-tight">

              The True Taste
              <br />

              <span className="text-yellow-400">
                of Luxury.
              </span>

            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-9">

              Hand-selected premium dry fruits,
              artisan nuts and exotic spices.

            </p>

            <div className="flex gap-5 mt-10">

              <a href="/shop">

                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-2xl text-lg font-bold transition">

                  Shop Collection

                </button>

              </a>

              <a href="/contact">

                <button className="border border-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition">

                  Contact Us

                </button>

              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <img
              src="/products/hero-dryfruits.jpg"
              alt="Dry Fruits"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#0f3d2e]">
            Featured Products
          </h2>

          <p className="text-gray-600 text-xl mt-5">
            Handpicked freshness delivered to your doorstep
          </p>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.map((product: any) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0f3d2e]">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {product.description}
                </p>

                {/* PRICE + WEIGHT */}
                <div className="flex items-center justify-between mt-5">

                  <p className="text-3xl font-bold text-[#0f3d2e]">
                    ₹{product.price}
                  </p>

                  <span className="bg-green-100 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                    {product.weight}
                  </span>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => {

                    addToCart({
                      ...product,
                      quantity: 1,
                    });

                    toast.success(
                      "Added to cart 🛒"
                    );

                  }}
                  className="w-full mt-6 bg-[#003b1f] text-white py-4 rounded-2xl hover:scale-105 transition"
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#003b1f] text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Why Choose SKML?
            </h2>

            <p className="text-gray-300 text-xl mt-5">
              Premium quality you can trust
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#0f4a2f] p-10 rounded-3xl text-center">

              <h3 className="text-3xl font-bold mb-5">
                Premium Quality
              </h3>

              <p className="text-gray-300 text-lg">
                Handpicked dry fruits sourced directly from trusted farms.
              </p>

            </div>

            <div className="bg-[#0f4a2f] p-10 rounded-3xl text-center">

              <h3 className="text-3xl font-bold mb-5">
                Fast Delivery
              </h3>

              <p className="text-gray-300 text-lg">
                Same-day delivery available in Visakhapatnam.
              </p>

            </div>

            <div className="bg-[#0f4a2f] p-10 rounded-3xl text-center">

              <h3 className="text-3xl font-bold mb-5">
                Affordable Prices
              </h3>

              <p className="text-gray-300 text-lg">
                Best premium dry fruits at wholesale prices.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHOLESALE SECTION */}
      <section className="py-24 bg-[#faf7f0]">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#0f3d2e]">
            Wholesale & Bulk Orders
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-9">

            Looking for corporate gifting, reselling or bulk purchases?
            Contact SKML Dry Fruits for the best wholesale pricing.

          </p>

          <a href="/wholesale">

            <button className="mt-10 bg-[#003b1f] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition">

              Request Bulk Quote

            </button>

          </a>

        </div>

      </section>

      <Footer />

    </div>
  );
}