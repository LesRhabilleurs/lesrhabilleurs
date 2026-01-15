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
    movementType: "automatique",
    condition: "bon",
    description: "La légendaire Moonwatch, référence incontournable pour tout collectionneur. Cette Speedmaster Professional de 1969 a été entièrement révisée dans notre atelier. Le cadran noir mat d'origine présente une patine sublime, les index et aiguilles luminova ont développé une teinte crème caractéristique de l'époque. Ref. 145.022-68",
    price: 8300,
    photos: [
      "https://img.ricardostatic.ch/images/dc7b27e1-9bc3-4a1c-8a54-f4bfa74d92a7/t_1000x750/1969-omega-speedmaster-pre-moon-145022-68-eoa-service",
      
    ],
    isRare: true,
    revisionDetails: "Révision complète du calibre 861, remplacement des joints, polissage du boîtier, étanchéité testée à 50m.",
    warrantyMonths: 12
  },
  {
    id: "2",
    brand: "Rolex",
    model: "Datejust 36",
    year: 2015,
    movementType: "automatique",
    condition: "excellent",
    description: "Rolex Datejust 36mm en acier et or jaune 18 carats. Cadran champagne avec index bâtons, bracelet Jubilee d'origine. Cette montre incarne l'élégance intemporelle de la maison Rolex. Ref. 116200",
    price: 9200,
    photos: [
      "https://www.markworthingtonjewellers.co.uk/images/super/116200_silver_baton_2.jpg",
      
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
      "https://images.hbjo-online.com/webp/sites/masson/uploads/images/678a30b76aef0678a30036e55c_img4857.png",
      
    ],
    isRare: false,
    revisionDetails: "Révision complète du mouvement manuel, nettoyage ultrason du boîtier, nouveau bracelet cuir.",
    warrantyMonths: 12
  },
  {
    id: "4",
    brand: "Patek Philippe",
    model: "Calatrava 5196J",
    year: 2012,
    movementType: "mecanique",
    condition: "excellent",
    description: "La quintessence de l'élégance horlogère. Cette Calatrava 5196J en or rose 18 carats représente la perfection du style classique. Cadran blanc avec aiguilles feuille.",
    price: 19800,
    photos: [
      "https://img.chrono24.com/images/uhren/44009378-3fzcx3bt2ua2pff52loh5yku-ExtraLarge.jpg",
      
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
      "https://img.chrono24.com/images/uhren/43351161-6q7nw1ho0nu4ga9b22nzftjr-ExtraLarge.jpg",
      
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
    description: "Le Portugieser Chronograph 41mm combine élégance et sportivité. Cadran bleu profond, compteurs contrastés, bracelet alligator noir.",
    price: 7200,
    photos: [
      "https://chpremier.com/cdn/shop/products/iwc-schaffhausen-portugieser-chronograph-iw371606-147884_1024x1024.jpg?v=1620868443",
      
    ],
    isRare: false,
    revisionDetails: "Service complet du calibre 69355, verre saphir vérifié, étanchéité 30m.",
    warrantyMonths: 24
  }
];

export const getWatchById = (id: string): Watch | undefined => {
  return watches.find(watch => watch.id === id);
};

export const getBrands = (): string[] => {
  return [...new Set(watches.map(watch => watch.brand))];
};
