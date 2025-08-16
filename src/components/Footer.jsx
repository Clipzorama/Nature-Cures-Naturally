import { Mail, Phone, MapPin } from "lucide-react";
import logoPng from "@/assets/logo.png";


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t bg-background brightness-80 relative z-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-3 relative md:bottom-3">
            <img
              src={logoPng}
              alt="Nature Cures Naturally — logo"
              className="h-10 w-auto drop-shadow-sm"
            />
            <p className="text-sm text-muted-foreground">
              &copy; {year} Nature Cures Naturally LLC, All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with <span aria-label="love" role="img">❤️</span> from Clipzorama.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-sm">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#recipes" className="hover:text-primary transition-colors">Recipes</a>
            <a href="#inspiration" className="hover:text-primary transition-colors">Inspiration</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="space-y-4 text-sm flex flex-col">
            <a href="mailto:hello@naturecuresnaturally.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> Naturecuresnaturally1@gmail.com
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +1 (929) 900-6536
            </a>
            <p className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} /> Connecticut
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
