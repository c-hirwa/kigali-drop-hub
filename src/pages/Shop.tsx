import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, drops, type DropId } from "@/data/products";

type FilterId = "all" | DropId;

export default function Shop() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.drop === active);
  const activeDrop = drops.find((d) => d.id === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8 section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-2">Collection</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">Shop</h1>
          {activeDrop && (
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              {activeDrop.tagline}
            </p>
          )}
          {!activeDrop && (
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              Every drop. Every piece.
            </p>
          )}

          {/* Filters */}
          <div className="flex gap-2 mb-10 flex-wrap">
            <button
              onClick={() => setActive("all")}
              className={`px-5 py-2 font-display text-xs uppercase tracking-[0.15em] border transition-all duration-200 ${
                active === "all"
                  ? "border-neon bg-neon/10 text-neon"
                  : "border-border text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              All
            </button>
            {drops.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`px-5 py-2 font-display text-xs uppercase tracking-[0.15em] border transition-all duration-200 flex items-center gap-2 ${
                  active === d.id
                    ? "border-neon bg-neon/10 text-neon"
                    : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                {d.label}
                {d.locked && <span className="text-[9px] opacity-70">• Soon</span>}
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
