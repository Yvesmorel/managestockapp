import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { Suspense } from "react";
import Pagination from "@/components/ui/dashboard/pagination";
import { RequestsTableSkeleton } from "@/components/ui/skeletons";
import { fetchRequestsPages, fetchFilteredRequests } from "@/app/lib/data";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { EyeIcon, PlusIcon } from "lucide-react";
import { notFound } from "next/navigation";
export default async function Page({
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
    totalPages = await fetchRequestsPages(query);
  } catch (error) {
    notFound();
  }
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Demandes</h1>
        <Link href="/dashboard/requests/create-requests">
          <Button size="lg" className="topToBottom">
            <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
            Ajouter une demande
          </Button>
        </Link>
      </div>
      <Search placeholder="Rechercher une demande..." />
      <div className="flex-1 flex w-full items-center">
      <div className="w-full border-none greenShadow rounded-lg overflow-hidden">
        {/* <Suspense fallback={<RequestsTableSkeleton />}> */}
          <RequestTable query={query} currentPage={currentPage} />
        {/* </Suspense> */}
      </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

async function RequestTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const requests = await fetchFilteredRequests(query, currentPage);

  return (
    <table className="min-w-full divide-y divide-gray-200 bottomToTop">
      <thead className="bg-white">
        <tr>
          {/* <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date
          </th> */}
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Demande
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Department
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nom
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Prénoms
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
          >
            Actions
          </th>
          {/* <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Position
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Phone
          </th> */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {requests.map((request, key) => {
          return (
            <tr key={key}>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(request.date).toLocaleDateString()}
                </div>
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{request.libelle}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {request.nom_departement}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {request.nom_employe}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {request.prenom_employe}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className="flex items-center space-x-4 justify-end">
                  <Link href={`/dashboard/requests/${request.id}/view-request`}>
                    <Button
                      variant="secondary"
                      type="button"
                      className="bg-white px-2 py-1 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <EyeIcon className="w-4 mr-2" />
                      voir plus
                    </Button>
                  </Link>
                </div>
              </td>
              {/* <td text-right className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{request.poste_employe}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{request.adresse_employe}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{request.telephone_employe}</div>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
