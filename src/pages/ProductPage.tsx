import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  if (!product || product.comingSoon) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Not found.</p>
      </div>
    );
  }

  const handleAdd = () => {
    if (product.sizes && !selectedSize) {
      toast.error("Pick a size first.");
      return;
    }
    addItem(product, selectedSize);
    toast.success("Added to cart.");
  };

  const handleBuyNow = () => {
    if (product.sizes && !selectedSize) {
      toast.error("Pick a size first.");
      return;
    }
    addItem(product, selectedSize);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <Link to="/shop" className="text-xs text-muted-foreground hover:text-neon transition-colors font-display uppercase tracking-wider mb-8 inline-block">
            ← Back
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="aspect-[3/4] overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              {product.isNew && (
                <span className="inline-block w-fit px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] bg-neon text-background font-bold mb-4">
                  New
                </span>
              )}
              <h1 className="font-display text-2xl md:text-3xl font-bold uppercase mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-neon font-display font-bold mb-4">
                ${product.price}
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                {product.description}
              </p>

              {product.sizes && (
                <div className="mb-8">
                  <p className="font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Size</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-11 h-11 flex items-center justify-center font-display text-xs border transition-all duration-200 ${
                          selectedSize === s
                            ? "border-neon bg-neon/10 text-neon"
                            : "border-border text-muted-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleBuyNow} className="btn-primary flex-1">
                  Buy Now
                </button>
                <button onClick={handleAdd} className="btn-outline flex-1">
                  Add to Cart
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-wider">
                Secure checkout. Worldwide shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
