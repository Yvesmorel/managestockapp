import { fetchProductById } from "@/app/lib/data";
import EditForm from "@/components/ui/dashboard/products/edit-form";
import { notFound } from 'next/navigation';
export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);
  if (!product) {
    notFound()
  }
  return (
    <>
      <EditForm id={params.id} product={product} />
    </>
  );
}
