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
    photoBefore: "https://cdn.shopify.com/s/files/1/0573/8630/3539/files/IMG_7214_1024x1024.jpg?v=1666862813",
    photoAfter: "https://cdn.shopify.com/s/files/1/0573/8630/3539/files/IMG_7200_1024x1024.jpg?v=1666862790",
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
    photoAfter: "https://img.chrono24.com/images/uhren/40080099-euhsvgrx2qr6zzxlqbssepzj-ExtraLarge.jpg",
    repairType: "polissage"
  },
  {
    id: "4",
    title: "Réparation mécanisme remontoir",
    watchBrand: "Patek Philippe",
    watchModel: "Calatrava",
    description: "Remplacement de la tige de remontoir et de la couronne d'origine. Travail minutieux pour conserver l'authenticité de cette pièce exceptionnelle.",
    photoBefore: "https://i.ebayimg.com/images/g/yG4AAOSwWGxmRH-p/s-l400.jpg",
    photoAfter: "https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/206436-51882",
    repairType: "reparation"
  },
  {
    id: "5",
    title: "Test et remise en étanchéité",
    watchBrand: "Tudor",
    watchModel: "Pelagos",
    description: "Remplacement de tous les joints, test d'étanchéité sous pression à 500m. La montre retrouve ses performances de plongée d'origine.",
    photoBefore: "https://hodinkee.imgix.net/uploads/article/hero_image/689/Test.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12",
    photoAfter: "https://img.chrono24.com/images/uhren/6ymss7akp9jr-lxax5iqnudg8um63o5y0pvgq-ExtraLarge.jpg",
    repairType: "etancheite"
  },
  {
    id: "6",
    title: "Révision complète vintage",
    watchBrand: "Longines",
    watchModel: "Conquest Heritage",
    description: "Révision complète d'une Longines vintage incluant le mouvement, le polissage du boîtier et le remplacement du verre. Pièce remise à neuf dans le respect de son histoire.",
    photoBefore: "https://static.wixstatic.com/media/dea6ce_a7f8090ead3d40d987854e13458c0465~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    photoAfter: "https://api.ecom.longines.com/media/catalog/product/9/0/9004-9888328-bottom-gallery-4db95e.jpg?&w=2560",
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
