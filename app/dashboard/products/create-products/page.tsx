"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateProducts } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import Link from "next/link";
export default function Page() {
  const initialState = {
    message: "",
    errors: {
      nom_produit: [],
      description: [],
      prix_unitaire: [],
      quantite: [],
    },
  };
  const [state, dispatch] = useFormState(CreateProducts, initialState);
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Créer un nouveau produit</h1>
          <p className="mt-2 text-muted-foreground">
            Remplissez le formulaire pour ajouter un nouveau produit à votre
            inventaire.
          </p>
        </div>
        <form className="space-y-6" action={dispatch}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Label htmlFor="nom_produit">Nom du produit</Label>
              <Input
                id="nom_produit"
                type="text"
                placeholder="Entrez le nom du produit"
                required
                name="nom_produit"
                aria-describedby="nom_produit-error"
              />
              <div id="nom_produit-error" aria-live="polite" aria-atomic="true">
                {state.errors?.nom_produit &&
                  state.errors.nom_produit.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="prix_unitaire">Prix</Label>
              <Input
                id="prix_unitaire"
                type="number"
                placeholder="Entrez le prix"
                min="0"
                step="0.01"
                required
                name="prix_unitaire"
                aria-describedby="prix_unitaire-error"
              />
              <div
                id="prix_unitaire-error"
                aria-live="polite"
                aria-atomic="true"
              >
                {state.errors?.nom_produit &&
                  state.errors.nom_produit.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="sm:col-span-6">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Entrez la description du produit"
                rows={3}
                required
                name="description"
                aria-describedby="description-error"
              />
              <div id="description-error" aria-live="polite" aria-atomic="true">
                {state.errors?.nom_produit &&
                  state.errors.nom_produit.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="quantite">Quantité</Label>
              <Input
                id="quantite"
                type="number"
                placeholder="Entrez la quantité"
                min="0"
                step="1"
                required
                name="quantite"
                aria-describedby="quantite-error"
              />
              <div id="quantite-error" aria-live="polite" aria-atomic="true">
                {state.errors?.nom_produit &&
                  state.errors.nom_produit.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 items-center">
          <Link href="/dashboard/products">
          <Button size="lg" variant="outline">Cancel</Button>
          </Link>
            <CreateProductButton />
          </div>
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}


function CreateProductButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        size="lg"
        aria-disabled={pending}
        disabled={pending}
      >
        Enregistrer le produit
      </Button>
    </div>
  );
}
