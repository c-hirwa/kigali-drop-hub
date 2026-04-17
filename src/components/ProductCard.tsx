import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  if (product.comingSoon) {
    return (
      <div className="product-card group block cursor-not-allowed">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt="Coming soon"
            loading="lazy"
            width={800}
            height={1024}
            className="w-full h-full object-cover blur-xl scale-110 opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Lock className="text-neon" size={28} />
            <span className="px-3 py-1 text-[10px] font-display uppercase tracking-[0.3em] border border-neon text-neon font-bold">
              Coming Soon
            </span>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-display text-xs uppercase tracking-wider text-muted-foreground">
            ████████
          </h3>
          <p className="text-muted-foreground font-display font-bold text-sm mt-1">$ —</p>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] bg-neon text-background font-bold">
            New
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3">
        <h3 className="font-display text-xs uppercase tracking-wider text-foreground">
          {product.name}
        </h3>
        <p className="text-neon font-display font-bold text-sm mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
