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
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={aboutBg} alt="Culture" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-neon mb-3">About</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase">
              The <span className="text-gradient">Plug</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="section-padding">
        <div className={`max-w-xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">
              The Culture Plug exists at the intersection of music, anime, and street fashion. We don't follow trends — we set them.
            </p>
            <p className="text-muted-foreground">
              Every piece is a limited run. No restocks. No mass production. When it's gone, it's gone.
            </p>
            <p className="text-muted-foreground">
              We plug the culture you actually live in. Not what's trending — what's real.
            </p>
            <p className="text-foreground font-display text-lg uppercase tracking-wider font-bold">
              If you know, you know.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
