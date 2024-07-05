import { fetchCategories } from "@/app/lib/data";
import CreateProduct from "@/components/ui/dashboard/products/create-products";
async function Page() {
  const categories = await fetchCategories();
  return (
    <>
      <CreateProduct  categories={categories} />
    </>
  );
}

export default Page;
