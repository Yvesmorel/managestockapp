import { Button } from "@/components/ui/button";
import { fetchSupplierById } from "@/app/lib/data";
import { OrderDetailsSkeleton } from "@/components/ui/skeletons";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: { id: string } }) {
  const supplier = await fetchSupplierById(params.id);
  if (!supplier) {
    notFound()
  }
  return (
    <Suspense fallback={<OrderDetailsSkeleton />}>
      <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl font-bold mb-6 text-[#1e7376]">
          Details de la commande
        </h1>
        <div className="bg-white rounded-lg greenShadow p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">
                Numéro de Bon de Livraison
              </p>
              <p>{supplier.num_bon_livraison}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date de Livraison</p>
              <p>{new Date(supplier.date_livraison).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Nom du Fournisseur</p>
              <p>{supplier.nom}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Prénom du Fournisseur</p>
              <p>{supplier.prenom}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Contact du Fournisseur</p>
              <p>{supplier.contact}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Adresse du Fournisseur</p>
              <p>{supplier.adresse}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Date de Commande</p>
              <p>{new Date(supplier.date_commande).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/dashboard/orders">
              <Button variant="secondary" className="bg-[#e8f1f1] text-[#1e7376]">
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {supplier.list_produit && <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-6 text-[#1e7376]">
          Liste des produits
        </h2>

        {supplier.list_produit.map((product: any, key: any) => {
          return (
            <div className="bg-white rounded-lg greenShadow p-6 space-y-4 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Nom</p>
                </div>
                <div>
                  <p className="text-muted-foreground">quantité</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4" key={key}>
                <div>
                  <p>{product.product}</p>
                </div>
                <div>
                  <p>{product.quantity}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>}
    </Suspense>
  );
}
