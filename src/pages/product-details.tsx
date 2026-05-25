import { useEffect, useState } from "react";
import { useRoute } from "wouter";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { supabase } from "@/lib/supabase";
import { useCart } from "@/context/cart-context";

function ProductDetails() {
  const [, params] = useRoute("/product/:id");

  const [product, setProduct] = useState<any>(null);

  const { addToCart } = useCart();

  useEffect(() => {
    if (params?.id) {
      fetchProduct(params.id);
    }
  }, [params]);

  const fetchProduct = async (id: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setProduct(data);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f0]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Product Image */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Product Details */}
          <div>

            <h1 className="text-5xl font-bold text-green-950 mb-6">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-bold text-green-950">
                ₹{product.price}
              </span>

              <span className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full font-semibold">
                Premium Quality
              </span>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-10">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>

                <p className="text-lg">
                  100% Fresh & Natural
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>

                <p className="text-lg">
                  Premium Export Quality
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>

                <p className="text-lg">
                  Fast Delivery Available
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-5 flex-wrap">

              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: 1,
                  })
                }
                className="bg-green-950 hover:bg-green-800 text-white px-10 py-5 rounded-2xl text-xl font-bold transition hover:scale-105"
              >
                Add To Cart
              </button>

              <a href="/checkout">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-2xl text-xl font-bold transition hover:scale-105">
                  Buy Now
                </button>
              </a>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;