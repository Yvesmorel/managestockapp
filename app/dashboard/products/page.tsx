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
import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import { fetchProductsPages, fetchFilteredProducts } from "@/app/lib/data";
import { ProductTableSkeleton } from "@/components/ui/skeletons";
import Pagination from "@/components/ui/dashboard/pagination";
import Search from "@/components/ui/search";
import {
  DeleteProducts,
  UpdateProducts,
} from "@/components/ui/dashboard/products/buttons";
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
    totalPages = await fetchProductsPages(query);
  } catch (error) {
    notFound();
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Produits</h1>
        <Link href="/dashboard/products/create-products">
          <Button size="lg" className="shadow topToBottom">
            <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
            Ajouter un produit
          </Button>
        </Link>
      </div>
      <Search placeholder="Rechercher un produit..." />
      <div className="flex-1 flex w-full items-center">
      <div className="w-full border-none rounded-lg greenShadow overflow-hidden bg-white bottomToTop">
        {/* <Suspense fallback={<ProductTableSkeleton />}> */}
          <ProductsTable query={query} currentPage={currentPage} />
        {/* </Suspense> */}
      </div>
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
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead>Nom du produit</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Prix</TableHead>
          <TableHead>Quantité</TableHead>
          <TableHead className="text-right">Editer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, key) => (
          <TableRow key={key}>
            <TableCell>{product.nom_produit}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.prix_unitaire}</TableCell>
            <TableCell>{product.quantite}</TableCell>
            <TableCell>
              <div className="flex justify-end gap-3">
                <DeleteProducts id={product.id} />
                <UpdateProducts id={product.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
