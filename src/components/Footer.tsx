import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-base tracking-[0.15em] uppercase text-gradient mb-2">
              THE CULTURE PLUG
            </h3>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              Rare drops. No restocks.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-[10px] uppercase tracking-[0.3em] text-neon mb-1">Navigate</h4>
              {["Shop", "About", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={`/${l.toLowerCase()}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-[10px] uppercase tracking-[0.3em] text-neon mb-1">Connect</h4>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="mailto:plug@thecultureplug.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} The Culture Plug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
