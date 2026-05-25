import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useCart } from "../context/cart-context";

function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.log(error);
    } else {
      setProducts(data || []);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] p-8">
      <h1 className="text-5xl font-bold text-center text-green-950 mb-10">
        Premium Dry Fruits
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-green-950">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">{product.description}</p>

              <div className="flex items-center justify-between mt-5">
                <p className="text-2xl font-bold text-yellow-600">
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-950 text-white px-5 py-2 rounded-xl hover:bg-green-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
