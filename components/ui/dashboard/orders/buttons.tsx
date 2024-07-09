"use client";
import { ConfirmDelivery } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "../../button";
import { QueryResultRow } from "@vercel/postgres";
import { SaveProductType } from "@/app/lib/definitions";
import { useFormStatus } from "react-dom";
import LoadingButton from "../../loading-button";
export function UpdateDelivery({
  id,
  list_produit,
  dislabled,
}: {
  id: string;
  list_produit: SaveProductType[];
  dislabled: boolean;
}) {
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(
    ConfirmDelivery.bind(null, list_produit),
    initialState
  );
  return (
    <form action={dispatch}>
      <input type="hidden" name="id" value={id} />
      <ConfirmDeliveryButton dislabled={dislabled} />
    </form>
  );
}

function ConfirmDeliveryButton({ dislabled }: { dislabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={dislabled || pending}
      variant="outline"
      type="submit"
      className=" px-2 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <p>Confirmer la livraison</p>
    </Button>
  );
}
