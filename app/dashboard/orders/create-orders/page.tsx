import { fetchCategories } from "@/app/lib/data";
import CreateOders from "@/components/ui/dashboard/orders/create-orders";

async function Page() {
  const categories = await fetchCategories();
  return (
    <>
      <CreateOders  categories={categories} />
    </>
  );
}

export default Page;
