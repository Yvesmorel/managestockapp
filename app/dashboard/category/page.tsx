import { CountProductByCategory, fecthFilteredCategory } from "@/app/lib/data";
import Search from "@/components/ui/search";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link";
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
    totalPages = await fecthFilteredCategory(query);
  } catch (error) {
    notFound();
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl font-bold mb-6">Categories de produits</h1>
      <Search placeholder="Rechercher une categorie..." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {totalPages.map((category, key) => (
          <CategoryCard key={key} category={category} />
        ))}
      </div>
    </div>
  );
}

async function CategoryCard({ category }: { category: QueryResultRow }) {
  const currentCategoryProductsCount = await CountProductByCategory(
    category.id_categorie
  );
  return (
    <Link href={`/dashboard/products?page=1&query=${category.nom}`}>
      <div className="bg-white rounded-lg greenShadow cursor-pointer overflow-hidden   hover:text-[#1e7376] bottomToTop">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{category.nom}</h2>
          <p className="text-gray-500 text-sm">
            {currentCategoryProductsCount.total_quantite || 0} produits
          </p>
        </div>
      </div>
    </Link>
  );
}
