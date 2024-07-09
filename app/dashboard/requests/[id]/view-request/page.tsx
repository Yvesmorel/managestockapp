import { Button } from "@/components/ui/button";
import { fetchRequestById, fetchSupplierById } from "@/app/lib/data";
import { OrderDetailsSkeleton } from "@/components/ui/skeletons";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: { id: string } }) {
  const request = await fetchRequestById(params.id);
  if (!request) {
    notFound();
  }
  return (
    <>
      <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-[#1e7376]">
          Details de la demande
        </h1>
        <div className="bg-white rounded-lg greenShadow p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Date</p>
              <p>{new Date(request.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Libellé de la demande</p>
              <p className=" font-medium">{request.libelle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Département de l'Employé</p>
              <p>{request.nom_departement}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Nom de l'Employé</p>
              <p>{request.nom_employe}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Prénom de l'Employé</p>
              <p>{request.prenom_employe}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Poste de l'Employé</p>
              <p>{request.poste_employe}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Adresse de l'Employé</p>
              <p>{request.adresse_employe}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Téléphone de l'Employé</p>
              <p>{request.telephone_employe}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/dashboard/requests">
              <Button variant="secondary" className="">
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {request.list_produits && (
        <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6 text-[#1e7376]">
            Liste des produits
          </h2>

          {request.list_produits.map((product: any, key: any) => {
            return (
              <div className="bg-white rounded-lg greenShadow p-6 space-y-4">
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
                    <p>{product.produit.split(" ")[1]}</p>
                  </div>
                  <div>
                    <p>{product.quantite}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
