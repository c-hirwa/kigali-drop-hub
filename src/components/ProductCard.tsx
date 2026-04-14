import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] bg-gold/90 text-background rounded-sm">
            New Drop
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm uppercase tracking-wider text-foreground">
          {product.name}
        </h3>
        <p className="text-gold font-display font-semibold mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
