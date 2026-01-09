import { Link } from "react-router-dom";
import { Watch, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Watch className="h-8 w-8" />
              <span className="text-xl font-semibold">Les Rhabilleurs</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Artisans horlogers passionnés depuis plus de 30 ans, nous perpétuons 
              la tradition horlogère suisse avec expertise et dévouement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Accueil
              </Link>
              <Link to="/boutique" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Boutique
              </Link>
              <Link to="/galerie" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Galerie
              </Link>
              <Link to="/devis" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Demande de devis
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+41326661234" 
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +41 32 666 12 34
              </a>
              <a 
                href="mailto:info@lesrhabilleurs.ch" 
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@lesrhabilleurs.ch
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Rue de la Gare 15<br />
                  2300 La Chaux-de-Fonds<br />
                  Suisse
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lundi - Vendredi</p>
                  <p className="text-primary-foreground">9h00 - 18h00</p>
                </div>
              </div>
              <div className="ml-6">
                <p>Samedi</p>
                <p className="text-primary-foreground">9h00 - 12h00</p>
              </div>
              <div className="ml-6">
                <p>Dimanche</p>
                <p className="text-primary-foreground">Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} Les Rhabilleurs. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
