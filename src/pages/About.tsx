import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBg from "@/assets/about-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={aboutBg} alt="Kigali at night" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase">
              Culture is<br /><span className="text-gradient">Our Currency</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="section-padding">
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              KIGALI STR. was born from the collision of Rwandan heritage and global street culture. We started with a simple belief: your clothes should carry your identity, not erase it.
            </p>
            <p>
              Every piece we create is a limited drop — designed in Kigali, crafted with intention, and worn by those who refuse to blend in. We don't follow trends. We set the tone.
            </p>
            <p>
              Our jewelry is handcrafted by local artisans. Our fabrics are sourced with care. Our designs draw from the patterns, colors, and spirit of East Africa — remixed for the global stage.
            </p>
            <p className="text-foreground font-display text-lg uppercase tracking-wider">
              This isn't just fashion. It's a statement.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
