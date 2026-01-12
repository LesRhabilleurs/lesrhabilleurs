export interface GalleryItem {
  id: string;
  title: string;
  watchBrand: string;
  watchModel: string;
  description: string;
  photoBefore: string;
  photoAfter: string;
  repairType: "revision_complete" | "reparation" | "restauration" | "polissage" | "etancheite";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Restauration cadran vintage",
    watchBrand: "Omega",
    watchModel: "Constellation",
    description: "Restauration complète d'un cadran Omega Constellation des années 60. Nettoyage délicat des index dorés, traitement des taches d'oxydation, et remise en état des aiguilles dauphines.",
    photoBefore: "https://i.servimg.com/u/f90/18/79/26/08/tm/20210510.jpg",
    photoAfter: "https://img.chrono24.com/images/uhren/43454306-0zfbvzp5ybhx321rzzqr08qm-ExtraLarge.jpg",
    repairType: "restauration"
  },
  {
    id: "2",
    title: "Révision mouvement chronographe",
    watchBrand: "Breitling",
    watchModel: "Navitimer",
    description: "Révision complète du calibre Valjoux 7750. Démontage intégral, nettoyage ultrason, remplacement des pièces d'usure, réglage sur 6 positions, test d'étanchéité.",
    photoBefore: "https://ae01.alicdn.com/kf/S0346cd7b439f458a975ca208faf05027Y/ETA-7750-Movements-High-Accuracy-Clone-Modified-Mechanical-Movement-Replacement-Mechanism-3-6-9-Chrono.jpg",
    photoAfter: "https://i.ebayimg.com/images/g/chQAAOSwx4FmzIJ2/s-l1200.jpg",
    repairType: "revision_complete"
  },
  {
    id: "3",
    title: "Polissage boîtier acier",
    watchBrand: "Rolex",
    watchModel: "Submariner",
    description: "Polissage professionnel d'un boîtier Submariner avec respect des angles d'origine. Élimination des rayures tout en préservant les proportions du boîtier.",
    photoBefore: "https://www.clockmaker.com.au/rolex/polish_rolex_2.jpg",
    photoAfter: "https://watchlimit.com/wp-content/uploads/2024/11/s-l1600-52-600x800.webp",
    repairType: "polissage"
  },
  {
    id: "4",
    title: "Réparation mécanisme remontoir",
    watchBrand: "Patek Philippe",
    watchModel: "Calatrava",
    description: "Remplacement de la tige de remontoir et de la couronne d'origine. Travail minutieux pour conserver l'authenticité de cette pièce exceptionnelle.",
    photoBefore: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
    photoAfter: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600",
    repairType: "reparation"
  },
  {
    id: "5",
    title: "Test et remise en étanchéité",
    watchBrand: "Tudor",
    watchModel: "Pelagos",
    description: "Remplacement de tous les joints, test d'étanchéité sous pression à 500m. La montre retrouve ses performances de plongée d'origine.",
    photoBefore: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
    photoAfter: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
    repairType: "etancheite"
  },
  {
    id: "6",
    title: "Révision complète vintage",
    watchBrand: "Longines",
    watchModel: "Conquest Heritage",
    description: "Révision complète d'une Longines vintage incluant le mouvement, le polissage du boîtier et le remplacement du verre. Pièce remise à neuf dans le respect de son histoire.",
    photoBefore: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600",
    photoAfter: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?w=600",
    repairType: "revision_complete"
  }
];

export const repairTypeLabels: Record<GalleryItem["repairType"], string> = {
  revision_complete: "Révision complète",
  reparation: "Réparation",
  restauration: "Restauration",
  polissage: "Polissage",
  etancheite: "Étanchéité"
};
