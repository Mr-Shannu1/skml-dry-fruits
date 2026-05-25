import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bike,
  Globe,
  Package,
  Store,
  Leaf,
  ShieldCheck,
  Sparkles,
  HandHeart,
  Lock,
  Users,
  ClipboardList,
  BadgeCheck,
  Headphones,
} from "lucide-react";

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Section fade-up wrapper ───────────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Divider ornament ──────────────────────────────────────────── */
const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <div className="h-px w-14 bg-[#d4af37]/40" />
    <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
    <div className="h-px w-14 bg-[#d4af37]/40" />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export function PremiumFeatures() {
  return (
    <div className="overflow-hidden">
      {/* ── 1. Delivery Cards ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf7f0]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a3d2b]/8 border border-[#d4af37]/30 text-[#1a3d2b] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Lightning Fast Delivery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-3">
              We Come To You
            </h2>
            <GoldDivider />
            <p className="text-[#5a6b5e] text-lg max-w-lg mx-auto mt-2">
              Whether you are in Visakhapatnam or anywhere across India, your order arrives fresh and on time.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Same Day Delivery */}
            <FadeUp delay={0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden p-8 md:p-10 cursor-default
                  bg-gradient-to-br from-[#1a3d2b] to-[#0d2419]
                  border border-[#d4af37]/20
                  shadow-2xl shadow-[#1a3d2b]/40
                  group"
              >
                {/* Glow blob */}
                <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#d4af37]/10 blur-3xl group-hover:bg-[#d4af37]/20 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />

                {/* Glowing icon */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-2xl bg-[#d4af37]/25 blur-lg scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30">
                    <Bike className="w-8 h-8 text-[#d4af37]" />
                  </div>
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-300 text-xs font-semibold">Live Now</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Same Day Delivery<br />
                    <span className="text-[#d4af37]">in Visakhapatnam</span>
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Delivered within hours — order before 2 PM and receive your premium dry fruits the same day.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#d4af37] font-semibold text-sm">
                    <span>Order before 2 PM</span>
                    <span className="text-white/30">·</span>
                    <span>Free above ₹999</span>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Pan India Delivery */}
            <FadeUp delay={0.2}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden p-8 md:p-10 cursor-default
                  bg-[#fdfaf4]
                  border border-[#d4af37]/25
                  shadow-xl shadow-[#d4af37]/10
                  group"
              >
                <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#1a3d2b]/5 blur-3xl group-hover:bg-[#1a3d2b]/10 transition-all duration-700 pointer-events-none" />

                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-2xl bg-[#1a3d2b]/10 blur-lg scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a3d2b]/8 border border-[#1a3d2b]/15">
                    <Globe className="w-8 h-8 text-[#1a3d2b]" />
                  </div>
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3d2b]/8 border border-[#1a3d2b]/15 mb-4">
                    <span className="text-[#1a3d2b] text-xs font-semibold">Pan India</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3d2b] mb-3 leading-tight">
                    Delivery Across<br />
                    <span className="text-[#d4af37]">All of India</span>
                  </h3>
                  <p className="text-[#5a6b5e] text-base leading-relaxed">
                    We ship to every corner of India — fully tracked and delivered within 2–3 business days.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#1a3d2b] font-semibold text-sm">
                    <span>2–3 Business Days</span>
                    <span className="text-[#1a3d2b]/30">·</span>
                    <span>Fully Tracked</span>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 2. Wholesale & Retail ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#1a3d2b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              For Everyone
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
              Wholesale & Retail
            </h2>
            <GoldDivider />
            <p className="text-white/60 text-lg max-w-lg mx-auto mt-2">
              Whether you are stocking up for your home or sourcing for your business, we have the right plan for you.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Wholesale */}
            <FadeUp delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 md:p-10 overflow-hidden
                  bg-white/5 backdrop-blur-sm
                  border border-[#d4af37]/20
                  hover:border-[#d4af37]/50
                  hover:bg-white/8
                  transition-colors duration-300
                  group cursor-default"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/25 mb-6">
                  <Package className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Wholesale</h3>
                <p className="text-[#d4af37] font-semibold text-lg mb-4">Best Prices for Bulk Orders</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Unbeatable wholesale pricing for retailers, caterers, corporate gifting, and hotel chains. Minimum order applies.
                </p>
                <ul className="space-y-2">
                  {["Bulk discounts up to 30%", "Dedicated account manager", "Custom packaging available", "Net-30 payment terms"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>

            {/* Retail */}
            <FadeUp delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 md:p-10 overflow-hidden
                  bg-white/5 backdrop-blur-sm
                  border border-white/10
                  hover:border-white/25
                  hover:bg-white/8
                  transition-colors duration-300
                  group cursor-default"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/8 border border-white/15 mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Retail</h3>
                <p className="text-emerald-300 font-semibold text-lg mb-4">Premium Dry Fruits for Every Home</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Carefully curated packs in sizes perfect for everyday snacking, gifting, and festive celebrations at home.
                </p>
                <ul className="space-y-2">
                  {["250g, 500g & 1kg options", "Luxury gift packaging", "Same-day delivery available", "Free shipping above ₹999"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 3. Trust Badges ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf7f0]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a3d2b]/8 border border-[#d4af37]/30 text-[#1a3d2b] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Our Promise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-3">
              Quality You Can Trust
            </h2>
            <GoldDivider />
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Leaf, label: "100% Natural", sub: "No preservatives" },
              { icon: ShieldCheck, label: "Premium Quality", sub: "A-grade produce" },
              { icon: Sparkles, label: "Hygienically Packed", sub: "Clean facilities" },
              { icon: HandHeart, label: "Fresh & Handpicked", sub: "Sourced with care" },
              { icon: Lock, label: "Secure Packaging", sub: "Tamper-proof seals" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <FadeUp key={label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl
                    bg-white border border-[#d4af37]/15
                    hover:border-[#d4af37]/45 hover:shadow-lg hover:shadow-[#d4af37]/10
                    transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a3d2b]/6 group-hover:bg-[#1a3d2b]/10 transition-colors duration-300 mb-4">
                    <Icon className="w-6 h-6 text-[#1a3d2b]" />
                  </div>
                  <h4 className="font-bold text-[#1a3d2b] text-sm mb-1">{label}</h4>
                  <p className="text-[#6b7a6e] text-xs">{sub}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Customer Quotes ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#1a3d2b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Words to Live By
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
              The SKML Philosophy
            </h2>
            <GoldDivider />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { quote: "Healthy Choices, Happier Lives", author: "Our Mission" },
              { quote: "A Handful of Nuts, A Lifetime of Health", author: "Ancient Wisdom" },
              { quote: "Good Food, Good Mood", author: "Daily Mantra" },
            ].map(({ quote, author }, i) => (
              <FadeUp key={quote} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28 }}
                  className="relative rounded-3xl p-8 text-center
                    bg-white/5 backdrop-blur-sm
                    border border-[#d4af37]/20
                    hover:border-[#d4af37]/45
                    hover:bg-white/8
                    transition-all duration-300 cursor-default group"
                >
                  <div className="text-[#d4af37]/30 text-7xl font-serif leading-none select-none mb-4 group-hover:text-[#d4af37]/50 transition-colors duration-300">"</div>
                  <p className="font-serif text-xl md:text-2xl text-white leading-snug mb-6 italic">
                    {quote}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-8 bg-[#d4af37]/40" />
                    <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">{author}</span>
                    <div className="h-px w-8 bg-[#d4af37]/40" />
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Stats Section ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf7f0]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a3d2b]/8 border border-[#d4af37]/30 text-[#1a3d2b] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              By the Numbers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-3">
              Trusted by Thousands
            </h2>
            <GoldDivider />
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: 10000, suffix: "+", label: "Happy Customers", sub: "Across India" },
              { icon: ClipboardList, value: 500, suffix: "+", label: "Daily Orders", sub: "And growing fast" },
              { icon: BadgeCheck, value: 100, suffix: "%", label: "Premium Quality", sub: "A-grade guaranteed" },
              { icon: Headphones, value: 24, suffix: "/7", label: "Customer Support", sub: "Always here for you" },
            ].map(({ icon: Icon, value, suffix, label, sub }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center p-7 rounded-3xl
                    bg-white border border-[#d4af37]/15
                    hover:border-[#d4af37]/40 hover:shadow-xl hover:shadow-[#1a3d2b]/8
                    transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a3d2b]/6 group-hover:bg-[#1a3d2b] transition-colors duration-400 mb-5">
                    <Icon className="w-6 h-6 text-[#1a3d2b] group-hover:text-[#d4af37] transition-colors duration-400" />
                  </div>
                  <div className="font-serif text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-2">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="font-bold text-[#1a3d2b] text-sm mb-1">{label}</div>
                  <div className="text-[#6b7a6e] text-xs">{sub}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
