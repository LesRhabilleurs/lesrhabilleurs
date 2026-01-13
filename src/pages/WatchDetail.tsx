import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Award, Clock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getWatchById } from "@/data/watches";

const conditionLabels = {
  excellent: "Excellent",
  tres_bon: "Très bon",
  bon: "Bon",
};

const movementLabels = {
  mecanique: "Mécanique",
  automatique: "Automatique",
  quartz: "Quartz",
};

export default function WatchDetail() {
  const { id } = useParams<{ id: string }>();
  const watch = id ? getWatchById(id) : undefined;

  if (!watch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Montre non trouvée</h1>
          <Button asChild>
            <Link to="/boutique">Retour à la boutique</Link>
          </Button>
        </div>
      </div>
    );
  }

  // ---------------- MAILTO LINK ----------------
  const mailtoLink = `mailto:contact@lesrhabilleurs.ch?subject=${encodeURIComponent(
    `Demande d’information – ${watch.brand} ${watch.model}`
  )}&body=${encodeURIComponent(
    `Bonjour,

Je souhaiterais obtenir plus d’informations concernant la montre suivante :

Marque : ${watch.brand}
Modèle : ${watch.model}
Année : ${watch.year}
Mouvement : ${movementLabels[watch.movementType]}
Prix : CHF ${watch.price.toLocaleString("fr-CH")}

Lien de la montre :
${window.location.href}

Merci d’avance.

Cordialement,
`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button asChild variant="ghost" size="sm">
            <Link to="/boutique">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la boutique
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
              <img
                src={watch.photos[0]}
                alt={`${watch.brand} ${watch.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            {watch.photos.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {watch.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-secondary cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={photo}
                      alt={`${watch.brand} ${watch.model} - Vue ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              {watch.isRare && (
                <Badge className="bg-accent text-accent-foreground mb-2">
                  Pièce rare
                </Badge>
              )}
              <p className="text-muted-foreground text-lg">{watch.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {watch.model}
              </h1>
              <p className="text-3xl font-bold text-primary">
                CHF {watch.price.toLocaleString("fr-CH")}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Année</p>
                  <p className="font-medium">{watch.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Mouvement</p>
                  <p className="font-medium">{movementLabels[watch.movementType]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">État</p>
                  <p className="font-medium">{conditionLabels[watch.condition]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Garantie</p>
                  <p className="font-medium">{watch.warrantyMonths} mois</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="revision">Révision</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {watch.description}
                </p>
              </TabsContent>
              <TabsContent value="revision" className="pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {watch.revisionDetails}
                </p>
              </TabsContent>
            </Tabs>

            {/* CTA */}
            <div className="space-y-4 pt-4">
              <Button asChild size="lg" className="w-full text-base">
                <a href={mailtoLink}>
                  Nous contacter pour cette montre
                </a>
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Questions ? Appelez-nous au{" "}
                <a
                  href="tel:+41796691453"
                  className="text-primary hover:underline"
                >
                  +41 79 669 14 53
                </a>
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                Paiement sécurisé
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-primary" />
                Authenticité garantie
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

