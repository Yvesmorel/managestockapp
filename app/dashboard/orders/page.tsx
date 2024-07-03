import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Pagination from "@/components/ui/dashboard/pagination";
import { OrdersTableSkeleton } from "@/components/ui/skeletons";
import { fetchOrdersPage, fecthFilteredOrders } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { UpdateDelivery } from "@/components/ui/dashboard/orders/buttons";
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
  const totalPages = await fetchOrdersPage(query);
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Orders
          </h1>
          <Link href="/dashboard/orders/create-orders">
            <Button className="ml-4">
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Order
            </Button>
          </Link>
        </div>
        <Search placeholder="rechercher une commande" />
        <div className="overflow-x-auto w-full">
          <Suspense fallback={<OrdersTableSkeleton />}>
            <OrdersTable query={query} currentPage={currentPage} />
          </Suspense>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Order Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Delivery Good Number
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Order Status
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
        {orders.map((order, key) => {
          return (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(order.date_commande).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">
                  {order.num_bon_livraison}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {order.statut_commande}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 justify-end">
                  <Link href={`/dashboard/orders/${order.id}/view-order`}>
                    <button
                      type="button"
                      className="bg-primary text-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      See
                    </button>
                  </Link>

                  <UpdateDelivery id={order.id} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
