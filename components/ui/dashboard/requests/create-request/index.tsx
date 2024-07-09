"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { QueryResultRow } from "@vercel/postgres";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { CreateRequests } from "@/app/lib/actions";
import { fetchDepartement } from "@/app/lib/data";
import DeptSelect from "@/components/ui/dashboard/requests/depeartement-select";
import { productQuantity } from "@/app/lib/utils";
import { productListType } from "@/app/lib/definitions";
import LoadingButton from "@/components/ui/loading-button";

export default function CreateRequest({
  departement,
  products,
}: {
  departement: QueryResultRow[];
  products: QueryResultRow[];
}) {
  const initialState = {
    errors: {
      libelle_demande: [],
      nom_departement: [],
      nom_employe: [],
      prenom_employe: [],
      poste_employe: [],
      adresse_employe: [],
      telephone_employe: [],
    },
    message: "",
  };
  const [productList, setProductList] = useState<
    { product: string; quantity: number; totalQuantity: number }[]
  >([]);
  const [state, dispatch] = useFormState(
    CreateRequests.bind(null, productList),
    initialState
  );

  return (
    <div className="w-full h-full">
      <form className="grid gap-6 p-6 sm:p-8 md:p-10" action={dispatch}>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Créer une demande</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="libelle_demande">Libellé de la demande</Label>
            <Textarea
              aria-describedby="libelle_demande-error"
              required
              id="libelle_demande"
              placeholder="Entrez le libellé de la demande"
              name="libelle_demande"
            />
            <div
              id="libelle_demande-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.libelle_demande &&
                state.errors.libelle_demande.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nom_departement">Département de l'employé</Label>
          <Select name="nom_departement">
            <SelectTrigger>
              <SelectValue
                aria-describedby="nom_departement-error"
                defaultValue={departement[0].id}
                placeholder="Sélectionnez le departement de l'employé"
                id="nom_departement"
              />
            </SelectTrigger>
            <SelectContent>
              {departement.map((dept, key) => {
                return (
                  <SelectItem key={key} value={dept.nom_departement}>
                    {dept.nom_departement}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <div id="nom_departement-error" aria-live="polite" aria-atomic="true">
            {state.errors?.nom_departement &&
              state.errors.nom_departement.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nom_employe">Prénom de l'employé</Label>
            <Input
              aria-describedby="nom_employe-error"
              id="nom_employe"
              placeholder="Entrez le prénom de l'employé"
              name="nom_employe"
            />
            <div id="nom_employe-error" aria-live="polite" aria-atomic="true">
              {state.errors?.nom_employe &&
                state.errors.nom_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prenom_employe">Nom de l'employé</Label>
            <Input
              aria-describedby="prenom_employe-error"
              required
              id="prenom_employe"
              placeholder="Entrez le nom de l'employé"
              name="prenom_employe"
            />
            <div
              id="prenom_employe-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.prenom_employe &&
                state.errors.prenom_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="poste_employe">Poste de l'employé</Label>
            <Input
              aria-describedby="poste_employe-error"
              required
              id="poste_employe"
              placeholder="Entrez le poste de l'employé"
              name="poste_employe"
            />
            <div id="poste_employe-error" aria-live="polite" aria-atomic="true">
              {state.errors?.poste_employe &&
                state.errors.poste_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="adresse_employe">Adresse de l'employé</Label>
            <Input
              aria-describedby="adresse_employe-error"
              required
              id="adresse_employe"
              placeholder="Entrez l'adresse de l'employé"
              name="adresse_employe"
            />
            <div
              id="adresse_employe-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.adresse_employe &&
                state.errors.adresse_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone_employe">Téléphone de l'employé</Label>
          <Input
            aria-describedby="telephone_employe-error"
            required
            id="telephone_employe"
            type="tel"
            placeholder="Entrez le numéro de téléphone de l'employé"
            name="telephone_employe"
          />
          <div
            id="telephone_employe-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.telephone_employe &&
              state.errors.telephone_employe.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <ProductManagement
          productList={productList}
          setProductList={setProductList}
          products={products}
        />
        <div className="flex justify-end gap-2">
          <Link href="/dashboard/requests">
            <Button variant="outline">Retour</Button>
          </Link>
          <CreateRequestButton productList={productList} />
        </div>
        {state.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </form>
    </div>
  );
}
function CreateRequestButton({
  productList,
}: {
  productList: productListType;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending || productList.length === 0}
    >
      {!pending && <p>Ajouter la demande</p>}
      {pending && <LoadingButton />}
      
    </Button>
  );
}

function ProductManagement({
  products,
  productList,
  setProductList,
}: {
  products: QueryResultRow[];
  productList: productListType;
  setProductList: Dispatch<SetStateAction<productListType>>;
}) {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    if (selectedProduct && quantity > 0) {
      setProductList([
        ...productList,
        {
          product: selectedProduct,
          quantity,
          totalQuantity: productQuantity(products, selectedProduct),
        },
      ]);
      setSelectedProduct("");
      setQuantity(1);
    }
  };

  const handleRemoveProduct = (index: number) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Liste des produits</h1>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="space-y-2">
          <label
            htmlFor="product_select"
            className="block text-sm font-medium text-gray-700"
          >
            Produit
          </label>

          <Select
            value={selectedProduct}
            onValueChange={(value) => setSelectedProduct(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un produit" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product, key) => {
                return (
                  <SelectItem
                    key={key}
                    value={`${product.id} ${product.nom_produit}`}
                  >
                    {`${product.nom_produit}`}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="quantity_input"
            className="block text-sm font-medium text-gray-700"
          >
            Quantité
          </label>
          <Input
            id="quantity_input"
            type="number"
            className="form-input mt-1 block w-full"
            placeholder="Quantité"
            value={quantity}
            min={1}
            max={productQuantity(products, selectedProduct) || 1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          className="bg-[#1e7376] text-[#e8f1f1] text-white px-4 py-2 rounded-md hover:opacity-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={handleAddProduct}
        >
          Ajouter
        </button>
        <button
          type="button"
          className="bg-[#e8f1f1] text-[#1e7376]  px-4 py-2 rounded-md hover:opacity-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => setProductList([])}
        >
          Supprimer tout
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Liste des produits</h2>
        <ul className="list-disc list-inside">
          {productList.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <span>
                {item.product.split(" ")[1]} - Quantité: {item.quantity}
              </span>
              <Button
                type="button"
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => handleRemoveProduct(index)}
              >
                Supprimer
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
