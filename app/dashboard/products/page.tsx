import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Suspense } from "react";
import { fetchProductsPages, fetchFilteredProducts } from "@/app/lib/data";
import { ProductsTableSkeleton } from "@/components/ui/skeletons";
import Pagination from "@/components/ui/dashboard/products/pagination";
import Search from "@/components/ui/search";
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
  const totalPages = await fetchProductsPages(query);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Produits</h1>
        <Link href="/dashboard/products/create-products">
          <Button size="lg">
            <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
            Ajouter un produit
          </Button>
        </Link>
      </div>
      <Search placeholder="Search products..." />
      <div className="border rounded-lg overflow-hidden">
        <Suspense fallback={<ProductsTableSkeleton />}>
          <ProductsTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

async function ProductsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom du produit</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Prix</TableHead>
          <TableHead>Quantité</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, key) => (
          <TableRow>
            <TableCell>{product.nom_produit}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.prix_unitaire}</TableCell>
            <TableCell>{product.quantite}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
