import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-3">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Hit Us Up
          </h1>
          <p className="text-muted-foreground text-sm mb-10 max-w-sm mx-auto uppercase tracking-wider">
            Orders go through WhatsApp. Fast replies. Worldwide shipping.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="https://wa.me/250780000000"
              target="_blank"
              rel="noreferrer"
              className="product-card p-6 flex flex-col items-center gap-3 hover:glow-green"
            >
              <MessageCircle className="text-neon" size={28} />
              <span className="font-display text-xs uppercase tracking-wider font-bold">WhatsApp</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Order here</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="product-card p-6 flex flex-col items-center gap-3 hover:glow-green"
            >
              <Instagram className="text-neon" size={28} />
              <span className="font-display text-xs uppercase tracking-wider font-bold">Instagram</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">@thecultureplug</span>
            </a>

            <a
              href="mailto:plug@thecultureplug.com"
              className="product-card p-6 flex flex-col items-center gap-3 hover:glow-green"
            >
              <Mail className="text-neon" size={28} />
              <span className="font-display text-xs uppercase tracking-wider font-bold">Email</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">plug@thecultureplug.com</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
