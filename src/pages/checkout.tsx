import { useState } from "react";

import { useCart } from "@/context/cart-context";

import paymentQR from "@/assets/products/payment-qr.jpg";

function Checkout() {
  const { cartItems } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [pincode, setPincode] =
    useState("");

  // Total
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
          `${item.name} (${item.weight}) x ${
            item.quantity || 1
          }`
      )
      .join("\n");

    const message = `
New Order - SKML Dry Fruits

Customer Name: ${name}
Phone: ${phone}

Delivery Address:
${address}

City: ${city}
Pincode: ${pincode}

Products:
${orderItems}

Total Amount: ₹${total}

Payment Status: PAID
`;

    const whatsappUrl = `https://wa.me/918074643922?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(
      whatsappUrl,
      "_blank"
    );

    // Redirect Success Page
    window.location.href =
      "/order-success";
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

          {/* Store Address */}
          <div className="mt-10 bg-[#f8f8f8] p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-green-950 mb-4">
              Store Address
            </h3>

            <p className="text-gray-700 leading-8">
              SKML Dry Fruits &
              General Stores
              <br />
              3, Nethaji Nagar
              <br />
              Mahalaxmi Nagar
              <br />
              Pendurthi
              <br />
              Andhra Pradesh -
              531173
            </p>

            <p className="mt-4 font-bold text-green-950">
              Contact: 8074643922
            </p>

          </div>

        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold text-green-950 mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cartItems.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4"
                >

                  <div>

                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.weight}
                    </p>

                    <p className="text-gray-500">
                      Qty:{" "}
                      {item.quantity || 1}
                    </p>

                  </div>

                  <p className="font-bold text-xl">
                    ₹
                    {Number(
                      item.price || 0
                    ) *
                      Number(
                        item.quantity || 1
                      )}
                  </p>

                </div>
              )
            )}

          </div>

          {/* Total */}
          <div className="mt-8 border-t pt-4 flex justify-between text-3xl font-bold">

            <span>Total</span>

            <span>₹{total}</span>

          </div>

          {/* Payment Section */}
          <div className="mt-10">

            <h3 className="text-2xl font-bold text-center text-green-950 mb-6">
              Pay Using Any UPI App
            </h3>

            <div className="bg-[#f8f8f8] rounded-3xl p-6">

              {/* QR */}
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

              {/* Payment Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                <a
                  href={upiLink}
                  target="_blank"
                >
                  <button className="w-full bg-[#5f259f] text-white rounded-2xl py-4 font-bold">
                    PhonePe
                  </button>
                </a>

                <a
                  href={upiLink}
                  target="_blank"
                >
                  <button className="w-full bg-white border-2 rounded-2xl py-4 font-bold">
                    Google Pay
                  </button>
                </a>

                <a
                  href={upiLink}
                  target="_blank"
                >
                  <button className="w-full bg-[#00b9f1] text-white rounded-2xl py-4 font-bold">
                    Paytm
                  </button>
                </a>

                <a
                  href={upiLink}
                  target="_blank"
                >
                  <button className="w-full bg-[#1d3f91] text-white rounded-2xl py-4 font-bold">
                    BHIM UPI
                  </button>
                </a>

              </div>

              {/* Order Button */}
              <button
                onClick={placeOrder}
                className="w-full mt-8 bg-green-950 text-white py-4 rounded-2xl text-lg font-bold"
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