import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Trash2, Minus, Plus } from "lucide-react";

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-2">Cart</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-10">Your Bag</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 border border-border">
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-6">Empty.</p>
              <Link to="/shop" className="btn-primary">Shop Drops</Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 mb-10">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border border-border p-3 bg-card">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-24 sm:w-24 sm:h-28 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 className="font-display text-xs sm:text-sm uppercase tracking-wider truncate">
                          {item.product.name}
                        </h3>
                        {item.size && (
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="text-neon font-display font-bold text-sm mt-1">
                          ${item.product.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-neon transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-display">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-neon transition-colors"
                            aria-label="Increase"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-2"
                          aria-label="Remove"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Subtotal</p>
                  <p className="font-display text-3xl font-bold text-neon">${subtotal}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                    Shipping calculated at checkout
                  </p>
                </div>
                <Link to="/checkout" className="btn-primary w-full sm:w-auto">
                  Checkout →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
