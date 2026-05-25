import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { useCartDrawer } from "@/context/cart-context";

export interface PremiumProduct {
  id: string;
  name: string;
  image: string;
  category: "dry-fruits" | "gifting" | "spices";
  description: string;
  rating: number;
  reviewCount: number;
  weightOptions: { label: string; price: number; originalPrice: number }[];
}

interface PremiumProductCardProps {
  product: PremiumProduct;
  index?: number;
}

export function PremiumProductCard({ product, index = 0 }: PremiumProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(1);
  const addItem = useCart((state) => state.addItem);
  const { toast } = useToast();
  const { openCart } = useCartDrawer();

  const chosen = product.weightOptions[selectedWeight];
  const discount = Math.round(((chosen.originalPrice - chosen.price) / chosen.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${chosen.label}`,
      name: product.name,
      price: chosen.price,
      originalPrice: chosen.originalPrice,
      weight: chosen.label,
      image: product.image,
      category: product.category,
      description: product.description,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} (${chosen.label}) added — ₹${chosen.price}`,
      duration: 2500,
    });
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#fdfaf4] shadow-sm hover:shadow-2xl hover:shadow-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all duration-300"
    >
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-[#1a3d2b] text-[#d4af37] text-xs font-bold px-2.5 py-1 rounded-full">
          {discount}% OFF
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5efe0]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d2b]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif font-bold text-[#1a3d2b] text-lg leading-tight mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-[#d4af37] text-[#d4af37]"
                    : i < product.rating
                    ? "fill-[#d4af37]/50 text-[#d4af37]"
                    : "fill-transparent text-[#d4af37]/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#1a3d2b]">{product.rating}</span>
          <span className="text-xs text-[#6b7a6e]">({product.reviewCount})</span>
        </div>

        <div className="flex gap-1.5 mb-4">
          {product.weightOptions.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setSelectedWeight(i)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                selectedWeight === i
                  ? "bg-[#1a3d2b] text-[#d4af37] border-[#1a3d2b] shadow-sm"
                  : "bg-white text-[#1a3d2b] border-[#d4af37]/30 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#d4af37]/15">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-[#1a3d2b]">₹{chosen.price}</span>
              <span className="text-sm text-[#6b7a6e] line-through">₹{chosen.originalPrice}</span>
            </div>
            <div className="text-xs text-[#6b7a6e] mt-0.5">Free delivery above ₹999</div>
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 bg-[#1a3d2b] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#1a3d2b] font-bold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-[#d4af37]/30"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
