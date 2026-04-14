import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-model.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Streetwear model"
          width={1024}
          height={1280}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Kigali, Rwanda — Drop 001
          </p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Exclusive<br />
            Streetwear.<br />
            <span className="text-gradient">No Borders.</span>
          </h1>
          <p
            className="text-muted-foreground text-base md:text-lg max-w-md mb-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Limited drops. Rooted in culture. Worn without limits.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/shop" className="btn-outline">
              Explore Drop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
