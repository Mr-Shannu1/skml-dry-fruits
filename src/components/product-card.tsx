import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { useCartDrawer } from "@/context/cart-context";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const { toast } = useToast();
  const { openCart } = useCartDrawer();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} (${product.weight}) has been added.`,
      duration: 2500,
    });
    openCart();
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-card rounded-xl overflow-hidden border border-card-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground hover:bg-destructive font-semibold border-none">
            {discount}% OFF
          </Badge>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-lg text-foreground line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground font-medium mb-1">{product.weight}</div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            size="sm"
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-md shadow-secondary/20"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
