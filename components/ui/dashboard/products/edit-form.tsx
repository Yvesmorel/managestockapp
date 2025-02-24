"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UpdateProducts } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { Product } from "@/app/lib/definitions";
import Link from "next/link";
import LoadingButton from "../../loading-button";
import { QueryResultRow } from "@vercel/postgres";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
export default function EditForm({
  product,
  id,
  categories,
}: {
  product: Product;
  id: string;
  categories: QueryResultRow[];
}) {
  const initialState = {
    message: "",
    errors: {
      nom_produit: [],
      description: [],
      prix_unitaire: [],
      quantite: [],
      categorie_id: [],
    },
  };
  const UpdateProductsWithId = UpdateProducts.bind(null, id);
  const [state, dispatch] = useFormState(UpdateProductsWithId, initialState);
  return (
    <div className="w-full h-full flex justify-center items-center ">
    <div className="max-w-2xl my-auto mx-auto py-12 px-4 sm:px-6 lg:px-8 flex items-center bg-white greenShadow rounded">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Modifier ce produit</h1>
          <p className="mt-2 text-muted-foreground">
            Remplissez le formulaire modifier ce produit.
          </p>
        </div>
        <form className="space-y-6" action={dispatch}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Label htmlFor="nom_produit">Nom du produit</Label>
              <Input
                defaultValue={product.nom_produit}
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
                defaultValue={product.prix_unitaire}
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
                defaultValue={product.description}
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
            <div className="sm:col-span-4 flex-1">
              <Label htmlFor="categorie_id">Categories</Label>
              <Select name="categorie_id"  defaultValue={`${`${product.id_categorie}`}`}>
                <SelectTrigger>
                  <SelectValue
                    aria-describedby="categorie_id-error"
                    placeholder="Selectionner une categorie"
                    id="categorie_id"
                  />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((categorie, key) => {
                    return (
                      <SelectItem
                        key={`${key} ${categorie.id_categorie}`}
                        value={`${categorie.id_categorie}`}
                      >
                        {categorie.nom}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <div
                id="categorie_id-error"
                aria-live="polite"
                aria-atomic="true"
              >
                {state.errors?.categorie_id &&
                  state.errors.categorie_id.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="quantite">Quantité</Label>
              <Input
                defaultValue={product.quantite}
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
              <Button variant="outline" size="lg">
                Retour
              </Button>
            </Link>
            <UpdateProductButton />
          </div>
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </form>
      </div>
    </div>
    </div>
  );
}

function UpdateProductButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        size="lg"
        aria-disabled={pending}
        disabled={pending}
      >
        {!pending && <p>Modifier le produit</p>}
        {pending && <LoadingButton />}
      </Button>
    </div>
  );
}
