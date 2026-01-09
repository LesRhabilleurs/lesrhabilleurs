import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Upload, Phone, Clock, Shield, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const quoteSchema = z.object({
  clientName: z.string().min(2, "Le nom est requis"),
  clientEmail: z.string().email("Email invalide"),
  clientPhone: z.string().optional(),
  watchBrand: z.string().min(1, "La marque est requise"),
  watchModel: z.string().optional(),
  watchType: z.enum(["mecanique", "automatique", "quartz", "chronographe", "autre"]),
  problemDescription: z.string().min(10, "Décrivez le problème en détail (min. 10 caractères)"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const steps = [
  { id: 1, title: "Vos coordonnées" },
  { id: 2, title: "Votre montre" },
  { id: 3, title: "Le problème" },
];

const watchTypes = [
  { value: "mecanique", label: "Mécanique" },
  { value: "automatique", label: "Automatique" },
  { value: "quartz", label: "Quartz" },
  { value: "chronographe", label: "Chronographe" },
  { value: "autre", label: "Autre" },
];

export default function QuoteRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      watchBrand: "",
      watchModel: "",
      watchType: "automatique",
      problemDescription: "",
    },
  });

  const { register, handleSubmit, formState: { errors }, trigger, setValue, watch } = form;

  const validateStep = async (step: number) => {
    switch (step) {
      case 1:
        return await trigger(["clientName", "clientEmail"]);
      case 2:
        return await trigger(["watchBrand", "watchType"]);
      case 3:
        return await trigger(["problemDescription"]);
      default:
        return true;
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    // Simulate submission
    console.log("Quote request:", data);
    toast.success("Votre demande a été envoyée avec succès !");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-6 px-4"
        >
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Demande envoyée avec succès !
          </h1>
          <p className="text-muted-foreground">
            Nous avons bien reçu votre demande de devis. Notre équipe l'examinera et vous 
            contactera sous 24-48 heures avec une estimation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="outline">
              <a href="/">Retour à l'accueil</a>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              Demande de devis
            </h1>
            <p className="text-muted-foreground text-lg">
              Décrivez-nous votre montre et le problème rencontré. Nous vous répondrons 
              sous 24-48 heures avec une estimation gratuite et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      )}
                    >
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "hidden sm:block w-24 lg:w-32 h-1 mx-2",
                          currentStep > step.id ? "bg-primary" : "bg-secondary"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    {/* Step 1: Contact Info */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-xl font-semibold mb-1">Vos coordonnées</h2>
                          <p className="text-sm text-muted-foreground">
                            Comment pouvons-nous vous contacter ?
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="clientName">Nom complet *</Label>
                            <Input
                              id="clientName"
                              {...register("clientName")}
                              placeholder="Jean Dupont"
                              className={errors.clientName ? "border-destructive" : ""}
                            />
                            {errors.clientName && (
                              <p className="text-sm text-destructive">{errors.clientName.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="clientEmail">Email *</Label>
                            <Input
                              id="clientEmail"
                              type="email"
                              {...register("clientEmail")}
                              placeholder="jean.dupont@email.ch"
                              className={errors.clientEmail ? "border-destructive" : ""}
                            />
                            {errors.clientEmail && (
                              <p className="text-sm text-destructive">{errors.clientEmail.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="clientPhone">Téléphone (optionnel)</Label>
                            <Input
                              id="clientPhone"
                              type="tel"
                              {...register("clientPhone")}
                              placeholder="+41 79 123 45 67"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Watch Info */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-xl font-semibold mb-1">Votre montre</h2>
                          <p className="text-sm text-muted-foreground">
                            Décrivez la montre que vous souhaitez faire réparer
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="watchBrand">Marque *</Label>
                            <Input
                              id="watchBrand"
                              {...register("watchBrand")}
                              placeholder="Ex: Omega, Rolex, Tissot..."
                              className={errors.watchBrand ? "border-destructive" : ""}
                            />
                            {errors.watchBrand && (
                              <p className="text-sm text-destructive">{errors.watchBrand.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="watchModel">Modèle (optionnel)</Label>
                            <Input
                              id="watchModel"
                              {...register("watchModel")}
                              placeholder="Ex: Speedmaster, Datejust..."
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Type de mouvement *</Label>
                            <Select
                              value={watch("watchType")}
                              onValueChange={(value) => setValue("watchType", value as any)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez le type" />
                              </SelectTrigger>
                              <SelectContent>
                                {watchTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Problem Description */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-xl font-semibold mb-1">Le problème</h2>
                          <p className="text-sm text-muted-foreground">
                            Décrivez le problème rencontré avec votre montre
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="problemDescription">Description du problème *</Label>
                            <Textarea
                              id="problemDescription"
                              {...register("problemDescription")}
                              placeholder="Décrivez le problème en détail: la montre ne fonctionne plus, retard/avance, bruit anormal, verre cassé, étanchéité défaillante..."
                              rows={6}
                              className={errors.problemDescription ? "border-destructive" : ""}
                            />
                            {errors.problemDescription && (
                              <p className="text-sm text-destructive">{errors.problemDescription.message}</p>
                            )}
                          </div>

                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Photos (optionnel) - Fonctionnalité à venir
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-border">
                      {currentStep > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Précédent
                        </Button>
                      ) : (
                        <div />
                      )}

                      {currentStep < 3 ? (
                        <Button type="button" onClick={nextStep}>
                          Suivant
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      ) : (
                        <Button type="submit">
                          Envoyer ma demande
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Notre processus</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-sm">Demande de devis</p>
                        <p className="text-xs text-muted-foreground">
                          Décrivez votre montre et le problème
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-sm">Analyse & estimation</p>
                        <p className="text-xs text-muted-foreground">
                          Nous vous recontactons sous 24-48h
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-sm">Réparation</p>
                        <p className="text-xs text-muted-foreground">
                          Travail effectué par nos experts
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        4
                      </span>
                      <div>
                        <p className="font-medium text-sm">Livraison</p>
                        <p className="text-xs text-muted-foreground">
                          Votre montre vous est retournée
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Besoin d'aide ?</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    Appelez-nous pour discuter de votre montre
                  </p>
                  <a
                    href="tel:+41326661234"
                    className="block text-lg font-semibold hover:underline"
                  >
                    +41 32 666 12 34
                  </a>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  Devis gratuit et sans engagement
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  Réponse sous 24-48 heures
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
