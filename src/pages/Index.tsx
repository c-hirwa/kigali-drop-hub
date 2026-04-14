import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FeaturedSection() {
  const { ref, isVisible } = useScrollAnimation();
  const featured = products.filter((p) => p.isNew);

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-2">Latest</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase">New Drops</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">The Story</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6">
            Born in Kigali.<br />Made for the World.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            KIGALI STR. is more than a brand — it's a movement. We blend Rwandan heritage with global streetwear culture to create pieces that carry identity, exclusivity, and purpose. Every drop is limited. Every piece tells a story.
          </p>
          <Link to="/about" className="btn-outline">Our Story</Link>
        </div>
      </div>
    </section>
  );
}

function AllProducts() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className={`flex justify-between items-end mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-2">Collection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase">Shop All</h2>
          </div>
          <Link to="/shop" className="text-sm font-display uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <BrandStory />
      <AllProducts />
      <Footer />
    </div>
  );
}
