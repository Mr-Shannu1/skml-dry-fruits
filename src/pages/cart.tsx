import { useCart } from "@/context/cart-context";

function Cart() {
  const {
    cartItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Total
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
          {/* Cart Items */}
          <div className="grid md:grid-cols-3 gap-8">

            {cartItems.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover"
                  />

                  {/* Product Details */}
                  <div className="p-6">

                    <h2 className="text-3xl font-bold text-green-950">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-3">
                      {item.description}
                    </p>

                    {/* Weight */}
                    <div className="mt-3 inline-block bg-green-100 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                      {item.weight}
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-center justify-between">

                      <p className="text-2xl font-bold">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-2xl">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                          className="text-xl font-bold"
                        >
                          -
                        </button>

                        <span className="font-bold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                          className="text-xl font-bold"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* Subtotal */}
                    <div className="mt-4 text-lg font-semibold text-gray-700">
                      Subtotal: ₹
                      {(
                        Number(item.price) *
                        Number(item.quantity)
                      ).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="w-full mt-6 bg-red-500 text-white py-3 rounded-2xl hover:scale-105 transition"
                    >
                      Remove Item
                    </button>

                  </div>

                </div>
              )
            )}

          </div>

          {/* Order Summary */}
          <div className="mt-12 bg-white p-8 rounded-3xl shadow-xl max-w-xl mx-auto">

            <h2 className="text-3xl font-bold text-green-950 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-lg">
                <span>Total Items</span>

                <span>
                  {cartItems.reduce(
                    (
                      total: number,
                      item: any
                    ) =>
                      total +
                      item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>
                  ₹{total.toFixed(2)}
                </span>
              </div>

            </div>

            {/* Checkout */}
            <a href="/checkout">
              <button className="w-full mt-8 bg-green-950 text-white py-4 rounded-2xl hover:scale-105 transition">
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