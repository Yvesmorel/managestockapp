"use client";
import { ConfirmDelivery } from "@/app/lib/actions";
import { useFormState } from "react-dom";
export function UpdateDelivery({ id }: { id: string }) {
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(
    ConfirmDelivery,
    initialState
  );
  return (
    <form action={dispatch}>
        <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Confirm Delivery
      </button>
    </form>
  );
}
