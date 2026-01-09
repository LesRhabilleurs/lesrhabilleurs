import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryItem, repairTypeLabels } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <Card className="h-full overflow-hidden group border-none shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
              Avant
            </Badge>
          </div>
          <img
            src={item.photoBefore}
            alt={`${item.title} - Avant`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute top-2 right-2 z-10">
            <Badge className="text-xs bg-primary/80 backdrop-blur-sm">
              Après
            </Badge>
          </div>
          <img
            src={item.photoAfter}
            alt={`${item.title} - Après`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <CardContent className="p-4 space-y-2">
        <Badge variant="outline" className="text-xs">
          {repairTypeLabels[item.repairType]}
        </Badge>
        <h3 className="font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.watchBrand} {item.watchModel}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}
