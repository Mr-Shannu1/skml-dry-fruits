import { useCart } from "@/context/cart-context";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#FFF8EE] p-8">
      <h1 className="text-5xl font-bold text-green-950 mb-10 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-2xl font-semibold">
          Cart is empty
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-8">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-3xl font-bold text-green-950">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 mt-3">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-bold">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="bg-red-500 text-white w-8 h-8 rounded-full"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="bg-green-700 text-white w-8 h-8 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="w-full mt-6 bg-red-500 text-white py-3 rounded-2xl"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 bg-white p-8 rounded-3xl shadow-xl max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-green-950 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>

              <span>₹{total}</span>
            </div>

            <a href="/checkout">
              <button className="w-full mt-8 bg-green-950 text-white py-4 rounded-2xl">
                Proceed To Checkout
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;