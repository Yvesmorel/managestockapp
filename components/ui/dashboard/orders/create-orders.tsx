"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { CreateOrders } from "@/app/lib/actions";
import { useState, useRef, Dispatch, SetStateAction } from "react";
import { SaveProductType } from "@/app/lib/definitions";
import { QueryResultRow } from "@vercel/postgres";
import LoadingButton from "../../loading-button";
export default function CreateOders({
  categories,
}: {
  categories: QueryResultRow[];
}) {
  const [productList, setProductList] = useState<SaveProductType[]>([]);
  const initialState = {
    errors: {
      date_livraison: [],
      nom_fournisseur: [],
      num_bon_livraison: [],
      statut_commande: [],
      prenom_fournisseur: [],
      contact_fournisseur: [],
      adresse_fournisseur: [],
    },
    message: "",
  };

  const [state, dispatch] = useFormState(
    CreateOrders.bind(null, productList),
    initialState
  );

  return (
    <div className="container w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Enregistrement de la commande</h1>
          <p className="text-muted-foreground">
          Veuillez remplir le formulaire pour enregistrer les détails de votre commande.
          </p>
        </div>
        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          action={dispatch}
        >
          <div className="grid gap-2">
            <Label htmlFor="order-date">Date de commande</Label>
            <Input
              required
              type="date"
              id="order-date"
              name="date_livraison"
              aria-describedby="date_livraison-error"
            />
            <div
              id="date_livraison-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.date_livraison &&
                state.errors.date_livraison.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="delivery-number">Numéro de bon de livraison</Label>
            <Input
              required
              type="text"
              id="delivery-number"
              name="num_bon_livraison"
              aria-describedby="num_bon_livraison-error"
            />
            <div
              id="num_bon_livraison-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.num_bon_livraison &&
                state.errors.num_bon_livraison.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="order-status">Statut de la commande</Label>
            <Select
              required
              name="statut_commande"
              aria-describedby="statut_commande-error"
            >
              <SelectTrigger>
                <SelectValue
                  id="order-status"
                  placeholder="Sélectionnez le statut"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="delivered">Livré</SelectItem>
              </SelectContent>
            </Select>
            <div
              id="statut_commande-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.statut_commande &&
                state.errors.statut_commande.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Nom  du fournisseur</Label>
            <Input
              required
              type="text"
              id="last-name"
              name="nom_fournisseur"
              aria-describedby="nom_fournisseur-error"
            />
            <div
              id="nom_fournisseur-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.nom_fournisseur &&
                state.errors.nom_fournisseur.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="first-name">Prénom  du fournisseur</Label>
            <Input
              required
              type="text"
              id="first-name"
              name="prenom_fournisseur"
              aria-describedby="prenom_fournisseur-error"
            />
            <div
              id="prenom_fournisseur-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.prenom_fournisseur &&
                state.errors.prenom_fournisseur.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Contact  du fournisseur</Label>
            <Input
              required
              type="text"
              id="contact"
              name="contact_fournisseur"
              aria-describedby="contact_fournisseur-error"
            />
            <div
              id="contact_fournisseur-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.contact_fournisseur &&
                state.errors.contact_fournisseur.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="col-span-2 grid gap-2">
            <Label htmlFor="supplier-address">Adresse du fournisseur</Label>
            <Textarea
              required
              id="supplier-address"
              name="adresse_fournisseur"
              rows={3}
              aria-describedby="adresse_fournisseur-error"
            />
            <div
              id="adresse_fournisseur-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.adresse_fournisseur &&
                state.errors.adresse_fournisseur.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div className="col-span-4">
            <ProductManagement
              productList={productList}
              setProductList={setProductList}
              categories={categories}
            />
          </div>

          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}

          <div className="flex col-span-4 justify-end gap-2">
            <Link href="/dashboard/orders">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <CreateOrdersButton productList={productList} />
          </div>
        </form>
      </div>
    </div>
  );
}
function CreateOrdersButton({
  productList,
}: {
  productList: SaveProductType[];
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending || productList.length === 0}>
     
      {!pending && <p> Enregistrer la commande</p>}
      {pending && <LoadingButton />}
    </Button>
  );
}
// Assurez-vous de bien importer vos composants Input et Button

function ProductManagement({
  productList,
  setProductList,
  categories,
}: {
  productList: SaveProductType[];
  setProductList: Dispatch<SetStateAction<SaveProductType[]>>;
  categories: QueryResultRow[];
}) {
  const productRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");
  const handleAddProduct = () => {
    const product = productRef.current?.value;
    const quantity = quantityRef.current?.value;
    const description = descriptionRef.current?.value;
    const price = priceRef.current?.value;

    if (
      product &&
      quantity &&
      Number(quantity) > 0 &&
      description &&
      price &&
      Number(price) > 0 &&
      category
    ) {
      setProductList([
        ...productList,
        {
          product,
          quantity: Number(quantity),
          description,
          price: Number(price),
          category,
        },
      ]);
      if (productRef.current) productRef.current.value = "";
      if (quantityRef.current) quantityRef.current.value = "1";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (priceRef.current) priceRef.current.value = "0";
      if (category) setCategory("");
    }
  };

  const handleRemoveProduct = (index: number) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded greenShadow">
      <h1 className="text-2xl font-bold mb-6">Ajoutez des produits</h1>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="space-y-2">
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-700"
          >
            Produit
          </label>
          <Input
            id="product-name"
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="Produit"
            ref={productRef}
          />
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
            ref={quantityRef}
            defaultValue={1}
            min={1}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="description_input"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Input
            id="description_input"
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="Description"
            ref={descriptionRef}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="price_input"
            className="block text-sm font-medium text-gray-700"
          >
            Prix Unitaire
          </label>
          <Input
            id="price_input"
            type="number"
            className="form-input mt-1 block w-full"
            placeholder="Prix Unitaire"
            ref={priceRef}
            defaultValue={0}
            min={0}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="category_input"
            className="block text-sm font-medium text-gray-700"
          >
            Catégorie
          </label>
          <Select
            name="category_input"
            value={category}
            onValueChange={(value) => setCategory(value)}
          >
            <SelectTrigger>
              <SelectValue
                aria-describedby="category_input-error"
                defaultValue={categories[0].id}
                placeholder="Select categories"
                id="category_input"
              />
            </SelectTrigger>
            <SelectContent>
              {categories.map((categorie, key) => {
                return (
                  <SelectItem
                    key={`${key} ${categorie.id_categorie}`}
                    value={`${categorie.id_categorie} ${categorie.nom}`}
                  >
                    {categorie.nom}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
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
        <Button
        
          className="bg-[#e8f1f1] text-[#1e7376]  px-4 py-2 rounded-md hover:opacity-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => setProductList([])}
          disabled={productList.length===0}
        >
          Supprimer tout
        </Button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Liste des produits</h2>
        <ul className="list-disc list-inside">
          {productList.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <span>
             
                {item.product} - <b>Quantité:</b> {item.quantity} - <b>Description:</b>{" "}
                {item.description} - <b>Prix:</b> {item.price}€ - <b>Catégorie:</b>{" "}
                {item.category.split(' ')[1]}
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
