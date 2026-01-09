import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, Shield, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { watches, getBrands } from "@/data/watches";
import { WatchCard } from "@/components/watches/WatchCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

type SortOption = "newest" | "price_asc" | "price_desc";
type MovementType = "mecanique" | "automatique" | "quartz";
type Condition = "excellent" | "tres_bon" | "bon";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMovements, setSelectedMovements] = useState<MovementType[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const brands = getBrands();

  const filteredWatches = useMemo(() => {
    let result = [...watches];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (w) =>
          w.brand.toLowerCase().includes(query) ||
          w.model.toLowerCase().includes(query)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((w) => selectedBrands.includes(w.brand));
    }

    // Movement filter
    if (selectedMovements.length > 0) {
      result = result.filter((w) => selectedMovements.includes(w.movementType));
    }

    // Condition filter
    if (selectedConditions.length > 0) {
      result = result.filter((w) => selectedConditions.includes(w.condition));
    }

    // Price filter
    if (priceMin) {
      result = result.filter((w) => w.price >= parseInt(priceMin));
    }
    if (priceMax) {
      result = result.filter((w) => w.price <= parseInt(priceMax));
    }

    // Sort
    switch (sortBy) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [searchQuery, sortBy, selectedBrands, selectedMovements, selectedConditions, priceMin, priceMax]);

  const resetFilters = () => {
    setSearchQuery("");
    setSortBy("newest");
    setSelectedBrands([]);
    setSelectedMovements([]);
    setSelectedConditions([]);
    setPriceMin("");
    setPriceMax("");
  };

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedMovements.length > 0 ||
    selectedConditions.length > 0 ||
    priceMin ||
    priceMax;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Brands */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Marques</Label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                  }
                }}
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Movement Type */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Type de mouvement</Label>
        <div className="space-y-2">
          {[
            { value: "mecanique", label: "Mécanique" },
            { value: "automatique", label: "Automatique" },
            { value: "quartz", label: "Quartz" },
          ].map((movement) => (
            <label key={movement.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedMovements.includes(movement.value as MovementType)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedMovements([...selectedMovements, movement.value as MovementType]);
                  } else {
                    setSelectedMovements(selectedMovements.filter((m) => m !== movement.value));
                  }
                }}
              />
              <span className="text-sm">{movement.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">État</Label>
        <div className="space-y-2">
          {[
            { value: "excellent", label: "Excellent" },
            { value: "tres_bon", label: "Très bon" },
            { value: "bon", label: "Bon" },
          ].map((condition) => (
            <label key={condition.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedConditions.includes(condition.value as Condition)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedConditions([...selectedConditions, condition.value as Condition]);
                  } else {
                    setSelectedConditions(selectedConditions.filter((c) => c !== condition.value));
                  }
                }}
              />
              <span className="text-sm">{condition.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Fourchette de prix (CHF)</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={resetFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Réinitialiser les filtres
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Montres d'occasion révisées
            </h1>
            <p className="text-muted-foreground text-lg">
              Chaque montre de notre collection a été méticuleusement révisée par nos horlogers 
              et bénéficie d'une garantie atelier.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Badge variant="secondary" className="flex items-center gap-1 py-1.5 px-3">
                <Shield className="h-4 w-4" />
                Garantie 12-24 mois
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 py-1.5 px-3">
                <Award className="h-4 w-4" />
                Certifié par nos experts
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search & Sort Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher une marque, un modèle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Plus récentes</SelectItem>
                  <SelectItem value="price_asc">Prix croissant</SelectItem>
                  <SelectItem value="price_desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Filtres</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-4">Filtres</h3>
                <FilterContent />
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {hasActiveFilters && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-sm text-muted-foreground">Filtres actifs:</span>
                  {selectedBrands.map((brand) => (
                    <Badge key={brand} variant="secondary" className="gap-1">
                      {brand}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedBrands(selectedBrands.filter((b) => b !== brand))}
                      />
                    </Badge>
                  ))}
                  {selectedMovements.map((m) => (
                    <Badge key={m} variant="secondary" className="gap-1">
                      {m}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedMovements(selectedMovements.filter((x) => x !== m))}
                      />
                    </Badge>
                  ))}
                </div>
              )}

              {filteredWatches.length > 0 ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredWatches.map((watch) => (
                    <motion.div key={watch.id} variants={fadeInUp}>
                      <WatchCard watch={watch} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Aucune montre trouvée</p>
                  <Button variant="link" onClick={resetFilters}>
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}

              <p className="text-sm text-muted-foreground mt-6">
                {filteredWatches.length} montre{filteredWatches.length > 1 ? "s" : ""} trouvée{filteredWatches.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
