"use client";
import { ConfirmDelivery } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "../../button";
export function UpdateDelivery({ id }: { id: string }) {
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(
    ConfirmDelivery,
    initialState
  );
  return (
    <form action={dispatch}>
        <input type="hidden" name="id" value={id} />
      <Button
        variant="outline"
        type="submit"
        className=" px-2 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Confirm Delivery
      </Button>
    </form>
  );
}
