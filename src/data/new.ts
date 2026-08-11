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
    title: "L'actualité horlogère de la semaine",
    date: "11 août 2026",
    image: "/news/article-1.jpg",
    content:
      "Découvrez cette semaine les dernières nouvelles du monde de l'horlogerie, les nouveautés et les événements qui font l'actualité."
  },

  // Ajoute tes prochains articles ici
];
