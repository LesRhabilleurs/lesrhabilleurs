import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
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
import { toast } from "sonner";

/* ---------------- SCHEMA ---------------- */
const quoteSchema = z.object({
  clientName: z.string().min(2, "Nom requis"),
  clientEmail: z.string().email("Email invalide"),
  clientPhone: z.string().optional(),
  watchBrand: z.string().min(1, "Marque requise"),
  watchModel: z.string().optional(),
  watchType: z.enum(["mecanique", "automatique", "quartz", "chronographe", "autre"]),
  problemDescription: z.string().min(10, "Description trop courte"),
  photosLink: z.string().url("Lien invalide").optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const watchTypes = [
  { value: "mecanique", label: "Mécanique" },
  { value: "automatique", label: "Automatique" },
  { value: "quartz", label: "Quartz" },
  { value: "chronographe", label: "Chronographe" },
  { value: "autre", label: "Autre" },
];

/* ---------------- COMPONENT ---------------- */
export default function QuoteRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  /* ---------------- SCROLL TO TOP ON STEP CHANGE ---------------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  /* ---------------- STEP NAVIGATION ---------------- */
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
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "sf_46l2fgm7c3fndffe8iaig5e9",
          subject: "Nouvelle demande de devis",
          name: data.clientName,
          email: data.clientEmail,
          message: `
Nom: ${data.clientName}
Email: ${data.clientEmail}
Téléphone: ${data.clientPhone || "-"}

Montre:
Marque: ${data.watchBrand}
Modèle: ${data.watchModel || "-"}
Type: ${data.watchType}

Problème:
${data.problemDescription}

Photos:
${data.photosLink || "Aucune photo fournie"}
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
                  <Label>Description du problème *</Label>
                  <Textarea {...register("problemDescription")} rows={5} />

                  <div className="mt-4 space-y-2">
                    <Label>Lien vers les photos (optionnel)</Label>
                    <Input
                      placeholder="https://drive.google.com/..."
                      {...register("photosLink")}
                    />
                    <p className="text-xs text-muted-foreground">
                      📸 Hébergez vos photos sur Google Drive, iCloud, Dropbox ou Imgur,
                      puis collez le lien ici.
                    </p>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6">
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



