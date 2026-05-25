import { useEffect, useState } from "react";
import heroImage from "@/assets/products/hero-dryfruits.jpeg";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PremiumFeatures } from "@/components/premium-features";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Link } from "wouter";

import {
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { supabase } from "@/lib/supabase";
import { useCart } from "@/context/cart-context";

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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center bg-primary overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-10" />

            <img
              src={heroImage}
              alt="Luxury Dry Fruits"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>

                Same-Day Delivery in Visakhapatnam
              </div>

              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                The True Taste <br />

                <span className="text-secondary italic">
                  of Luxury.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Hand-selected premium dry fruits, artisan nuts,
                and exotic spices.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    Shop Collection
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4 md:px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="flex flex-col items-center text-center p-4">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <Clock className="h-7 w-7" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Lightning Fast
                </h3>

                <p className="text-muted-foreground text-sm">
                  Same-day delivery in Vizag.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Premium Quality
                </h3>

                <p className="text-muted-foreground text-sm">
                  100% authentic A-grade produce.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <Truck className="h-7 w-7" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Free Shipping
                </h3>

                <p className="text-muted-foreground text-sm">
                  On all orders above ₹999.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Local Trust
                </h3>

                <p className="text-muted-foreground text-sm">
                  Trusted in Visakhapatnam.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 md:py-28 bg-[#faf7f0]">
          <div className="container mx-auto px-4 md:px-6">

            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-4">
                Premium Collections
              </h2>

              <p className="text-[#5a6b5e] text-lg max-w-xl mx-auto">
                Handpicked freshness delivered to your doorstep
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {products.map((product: any) => (
                <Link href={`/product/${product.id}`} key={product.id}>

                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />

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

            <div className="mt-12 flex justify-center">
              <Link href="/shop">
                <button className="group inline-flex items-center gap-2 bg-[#1a3d2b] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#1a3d2b] font-bold text-base px-8 py-4 rounded-full transition-all duration-300">
                  View Full Collection

                  <ChevronRight className="h-5 w-5" />
                </button>
              </Link>
            </div>

          </div>
        </section>

        <PremiumFeatures />

        {/* Wholesale Banner */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

              <div className="md:w-1/2">

                <Badge className="bg-secondary/20 text-secondary border-secondary/50 mb-6 py-1.5 px-4 text-sm font-medium">
                  B2B & Wholesale
                </Badge>

                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Partner with Visakhapatnam's Finest
                </h2>

                <p className="text-lg text-white/80 mb-8">
                  Looking for corporate gifting or bulk orders?
                </p>

                <Link href="/wholesale">
                  <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold">
                    Request Bulk Quote
                  </Button>
                </Link>

              </div>

              <div className="md:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">

                  <img
                    src={products[1]?.image || heroImage}
                    alt="Wholesale Dry Fruits"
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}