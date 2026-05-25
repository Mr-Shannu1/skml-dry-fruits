import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";

export default function Offers() {
  const offerProducts = products.filter(p => p.originalPrice);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-primary py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <Badge className="bg-secondary text-secondary-foreground border-none mb-6 text-sm py-1 px-4">Festive Specials</Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Exclusive Offers</h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Premium quality at exceptional prices. Stock up on your favorites or find the perfect gift with our limited-time deals.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {offerProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
