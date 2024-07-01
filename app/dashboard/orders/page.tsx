
import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
export default function Component() {
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
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">2023-04-15</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm text-gray-900">ABC123</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4 justify-end">
                    <button
                      type="button"
                      className="bg-primary text-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      See
                    </button>
                    <button
                      type="button"
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Confirm Delivery
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">2023-04-10</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm text-gray-900">DEF456</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Shipped
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4 justify-end">
                    <button
                      type="button"
                      className="bg-primary text-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      See
                    </button>
                    <button
                      type="button"
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Confirm Delivery
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">2023-04-05</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm text-gray-900">GHI789</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4 justify-end">
                    <button
                      type="button"
                      className="bg-primary text-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      See
                    </button>
                    <button
                      type="button"
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Confirm Delivery
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
