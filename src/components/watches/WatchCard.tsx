import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Watch } from "@/data/watches";

interface WatchCardProps {
  watch: Watch;
}

const conditionLabels = {
  excellent: "Excellent",
  tres_bon: "Très bon",
  bon: "Bon"
};

const movementLabels = {
  mecanique: "Mécanique",
  automatique: "Automatique",
  quartz: "Quartz"
};

export function WatchCard({ watch }: WatchCardProps) {
  return (
    <Link to={`/boutique/${watch.id}`}>
      <Card className="h-full overflow-hidden group border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={watch.photos[0]}
            alt={`${watch.brand} ${watch.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {watch.isRare && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              Pièce rare
            </Badge>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">{watch.brand}</p>
            <h3 className="font-semibold text-foreground truncate">{watch.model}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{watch.year}</span>
            <span>•</span>
            <span>{movementLabels[watch.movementType]}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-lg font-bold text-foreground">
              CHF {watch.price.toLocaleString("fr-CH")}
            </p>
            <Badge variant="secondary" className="text-xs">
              {conditionLabels[watch.condition]}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Garantie {watch.warrantyMonths} mois
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
