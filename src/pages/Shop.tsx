import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["all", "hoodies", "jewelry", "merch"] as const;

export default function Shop() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8 section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-2">Collection</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-8">Shop</h1>

          {/* Filters */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 font-display text-xs uppercase tracking-[0.15em] border transition-all duration-200 ${
                  active === cat
                    ? "border-neon bg-neon/10 text-neon"
                    : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
