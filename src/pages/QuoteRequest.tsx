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
  const [photos, setPhotos] = useState<File[]>([]); // <-- stocke les fichiers sélectionnés

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

  // Convertir les fichiers en base64
  const filesToBase64 = (files: File[]) => {
    return Promise.all(
      files.map(file => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      }))
    );
  };

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const photosBase64 = await filesToBase64(photos);

      const message = `
Nom: ${data.clientName}
Email: ${data.clientEmail}
Téléphone: ${data.clientPhone || "-"}
Marque: ${data.watchBrand}
Modèle: ${data.watchModel || "-"}
Type: ${data.watchType}
Problème: ${data.problemDescription}
Photos: ${photosBase64.join("\n")}
      `;

      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: "TA_CLE_ICI", // <-- Remplace par ta clé Static Forms
          name: data.clientName,
          email: data.clientEmail,
          message,
        }),
      });

      if (response.ok) {
        toast.success("Votre demande a été envoyée avec succès !");
        setIsSubmitted(true);
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Impossible d'envoyer la demande. Vérifiez votre connexion.");
    }
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 md:p-8">
                {/* Step 1, 2, 3 ... */}
                {/* On garde ton code existant pour les étapes 1-3 */}

                {/* Upload photos */}
                {currentStep === 3 && (
                  <div className="mt-6">
                    <Label>Photos (optionnel)</Label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => setPhotos(Array.from(e.target.files || []))}
                      className="mt-2"
                    />
                  </div>
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
      </section>
    </div>
  );
}

