import { CheckCircle } from "lucide-react";

import { Link } from "wouter";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">

      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20">

        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-8">

            <div className="bg-green-100 p-6 rounded-full">

              <CheckCircle className="h-24 w-24 text-green-600" />

            </div>

          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-green-950 mb-6">
            Order Placed Successfully!
          </h1>

          {/* Message */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10">

            Thank you for shopping with
            <span className="font-bold text-green-950">
              {" "}
              SKML Dry Fruits & General Stores
            </span>
            .

            <br />
            <br />

            Your premium products will be packed
            carefully and delivered soon.

          </p>

          {/* Delivery Info */}
          <div className="bg-[#f8f8f8] rounded-2xl p-6 mb-10">

            <h2 className="text-2xl font-bold text-green-950 mb-4">
              Delivery Information
            </h2>

            <div className="space-y-3 text-gray-700 text-lg">

              <p>
                🚚 Same-Day Delivery Available
              </p>

              <p>
                📞 Contact: 8074643922
              </p>

              <p>
                📍 Pendurthi, Andhra Pradesh
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <Link href="/shop">

              <button className="bg-green-950 hover:bg-green-800 text-white px-10 py-4 rounded-2xl text-lg font-bold transition hover:scale-105">

                Continue Shopping

              </button>

            </Link>

            <a
              href="https://wa.me/918074643922"
              target="_blank"
            >

              <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-2xl text-lg font-bold transition hover:scale-105">

                Contact on WhatsApp

              </button>

            </a>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}