import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Upload, ArrowRight, ArrowLeft } from "lucide-react";
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

/* ---------------- SCHEMA ---------------- */

const quoteSchema = z.object({
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().optional(),
  watchBrand: z.string().min(1),
  watchModel: z.string().optional(),
  watchType: z.enum(["mecanique", "automatique", "quartz", "chronographe", "autre"]),
  problemDescription: z.string().min(10),
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

/* ---------------- UTILS ---------------- */

const filesToBase64 = (files: File[]) =>
  Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    )
  );

/* ---------------- COMPONENT ---------------- */

export default function QuoteRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      watchType: "automatique",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = form;

  const validateStep = async (step: number) => {
    if (step === 1) return trigger(["clientName", "clientEmail"]);
    if (step === 2) return trigger(["watchBrand", "watchType"]);
    if (step === 3) return trigger(["problemDescription"]);
    return true;
  };

  const nextStep = async () => {
    if (await validateStep(currentStep)) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => setCurrentStep((s) => s - 1);

  /* ---------------- SUBMIT ---------------- */

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const photosBase64 = await filesToBase64(photos);

      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "TA_CLE_STATIC_FORMS",
          subject: "Nouvelle demande de devis",
          name: data.clientName,
          email: data.clientEmail,
          message: `
Nom: ${data.clientName}
Email: ${data.clientEmail}
Téléphone: ${data.clientPhone || "-"}
Marque: ${data.watchBrand}
Modèle: ${data.watchModel || "-"}
Type: ${data.watchType}

Problème:
${data.problemDescription}

Photos:
${photosBase64.join("\n")}
          `,
        }),
      });

      if (!response.ok) throw new Error();
      toast.success("Demande envoyée avec succès !");
      setIsSubmitted(true);
    } catch (e) {
      toast.error("Erreur lors de l’envoi du formulaire");
      console.error(e);
    }
  };

  /* ---------------- SUCCESS ---------------- */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Check className="mx-auto h-10 w-10 text-green-600" />
          <h1 className="text-2xl font-bold">Demande envoyée</h1>
          <Button asChild variant="outline">
            <a href="/">Retour à l’accueil</a>
          </Button>
        </div>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="p-8 space-y-6">

              {currentStep === 1 && (
                <>
                  <Label>Nom *</Label>
                  <Input {...register("clientName")} />
                  <Label>Email *</Label>
                  <Input type="email" {...register("clientEmail")} />
                  <Label>Téléphone</Label>
                  <Input {...register("clientPhone")} />
                </>
              )}

              {currentStep === 2 && (
                <>
                  <Label>Marque *</Label>
                  <Input {...register("watchBrand")} />
                  <Label>Modèle</Label>
                  <Input {...register("watchModel")} />
                  <Label>Type *</Label>
                  <Select
                    value={watch("watchType")}
                    onValueChange={(v) => setValue("watchType", v as any)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {watchTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <Label>Description *</Label>
                  <Textarea {...register("problemDescription")} rows={5} />

                  <div className="border-dashed border-2 p-4 text-center">
                    <Upload className="mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) =>
                        setPhotos(Array.from(e.target.files || []))
                      }
                    />
                    {photos.length > 0 && (
                      <p className="text-sm mt-2">
                        {photos.length} photo(s) sélectionnée(s)
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="flex justify-between pt-4">
                {currentStep > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                ) : <div />}

                {currentStep < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Suivant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">
                    Envoyer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>

            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}


