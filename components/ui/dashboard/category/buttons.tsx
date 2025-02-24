import { deleteCategory } from "@/app/lib/actions";
import { Button } from "../../button";
import { TrashIcon } from "lucide-react";

export function DeleteCategory({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  const deleteProductsWithId = deleteCategory.bind(null, id);

  return (
    <form action={deleteProductsWithId}>
      <Button
        disabled={Boolean(quantity)}
        variant="secondary"
        className="rounded-md bg-white p-2 hover:bg-gray-100 m-1"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </Button>
    </form>
  );
}
