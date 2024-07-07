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
import { useState } from "react";
export default function Component() {
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

  const [state, dispatch] = useFormState(CreateOrders, initialState);

  return (
    <div className="container w-full px-4 py-12">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Order Registration</h1>
          <p className="text-muted-foreground">
            Please fill out the form to record your order details.
          </p>
        </div>
        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          action={dispatch}
        >
          <div className="grid gap-2">
            <Label htmlFor="order-date">Order Date</Label>
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
            <Label htmlFor="delivery-number">Delivery Goods Number</Label>
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
            <Label htmlFor="order-status">Order Status</Label>
            <Select
              required
              name="statut_commande"
              aria-describedby="statut_commande-error"
            >
              <SelectTrigger>
                <SelectValue id="order-status" placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
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
            <Label htmlFor="last-name">Last Name</Label>
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
            <Label htmlFor="first-name">First Name</Label>
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
            <Label htmlFor="contact">Contact</Label>
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
            <Label htmlFor="supplier-address">Supplier Address</Label>
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
            <ProductManagement />
          </div>

          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}

          <div className="flex col-span-4 justify-end gap-2">
            <Link href="/dashboard/orders">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <CreateOrdersButton />
          </div>
        </form>
      </div>
    </div>
  );
}
function CreateOrdersButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Submit Order
    </Button>
  );
}

function ProductManagement() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [productList, setProductList] = useState<
    { product: string; quantity: number }[]
  >([]);

  const handleAddProduct = () => {
    if (product && quantity > 0) {
      setProductList([...productList, { product: product, quantity }]);
      setProduct("");
      setQuantity(0);
    }
  };

  const handleRemoveProduct = (index: number) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="space-y-2">
          <label
            htmlFor="product_select"
            className="block text-sm font-medium text-gray-700"
          >
            Produit
          </label>

          <Input
            id="product-name"
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="Produit"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
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
            value={quantity}
            min={1}
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
                {item.product} - Quantité: {item.quantity}
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
