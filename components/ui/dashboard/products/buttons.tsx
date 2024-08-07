import Link from "next/link";
import { PencilIcon, TrashIcon } from "lucide-react";
import { deleteProducts } from "@/app/lib/actions";
import { Button } from "../../button";
export function UpdateProducts({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/products/${id}/edit`}
      className="rounded-md  p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
export function DeleteProducts({ id }: { id: string }) {
  const deleteProductsWithId = deleteProducts.bind(null, id);

  return (
    <form action={deleteProductsWithId}>
      <Button variant="secondary"  className="rounded-md bg-white p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </Button>
    </form>
  );
}
