import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-model.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Streetwear model"
          width={1024}
          height={1280}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Drop 001 — Limited
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            The Culture<br />
            <span className="text-gradient">Plug.</span>
          </h1>
          <p
            className="text-muted-foreground text-sm md:text-base max-w-sm mb-8 animate-fade-up uppercase tracking-wider"
            style={{ animationDelay: "0.3s" }}
          >
            Rare drops. No restocks. If you know, you know.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/shop" className="btn-primary">
              Shop Drop
            </Link>
            <Link to="/shop" className="btn-outline">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
