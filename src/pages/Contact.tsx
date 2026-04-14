import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
            Let's Talk
          </h1>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            All orders are placed through WhatsApp for a direct, personal experience. Reach out — we respond fast.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href="https://wa.me/250780000000"
              target="_blank"
              rel="noreferrer"
              className="product-card p-8 flex flex-col items-center gap-4 hover:glow-green"
            >
              <MessageCircle className="text-green-glow" size={32} />
              <span className="font-display text-sm uppercase tracking-wider">WhatsApp</span>
              <span className="text-xs text-muted-foreground">Order & Chat</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="product-card p-8 flex flex-col items-center gap-4 hover:glow-gold"
            >
              <Instagram className="text-gold" size={32} />
              <span className="font-display text-sm uppercase tracking-wider">Instagram</span>
              <span className="text-xs text-muted-foreground">@kigalistr</span>
            </a>

            <a
              href="mailto:hello@kigalistr.com"
              className="product-card p-8 flex flex-col items-center gap-4 hover:glow-green"
            >
              <Mail className="text-green-glow" size={32} />
              <span className="font-display text-sm uppercase tracking-wider">Email</span>
              <span className="text-xs text-muted-foreground">hello@kigalistr.com</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
