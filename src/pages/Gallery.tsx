import { useState } from "react";
import { motion } from "framer-motion";
import { galleryItems, repairTypeLabels, GalleryItem } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

type RepairType = GalleryItem["repairType"] | "all";

export default function Gallery() {
  const [selectedType, setSelectedType] = useState<RepairType>("all");

  const filteredItems = selectedType === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.repairType === selectedType);

  const repairTypes: { value: RepairType; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "revision_complete", label: "Révision complète" },
    { value: "reparation", label: "Réparation" },
    { value: "restauration", label: "Restauration" },
    { value: "polissage", label: "Polissage" },
    { value: "etancheite", label: "Étanchéité" },
  ];

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
              Galerie de nos réalisations
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez le savoir-faire de nos artisans horlogers à travers nos restaurations 
              et réparations. Chaque montre raconte une histoire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {repairTypes.map((type) => (
              <Badge
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                className={cn(
                  "cursor-pointer text-sm py-1.5 px-4 transition-all",
                  selectedType === type.value
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </Badge>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          {filteredItems.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <GalleryCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Aucune réalisation trouvée pour ce type de travail.
              </p>
            </div>
          )}

          <p className="text-sm text-muted-foreground text-center mt-8">
            {filteredItems.length} réalisation{filteredItems.length > 1 ? "s" : ""}
          </p>
        </div>
      </section>
    </div>
  );
}
