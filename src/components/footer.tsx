import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold text-white leading-none tracking-tight">SKML</span>
              <span className="text-xs font-medium tracking-[0.2em] text-secondary uppercase">DRY FRUITS</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Where opulence meets tradition. Premium quality dry fruits, nuts, and exotic spices sourced directly from the finest farms globally, delivered with care.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Shop All Products</Link>
              </li>
              <li>
                <Link href="/offers" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Festive Offers</Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Wholesale / B2B</Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Delivery Promise</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <span>Same-day delivery in Visakhapatnam (Orders before 2 PM)</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>2-3 day delivery across India</span>
              </li>
              <li className="font-medium text-secondary mt-2">
                Free shipping on orders above ₹999
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>SKML Dry Fruits & General Stores,<br />3, Nethaji Nagar,Mahalaxmi Nagar,<br />Pendurti,Andhra Pradesh 531173,India<br /></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 80746 43922</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>care@skmldryfruits.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} SKML Dry Fruits. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
