import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LatestDrop() {
  const { ref, isVisible } = useScrollAnimation();
  const drops = products.filter((p) => p.isNew);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            <p className="font-display text-xs uppercase tracking-[0.4em] text-neon">Live Now</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase">Latest Drop</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {drops.map((p, i) => (
            <div
              key={p.id}
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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

function Tagline() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-16 md:py-24 border-y border-border">
      <div className={`max-w-4xl mx-auto text-center px-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-display text-2xl md:text-4xl font-bold uppercase mb-4">
          For the culture.<br /><span className="text-gradient">Not the clout.</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-wider max-w-md mx-auto">
          Music. Anime. Streetwear. We plug the culture you live in.
        </p>
      </div>
    </section>
  );
}

function AllProducts() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`flex justify-between items-end mb-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-2">Collection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase">All Pieces</h2>
          </div>
          <Link to="/shop" className="text-sm font-display uppercase tracking-wider text-muted-foreground hover:text-neon transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
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
      <LatestDrop />
      <Tagline />
      <AllProducts />
      <Footer />
    </div>
  );
}
