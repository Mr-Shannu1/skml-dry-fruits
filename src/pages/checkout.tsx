import { useState } from "react";
import { useCart } from "@/context/cart-context";
import paymentQR from "@/assets/products/payment-qr.jpg";

function Checkout() {
  const { cartItems } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  const upiLink = `upi://pay?pa=SBIBHIM.INSTANT41339121095464268@sbipay&pn=SKML Dry Fruits&am=${total}&cu=INR`;

  const placeOrder = () => {
    const orderItems = cartItems
      .map(
        (item: any) =>
          `${item.name} x ${item.quantity || 1}`
      )
      .join("\n");

    const message = `
New Order - SKML Dry Fruits

Name: ${name}
Phone: ${phone}

Address:
${address}

City: ${city}
Pincode: ${pincode}

Order Items:
${orderItems}

Total: ₹${total}

Payment Status: PAID
`;

    const whatsappUrl = `https://wa.me/919866841672?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] p-8">
      <h1 className="text-5xl font-bold text-green-950 text-center mb-12">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Delivery Details */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-950 mb-8">
            Delivery Details
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />

            <textarea
              placeholder="Full Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
              rows={4}
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />

            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-950 mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">
            {cartItems.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    Qty: {item.quantity || 1}
                  </p>
                </div>

                <p className="font-bold text-xl">
                  ₹
                  {Number(item.price || 0) *
                    Number(item.quantity || 1)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 flex justify-between text-3xl font-bold">
            <span>Total</span>

            <span>₹{total}</span>
          </div>

          {/* Payment Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-center text-green-950 mb-6">
              Pay Using Any UPI App
            </h3>

            {/* QR */}
            <div className="bg-[#f8f8f8] rounded-3xl p-6">
              <img
                src={paymentQR}
                alt="UPI QR"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />

              {/* UPI ID */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold">
                  UPI ID:
                </p>

                <p className="text-green-950 font-bold break-all">
                  SBIBHIM.INSTANT41339121095464268@sbipay
                </p>
              </div>

              {/* UPI Apps */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* PhonePe */}
                <a href={upiLink}>
                  <div className="bg-white rounded-2xl py-4 text-center font-bold shadow hover:scale-105 transition cursor-pointer">
                    PhonePe
                  </div>
                </a>

                {/* Google Pay */}
                <a href={upiLink}>
                  <div className="bg-white rounded-2xl py-4 text-center font-bold shadow hover:scale-105 transition cursor-pointer">
                    Google Pay
                  </div>
                </a>

                {/* Paytm */}
                <a href={upiLink}>
                  <div className="bg-white rounded-2xl py-4 text-center font-bold shadow hover:scale-105 transition cursor-pointer">
                    Paytm
                  </div>
                </a>

                {/* BHIM */}
                <a href={upiLink}>
                  <div className="bg-white rounded-2xl py-4 text-center font-bold shadow hover:scale-105 transition cursor-pointer">
                    BHIM UPI
                  </div>
                </a>
              </div>

              {/* Card Payment */}
              <div className="mt-8">
                <button
                  onClick={() =>
                    alert(
                      "Debit/Credit card payments coming soon with Razorpay integration"
                    )
                  }
                  className="w-full bg-black text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
                >
                  Pay Using Debit/Credit Card
                </button>
              </div>

              {/* Paid Button */}
              <button
                onClick={placeOrder}
                className="w-full mt-8 bg-green-950 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
              >
                I Have Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;