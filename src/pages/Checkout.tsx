import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Lock } from "lucide-react";

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Cart is empty.");
      return;
    }
    setSubmitting(true);
    // Placeholder — wire to real payment later
    setTimeout(() => {
      clear();
      toast.success("Order placed. Confirmation incoming.");
      navigate("/");
      setSubmitting(false);
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 section-padding">
          <div className="max-w-2xl mx-auto text-center py-20">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-6">
              Cart is empty.
            </p>
            <Link to="/shop" className="btn-primary">Shop Drops</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-2">Checkout</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-10">Lock In</h1>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-10">
            {/* Form */}
            <div className="flex flex-col gap-8">
              <Section title="Contact">
                <Field label="Email" name="email" type="email" required />
              </Section>

              <Section title="Shipping">
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <Field label="Address" name="address" required />
                <div className="grid sm:grid-cols-3 gap-3">
                  <Field label="City" name="city" required />
                  <Field label="Country" name="country" required />
                  <Field label="Postal Code" name="postal" required />
                </div>
                <Field label="Phone" name="phone" type="tel" required />
              </Section>

              <Section title="Payment">
                <div className="border border-border p-4 bg-card flex items-center gap-3 mb-3">
                  <Lock size={14} className="text-neon" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Demo checkout. Real payments coming soon.
                  </p>
                </div>
                <Field label="Card Number" name="card" placeholder="•••• •••• •••• ••••" required />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry (MM/YY)" name="exp" placeholder="MM/YY" required />
                  <Field label="CVC" name="cvc" placeholder="•••" required />
                </div>
                <Field label="Name on Card" name="cardName" required />
              </Section>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-24 lg:self-start border border-border bg-card p-5">
              <h2 className="font-display text-xs uppercase tracking-[0.3em] text-neon mb-4">
                Order Summary
              </h2>
              <div className="flex flex-col gap-3 mb-5 max-h-72 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-16 object-cover"
                      />
                      <span className="absolute -top-1 -right-1 bg-neon text-background text-[9px] font-display font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-[11px] uppercase tracking-wider truncate">
                        {item.product.name}
                      </p>
                      {item.size && (
                        <p className="text-[10px] text-muted-foreground uppercase">{item.size}</p>
                      )}
                    </div>
                    <p className="font-display text-xs text-neon font-bold">
                      ${item.product.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 flex flex-col gap-2 text-xs">
                <Row label="Subtotal" value={`$${subtotal}`} />
                <Row label="Shipping" value={`$${shipping}`} />
                <div className="border-t border-border pt-3 mt-1 flex justify-between items-center">
                  <span className="font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Total
                  </span>
                  <span className="font-display text-2xl font-bold text-neon">${total}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-5 disabled:opacity-50"
              >
                {submitting ? "Processing..." : `Pay $${total}`}
              </button>
              <p className="text-[10px] text-muted-foreground text-center mt-3 uppercase tracking-wider">
                Secure SSL checkout
              </p>
            </aside>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xs uppercase tracking-[0.3em] text-neon mb-4">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5 block">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border px-3 py-2.5 text-sm font-body text-foreground focus:border-neon focus:outline-none transition-colors"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span className="uppercase tracking-wider">{label}</span>
      <span className="text-foreground font-display">{value}</span>
    </div>
  );
}
