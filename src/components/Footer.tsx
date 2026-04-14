import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-lg tracking-[0.2em] uppercase text-gradient mb-3">
              KIGALI STR.
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Exclusive streetwear from the heart of Rwanda. Culture. Identity. No borders.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-2">Navigate</h4>
              {["Shop", "About", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={`/${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-2">Connect</h4>
              <a href="https://wa.me/250780000000" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KIGALI STR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
