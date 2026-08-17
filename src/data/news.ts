export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Favre-Leuba Deep Raider Day Date",
    date: "09 août 2026",
    image: "/article-1.jpg",
    content:
      "Favre-Leuba dévoile une nouvelle version de sa Deep Raider Day Date avec un superbe cadran vert fumé. Cette plongeuse de 40 mm, étanche à 300 mètres, conserve l'identité sportive de la collection tout en affichant le jour et la date à 3 heures. Animée par un mouvement automatique, elle est proposée sur bracelet acier et se distingue par son cadran dégradé, qui passe progressivement du vert au noir. Une nouvelle déclinaison élégante et originale pour cette collection emblématique de Favre-Leuba."
  },
  {
    id: 2,
    title: "Oris Star Edition",
    date: "05 juillet 2026",
    image: "/article-02.jpg",
    content:
      "Oris dévoile la nouvelle Star Edition, une montre élégante qui associe l’esprit sportif de la maison à une finition raffinée. Son design équilibré, son cadran soigneusement travaillé et ses détails soignés lui donnent une présence à la fois moderne et intemporelle. Une nouvelle édition qui vient enrichir l’univers Oris avec une pièce sobre, élégante et pleine de caractère."
  },
  {
    id: 3,
    title: "EPHJ 2026 : la haute précision horlogère au rendez-vous à Genève",
    date: "07 juin 2026",
    image: "/article-3.jpg",
    content:
      "Du 16 au 19 juin 2026, Genève accueillera une nouvelle édition de l’EPHJ à Palexpo, l’un des rendez-vous majeurs de la haute précision et de l’industrie horlogère. L’événement réunira des centaines d’exposants venus présenter leurs dernières innovations, leurs savoir-faire et les technologies qui façonnent l’horlogerie de demain. Cette édition s’annonce particulièrement intéressante avec la présence de près de 800 entreprises issues de 18 pays. L’horlogerie et la joaillerie resteront au cœur du salon, aux côtés de la microtechnique, des technologies médicales et d’autres secteurs liés à la haute précision. Parmi les temps forts annoncés figurera également un inédit « Global Watchmaking G7 », réunissant les principales nations horlogères autour des grands enjeux et des évolutions futures de l’industrie. Un rendez-vous incontournable pour découvrir les nouvelles tendances, rencontrer les acteurs de la branche et prendre le pouls de l’horlogerie suisse et internationale."
  },
  {
    id: 4,
    title: "Le TWS 2026 annulé",
    date: "10 mai 2026",
    image: "/article-4.jpg",
    content:
      "Le Technical Watchmaker Show (TWS), rendez-vous important de la sous-traitance horlogère et de la microtechnique à La Chaux-de-Fonds, n’aura finalement pas lieu en 2026. Prévue du 15 au 18 septembre, cette septième édition a été annulée par les organisateurs en raison d’un nombre insuffisant d’exposants. Seuls 42 participants étaient inscrits, contre 67 lors de l’édition précédente, dans un contexte économique difficile pour l’industrie horlogère. Cette annulation témoigne des défis que traverse actuellement la branche et de l’impact de la conjoncture sur les acteurs de la sous-traitance. Le TWS donne toutefois déjà rendez-vous aux professionnels en septembre 2027 pour une nouvelle édition."
  },
  {
    id: 5,
    title: "Watches and Wonders Geneva 2026 : les nouveautés horlogères à ne pas manquer",
    date: "05 avril 2026",
    image: "/article-5.jpg",
    content:
      "Du 14 au 20 avril 2026, Genève accueillera une nouvelle édition de Watches and Wonders, l’un des rendez-vous majeurs de l’horlogerie mondiale. Les plus grandes maisons présenteront leurs nouvelles créations, entre innovations techniques, nouvelles complications et réinterprétations de modèles emblématiques. Rolex, Patek Philippe, Cartier, Audemars Piguet, Tudor, TAG Heuer et de nombreuses autres marques seront au rendez-vous. Cette édition sera également l’occasion de découvrir les nouvelles tendances de l’horlogerie et les pièces qui pourraient marquer l’année 2026."
  },
  {
    id: 6,
    title: "Parmigiani Fleurier Tonda PF Automatic Alta Rosa",
    date: "08 mars 2026",
    image: "/article-6.jpg",
    content:
      "Dévoilée en 2026, la Tonda PF Automatic 36 mm Alta Rosa joue la carte de la discrétion et de l’élégance. Son cadran rose Alta Rosa, réalisé avec un guillochage manuel Grain d’Orge, est associé à une boîte de 36,1 mm en acier et à une lunette en platine 950. À l’intérieur, le calibre manufacture PF770-HM offre 60 heures de réserve de marche, tandis que le bracelet intégré en acier et l’étanchéité à 100 mètres en font une montre aussi raffinée que polyvalente. Affichée à 21 900 CHF, cette nouvelle Tonda PF mise davantage sur la subtilité que sur l’exubérance."
  },
  {
    id: 7,
    title: "Audemars Piguet : L’Arc, la nouvelle manufacture du Brassus",
    date: "01 février 2026",
    image: "/article-7.jpg",
    content:
      "Audemars Piguet a inauguré en 2026 L’Arc, sa nouvelle manufacture au Brassus, après trois années de travaux. Avec ses 23’700 m² et sa façade vitrée incurvée de 321 mètres, le bâtiment réunit près de 700 collaborateurs auparavant répartis dans plusieurs sites de la Vallée de Joux. Pensé autour de la collaboration et de la durabilité, L’Arc bénéficie notamment de façades en verre électrochrome et de la certification Minergie-ECO. La manufacture intègre également des systèmes automatisés destinés à optimiser la production et le stockage, tout en laissant davantage de place aux métiers nécessitant le savoir-faire manuel des horlogers. Un nouveau chapitre pour Audemars Piguet, qui cherche ainsi à réunir tradition, innovation et capacité de production au cœur de la Vallée de Joux."
  },
  {
    id: 8,
    title: "Maurice Lacroix AIKON Skeleton Label Noir — la nouvelle pièce qui frappe fort",
    date: "11 janvier 2026",
    image: "/article-08.jpg",
    content:
      "Sortie en janvier 2026, la Maurice Lacroix AIKON Manufacture Skeleton Label Noir 45 mm est une édition limitée à seulement 100 exemplaires. Son boîtier en acier noir DLC, son cadran squelette et ses touches turquoise lui donnent un look très sportif et agressif. Elle embarque le calibre manufacture ML234, offrant environ 50 heures de réserve de marche, et est livrée avec deux bracelets interchangeables. Une pièce exclusive proposée autour de 6 900 CHF."
  },
  {
    id: 9,
    title: "Frédérique Constant Highlife Moonphase Onyx Moon",
    date: "07 décembre 2025",
    image: "/article-9.jpg",
    content:
      "Nouvelle collaboration avec Time+Tide, cette Highlife de 39 mm se distingue par son cadran en onyx noir, sa phase de lune et ses touches de rouge. Elle embarque le calibre manufacture FC-716, offrant 72 heures de réserve de marche. Limitée à seulement 100 exemplaires, elle est proposée avec un bracelet intégré en acier ainsi que deux bracelets supplémentaires. Prix : environ 4 700 CHF."
  },
  {
    id: 10,
    title: "Glashütte Original célèbre 180 ans d’horlogerie avec une édition anniversaire",
    date: "02 novembre 2025",
    image: "/article-10.jpg",
    content:
      "Pour célébrer ses 180 ans d’horlogerie, Glashütte Original dévoile en septembre 2025 la PanoMaticLunar Anniversary Edition, une série limitée à 180 exemplaires. Son boîtier de 40 mm en platine accueille un cadran en aventurine bleu profond, évoquant un ciel étoilé, tandis que la phase de lune et la date panoramique renforcent son esthétique sophistiquée. Animée par le Calibre 92-14, doté de 100 heures de réserve de marche, cette création anniversaire associe savoir-faire traditionnel et innovation horlogère."
  },



  // Ajoute tes prochains articles ici
];
