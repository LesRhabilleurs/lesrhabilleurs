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
    date: "11 août 2026",
    image: "/article-1.jpg",
    content:
      "Favre-Leuba dévoile une nouvelle version de sa Deep Raider Day Date avec un superbe cadran vert fumé. Cette plongeuse de 40 mm, étanche à 300 mètres, conserve l'identité sportive de la collection tout en affichant le jour et la date à 3 heures." 
      "Animée par un mouvement automatique, elle est proposée sur bracelet acier et se distingue par son cadran dégradé, qui passe progressivement du vert au noir. 
      "Une nouvelle déclinaison élégante et originale pour cette collection emblématique de Favre-Leuba."
  },

  // Ajoute tes prochains articles ici
];
