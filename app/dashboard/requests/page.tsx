import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { Suspense } from "react";
import Pagination from "@/components/ui/dashboard/pagination";
import { RequestTableSkeleton } from "@/components/ui/skeletons";
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
import { PlusIcon } from "lucide-react";
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
  const totalPages = await fetchRequestsPages(query);
  return (
    <div className="w-full h-full">
      <div className="grid gap-6 p-6 sm:p-8 md:p-10">
        <div className="full flex justify-between align-items">
          <h2 className="text-2xl font-bold">Create a Request</h2>

          <Link href="/dashboard/requests/create-requests">
            <Button className="flex items-center justify-end">
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Request
            </Button>
          </Link>
        </div>
        <Search placeholder="Search products..." />
        <div className="overflow-auto border rounded-lg">
          <Suspense fallback={<RequestTableSkeleton />}>
            <RequestTable query={query} currentPage={currentPage} />
          </Suspense>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
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
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Request</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request, key) => {
          return (
            <TableRow key={key}>
              {/* Demande */}
              <TableCell>{request.date.toString()}</TableCell>
              <TableCell>{request.libelle}</TableCell>
              {/* Departement */}
              <TableCell>{request.nom_departement}</TableCell>
              {/* Employes */}
              <TableCell>{request.nom_employe}</TableCell>
              <TableCell>{request.prenom_employe}</TableCell>
              <TableCell>{request.poste_employe}</TableCell>
              <TableCell>{request.adresse_employe}</TableCell>
              <TableCell>{request.telephone_employe}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
