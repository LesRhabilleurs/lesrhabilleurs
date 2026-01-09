export interface Watch {
  id: string;
  brand: string;
  model: string;
  year: number;
  movementType: "mecanique" | "automatique" | "quartz";
  condition: "excellent" | "tres_bon" | "bon";
  description: string;
  price: number;
  photos: string[];
  isRare: boolean;
  revisionDetails: string;
  warrantyMonths: number;
}

export const watches: Watch[] = [
  {
    id: "1",
    brand: "Omega",
    model: "Speedmaster Professional",
    year: 1969,
    movementType: "mecanique",
    condition: "excellent",
    description: "La légendaire Moonwatch, référence incontournable pour tout collectionneur. Cette Speedmaster Professional de 1969 a été entièrement révisée dans notre atelier. Le cadran noir mat d'origine présente une patine sublime, les index et aiguilles luminova ont développé une teinte crème caractéristique de l'époque.",
    price: 8500,
    photos: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800"
    ],
    isRare: true,
    revisionDetails: "Révision complète du calibre 861, remplacement des joints, polissage du boîtier, étanchéité testée à 50m.",
    warrantyMonths: 24
  },
  {
    id: "2",
    brand: "Rolex",
    model: "Datejust 36",
    year: 2015,
    movementType: "automatique",
    condition: "excellent",
    description: "Rolex Datejust 36mm en acier et or jaune 18 carats. Cadran champagne avec index bâtons, bracelet Jubilee d'origine. Cette montre incarne l'élégance intemporelle de la maison Rolex.",
    price: 9200,
    photos: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800",
      "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?w=800"
    ],
    isRare: false,
    revisionDetails: "Service complet Rolex, calibre 3135 révisé, étanchéité 100m vérifiée, polissage professionnel.",
    warrantyMonths: 24
  },
  {
    id: "3",
    brand: "Jaeger-LeCoultre",
    model: "Reverso Classic",
    year: 2018,
    movementType: "mecanique",
    condition: "tres_bon",
    description: "L'iconique Reverso avec son boîtier réversible Art Déco. Cadran argenté guilloché, chiffres arabes appliqués. Une pièce d'exception qui traverse les décennies avec élégance.",
    price: 6800,
    photos: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800"
    ],
    isRare: false,
    revisionDetails: "Révision complète du mouvement manuel, nettoyage ultrason du boîtier, nouveau bracelet cuir.",
    warrantyMonths: 12
  },
  {
    id: "4",
    brand: "Patek Philippe",
    model: "Calatrava 5196",
    year: 2012,
    movementType: "mecanique",
    condition: "excellent",
    description: "La quintessence de l'élégance horlogère. Cette Calatrava 5196 en or blanc 18 carats représente la perfection du style classique. Cadran crème avec index goutte, aiguilles feuille.",
    price: 24500,
    photos: [
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800"
    ],
    isRare: true,
    revisionDetails: "Service complet Patek Philippe, calibre 215 PS révisé, nouveau bracelet alligator.",
    warrantyMonths: 24
  },
  {
    id: "5",
    brand: "Tudor",
    model: "Black Bay 58",
    year: 2020,
    movementType: "automatique",
    condition: "excellent",
    description: "La Black Bay 58 revisite les codes vintage des montres de plongée Tudor des années 50. Boîtier 39mm parfaitement proportionné, lunette rotative unidirectionnelle, étanche à 200m.",
    price: 3800,
    photos: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800"
    ],
    isRare: false,
    revisionDetails: "Contrôle complet, étanchéité vérifiée, bracelet acier ajusté.",
    warrantyMonths: 12
  },
  {
    id: "6",
    brand: "IWC",
    model: "Portugieser Chronograph",
    year: 2019,
    movementType: "automatique",
    condition: "tres_bon",
    description: "Le Portugieser Chronograph 41mm combine élégance et sportivité. Cadran bleu profond, compteurs contrastés, bracelet alligator bleu assorti.",
    price: 7200,
    photos: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800"
    ],
    isRare: false,
    revisionDetails: "Service complet du calibre 69355, verre saphir vérifié, étanchéité 30m.",
    warrantyMonths: 12
  }
];

export const getWatchById = (id: string): Watch | undefined => {
  return watches.find(watch => watch.id === id);
};

export const getBrands = (): string[] => {
  return [...new Set(watches.map(watch => watch.brand))];
};
