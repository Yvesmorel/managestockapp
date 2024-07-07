import { Button } from "@/components/ui/button";
import { fetchRequestById, fetchSupplierById } from "@/app/lib/data";
import { OrderDetailsSkeleton } from "@/components/ui/skeletons";
import { Suspense } from "react";
import Link from "next/link";
export default async function Page({ params }: { params: { id: string } }) {
  const request = await fetchRequestById(params.id);
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Delivery Goods Number</p>
            <p>{new Date(request.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Order Status</p>
            <p className="text-green-500 font-medium">{request.libelle}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Supplier Last Name</p>
            <p> {request.nom_departement}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Supplier First Name</p>
            <p>{request.nom_employe}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Supplier Contact</p>
            <p>{request.prenom_employe}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Supplier Address</p>
            <p>{request.poste_employe}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Date de commande</p>
            <p>{request.adresse_employe}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date de livraison</p>
            <p>{request.telephone_employe}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-6">Liste des produits</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Nom</p>
          </div>
          <div>
            <p className="text-muted-foreground">quantité</p>
          </div>
        </div>
        {request.list_produits.map((product: any, key: any) => {
          return (
            <div className="grid grid-cols-2 gap-4" key={key}>
              <div>
              
                <p>{product.produit}</p>
              </div>
              <div>
              
                <p>{product.quantite}</p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-end">
          <Link href="/dashboard/requests">
            <Button variant="secondary" className="">
              Cancel Request
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
