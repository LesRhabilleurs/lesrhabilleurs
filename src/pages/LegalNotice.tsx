import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function LegalNotice() {
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
              Informations légales
            </h1>

            <p className="text-muted-foreground text-lg">
              Informations concernant Les Rhabilleurs et l’utilisation de ce
              site internet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Identité */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Identité et exploitants
              </h2>

              <div className="text-muted-foreground leading-7 space-y-2">
                <p>
                  <span className="font-medium text-foreground">
                    Marque :
                  </span>{" "}
                  Les Rhabilleurs
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Exploitants :
                  </span>{" "}
                  Bryan Romero et Taylan Sirimsi
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Forme juridique :
                  </span>{" "}
                  Société simple de droit suisse
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Adresse :
                  </span>{" "}
                  Rue de la Birse 3, 2822 Courroux, Suisse
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    E-mail :
                  </span>{" "}
                  <a
                    href="mailto:info@lesrhabilleurs.ch"
                    className="text-primary hover:underline"
                  >
                    info@lesrhabilleurs.ch
                  </a>
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Téléphone :
                  </span>{" "}
                  [à compléter]
                </p>
              </div>
            </motion.section>

            {/* Activité */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Activité
              </h2>

              <p className="text-muted-foreground leading-7">
                Les Rhabilleurs proposent des services liés à l’horlogerie,
                notamment la réparation, l’entretien et la restauration de
                montres.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                Le site présente également des réalisations effectuées dans
                l’atelier, notamment au travers de photographies avant et après
                intervention.
              </p>
            </motion.section>

            {/* Montres vintage */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Vente de montres vintage
              </h2>

              <p className="text-muted-foreground leading-7">
                Les Rhabilleurs proposent également à la vente des montres
                vintage présentées sur le site.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                Les montres disponibles à la vente sont proposées selon leur
                disponibilité. Pour toute information concernant une montre,
                son état ou sa disponibilité, le client peut nous contacter
                directement.
              </p>
            </motion.section>

            {/* Paiement */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Modalités de paiement
              </h2>

              <p className="text-muted-foreground leading-7">
                Les ventes de montres sont réalisées directement avec le
                client. Le paiement est effectué en main propre lors de la
                remise de la montre.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                Aucun paiement en ligne n’est actuellement proposé directement
                sur ce site.
              </p>
            </motion.section>

            {/* Photos */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Photographies et réalisations
              </h2>

              <p className="text-muted-foreground leading-7">
                Les photographies présentées sur le site ont pour objectif de
                présenter les réalisations et le savoir-faire de l’atelier.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                Les images avant/après illustrent les interventions réalisées
                sur les montres et peuvent varier selon l’état et les
                caractéristiques de chaque pièce.
              </p>
            </motion.section>

            {/* Propriété intellectuelle */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Propriété intellectuelle
              </h2>

              <p className="text-muted-foreground leading-7">
                Sauf indication contraire, les contenus présents sur ce site,
                notamment les textes, photographies, éléments graphiques,
                logos et visuels, sont destinés à l’usage exclusif de
                Les Rhabilleurs.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                Toute reproduction, modification ou utilisation d’un contenu
                présent sur ce site sans autorisation préalable peut être
                interdite.
              </p>
            </motion.section>

            {/* Responsabilité */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Responsabilité
              </h2>

              <p className="text-muted-foreground leading-7">
                Les informations publiées sur ce site sont fournies à titre
                informatif. Les Rhabilleurs s’efforcent de maintenir des
                informations exactes et à jour.
              </p>

              <p className="text-muted-foreground leading-7 mt-4">
                La disponibilité, les caractéristiques et les informations
                relatives aux montres proposées à la vente peuvent évoluer.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              variants={fadeInUp}
              className="rounded-xl border bg-card p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Contact
              </h2>

              <p className="text-muted-foreground leading-7">
                Pour toute question concernant nos prestations, nos
                réalisations ou les montres disponibles à la vente, vous pouvez
                nous contacter à l’adresse suivante :
              </p>

              <p className="mt-4">
                <a
                  href="mailto:info@lesrhabilleurs.ch"
                  className="text-primary font-medium hover:underline"
                >
                  info@lesrhabilleurs.ch
                </a>
              </p>
            </motion.section>
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground text-center mt-10"
          >
            Dernière mise à jour : [à compléter]
          </motion.p>
        </div>
      </section>
    </div>
  );
}
