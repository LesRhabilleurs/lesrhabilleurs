import { motion } from "framer-motion";
import { newsItems } from "@/data/news";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function News() {
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
              Actualités horlogères
            </h1>

            <p className="text-muted-foreground text-lg">
              Chaque mois, retrouvez une nouvelle actualité
              autour du monde de l'horlogerie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-10"
          >
            {newsItems.map((article) => (
              <motion.article
                key={article.id}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >

                {/* Photo */}
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6 md:p-8">

                  <p className="text-sm text-muted-foreground mb-3">
                    {article.date}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>

                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
