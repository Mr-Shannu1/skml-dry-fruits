import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Package, Briefcase, BadgeCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Wholesale() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "Our B2B team will contact you shortly with wholesale pricing.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-primary text-white py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">Wholesale & Corporate Gifting</h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Partner with Visakhapatnam's most trusted dry fruits supplier. We offer competitive B2B pricing, consistent premium quality, and customized corporate gift hampers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <Building2 className="h-10 w-10 text-secondary mb-6" />
                <h3 className="font-bold text-xl mb-3">Retailers & Supermarkets</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stock your shelves with our premium packaged or loose dry fruits. Enjoy healthy margins and dedicated account management.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <Briefcase className="h-10 w-10 text-secondary mb-6" />
                <h3 className="font-bold text-xl mb-3">Corporate Gifting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Impress clients and employees with our luxurious customized gift boxes. Available for Diwali, weddings, and corporate events.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <Package className="h-10 w-10 text-secondary mb-6" />
                <h3 className="font-bold text-xl mb-3">HoReCa Partners</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable supply of high-grade cashews, almonds, and spices for hotels, restaurants, caterers, and bakeries.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="text-center mb-10">
                <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-3xl font-bold mb-4">Request a Wholesale Quote</h2>
                <p className="text-muted-foreground">Fill out the form below and our sales team will send you our B2B catalog and pricing.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input placeholder="Acme Foods Pvt Ltd" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Person</label>
                    <Input placeholder="John Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input type="tel" placeholder="+91" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Type</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select an option</option>
                    <option value="retail">Retail / Supermarket</option>
                    <option value="corporate">Corporate Gifting</option>
                    <option value="horeca">Hotel / Restaurant / Caterer</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Estimated Monthly Volume (Optional)</label>
                  <Input placeholder="e.g. 50kg Cashews, 20kg Almonds" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Requirements</label>
                  <Textarea placeholder="Tell us about your specific needs..." rows={4} className="resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground py-6 text-lg rounded-xl">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
