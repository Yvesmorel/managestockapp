import {
  CountProductByCategory,
  fecthFilteredCategory,
  fetchCategoryPage,
} from "@/app/lib/data";
import CreateCategrieForm from "@/components/ui/dashboard/category/create-category";
import Pagination from "@/components/ui/dashboard/pagination";
import Search from "@/components/ui/search";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import EmptyText from "@/components/ui/dashboard/empty";
import { Button } from "@/components/ui/button";
import { DeleteCategory } from "@/components/ui/dashboard/category/buttons";
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
  let categories;
  let totalPages;

  try {
    totalPages = await fetchCategoryPage(query);
    categories = await fecthFilteredCategory(query, currentPage);
  } catch (error) {
    notFound();
  }

  if (categories.length === 0) return <EmptyText text="Aucunes categories" />;

  return (
    <div className="w-full h-full max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col relative">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold mb-6">Categories de produits</h1>
        <CreateCategrieForm />
      </div>

      <Search placeholder="Rechercher une categorie..." />
      <div className="flex-1 w-full flex  items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, key) => (
            <CategoryCard key={key} category={category} />
          ))}
        </div>
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

async function CategoryCard({ category }: { category: QueryResultRow }) {

  const currentCategoryProductsCount = await CountProductByCategory(
    category.id_categorie
  );

  return (
    <div className="bg-white rounded-lg greenShadow cursor-pointer overflow-hidden   hover:text-[#1e7376] ">
      <Link href={`/dashboard/products?page=1&query=${category.nom}`}>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{category.nom}</h2>
          <p className="text-gray-500 text-sm">
            {currentCategoryProductsCount.total_quantite || 0} produits
          </p>
        </div>
      </Link>
      <DeleteCategory id={category.id_categorie} quantity={currentCategoryProductsCount.total_quantite} />
    </div>
  );
}
