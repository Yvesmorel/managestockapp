"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import LoadingButton from "../../loading-button";
import { CreateCategory } from "@/app/lib/actions";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function CreateCategrieForm() {
  const initialState = {
    errors: {
      category_name: [],
    },
    message: "",
  };
  const [state, dispatch] = useFormState(CreateCategory, initialState);
  return (
    <form action={dispatch} className="w-auto h-auto flex gap-2">
      <Input
        name="category_name"
        required
        type="text"
        placeholder="Entrez le nom de la categorie"
      />
      {state.message==='duplicate key value violates unique constraint "unique_nom"' && (
        <Alert variant="destructive" className="absolute bottom-10 left-2 bg-white w-50 border-none">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>Cette categorie existe déja.</AlertDescription>
        </Alert>
      )}
      <CreateCategoryButton />
    </form>
  );
}

function CreateCategoryButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-[250px]">
      {!pending && (
        <>
          <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
          <p>Ajouter une catégorie</p>
        </>
      )}
      {pending && <LoadingButton />}
    </Button>
  );
}

export default CreateCategrieForm;
