import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to order: ${product.name}${selectedSize ? ` (Size: ${selectedSize})` : ""} — $${product.price}`
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <Link to="/shop" className="text-sm text-muted-foreground hover:text-gold transition-colors font-display uppercase tracking-wider mb-8 inline-block">
            ← Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-card">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              {product.isNew && (
                <span className="inline-block w-fit px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] bg-gold/90 text-background rounded-sm mb-4">
                  New Drop
                </span>
              )}
              <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-gold font-display font-semibold mb-6">
                ${product.price}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size selector */}
              {product.sizes && (
                <div className="mb-8">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Size</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-12 h-12 flex items-center justify-center font-display text-sm border rounded-sm transition-all duration-300 ${
                          selectedSize === s
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-border text-muted-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Order via WhatsApp */}
              <a
                href={`https://wa.me/250780000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-center"
              >
                Order via WhatsApp
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Orders are placed directly through WhatsApp for a personal experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
