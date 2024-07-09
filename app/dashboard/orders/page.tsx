import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Pagination from "@/components/ui/dashboard/pagination";
import { OrderTableSkeleton } from "@/components/ui/skeletons";
import { fetchOrdersPage, fecthFilteredOrders } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { UpdateDelivery } from "@/components/ui/dashboard/orders/buttons";
import { EyeIcon } from "lucide-react";
import { getStatusClasses } from "@/app/lib/utils";
import { notFound } from "next/navigation";
export default async function Component({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  let totalPages;
  try {
    totalPages = await fetchOrdersPage(query);
  } catch (error) {
    notFound();
  }
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Commandes</h1>
        <Link href="/dashboard/orders/create-orders">
          <Button size="lg" className="topToBottom">
            <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
            Ajouter une commande
          </Button>
        </Link>
      </div>
      <Search placeholder="Rechercher une commande..." />
      <div className="border-none rounded-lg overflow-hidden greenShadow">
        <Suspense fallback={<OrderTableSkeleton />}>
          <OrdersTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

async function OrdersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const orders = await fecthFilteredOrders(query, currentPage);

  return (
    <table className="min-w-full divide-y divide-gray-200 bottomToTop ">
      <thead className="bg-white">
        <tr>
          {/* <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date de commande
          </th> */}
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Numéro de bon de livraison
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Statut de la commande
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order, key) => (
          <tr key={key}>
            {/* <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {new Date(order.date_commande).toLocaleDateString()}
              </div>
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-left">
              <div className="text-sm text-gray-900">
                {order.num_bon_livraison}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(
                  order.statut_commande
                )}`}
              >
                {order.statut_commande === "pending" ? "En attente" : "Livré"}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center space-x-4 justify-end">
                <Link href={`/dashboard/orders/${order.id}/view-order`}>
                  <Button
                    variant="secondary"
                    type="button"
                    className="bg-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <EyeIcon className="w-4 mr-2" />
                    voir plus
                  </Button>
                </Link>
                <UpdateDelivery
                  id={order.id}
                  list_produit={order.list_produit}
                  dislabled={order.statut_commande!=="pending"}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
