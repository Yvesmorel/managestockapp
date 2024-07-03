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
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
          <div className="flex justify-end gap-2">
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
