import { Button } from "@/components/ui/button";
import { fetchSupplierById } from "@/app/lib/data";
import { OrderDetailsSkeleton } from "@/components/ui/skeletons";
import { Suspense } from "react";
import Link from "next/link";
export default async function Page({ params }: { params: { id: string } }) {
  const supplier = await fetchSupplierById(params.id);
  return (
    <Suspense fallback={<OrderDetailsSkeleton />}>
      <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Order Details</h1>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Delivery Goods Number</p>
              <p>{supplier.num_bon_livraison}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Order Status</p>
              <p className="text-green-500 font-medium">Delivered</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Supplier Last Name</p>
              <p>{supplier.nom}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Supplier First Name</p>
              <p>{supplier.prenom}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Supplier Contact</p>
              <p>{supplier.contact}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Supplier Address</p>
              <p>{supplier.adresse}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Date de commande</p>
              <p>{new Date(supplier.date_commande).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date de livraison</p>
              <p>{new Date(supplier.date_livraison).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Link href="/dashboard/orders">
              <Button
                variant="secondary"
                className=""
              >
                Cancel Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
