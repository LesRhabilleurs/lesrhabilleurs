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

  // Ajoute tes prochains articles ici
];
