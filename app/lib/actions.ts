"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// ...
const CreateProductsFormSchema = z.object({
  id: z.string(),
  nom_produit: z.string({
    required_error: "Entrez le nom du produit s'il vous plait ",
  }),
  description: z.string({
    required_error: "Entrez le nom du produit s'il vous plait ",
  }),
  prix_unitaire: z.string({
    required_error: " Entrez le prix du produit",
    invalid_type_error: "Entrez un montant s'il vous plait",
  }),
  quantite: z.string({
    required_error: " Entrez le prix du produit",
    invalid_type_error: "Entrez un montant s'il vous plait",
  }),
  userid: z.string(),
  date: z.string(),
});

const CreateProductsSchema = CreateProductsFormSchema.omit({
  id: true,
  date: true,
  userid: true,
});

export type ProductsState = {
  errors?: {
    nom_produit?: string[];
    description?: string[];
    prix_unitaire?: string[];
    quantite?: string[];
  };
  message?: string | null;
};

export async function CreateProducts(
  prevState: ProductsState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());
  console.log(rawData);

  const validatedData = CreateProductsSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création du produit.",
    };
  }
  const { nom_produit, description, prix_unitaire, quantite } =
    validatedData.data;
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`INSERT INTO produits (nom_produit, description, prix_unitaire, quantite,createdat,userid) VALUES (${nom_produit}, ${description},${parseInt(
      prix_unitaire
    )},${parseInt(quantite)},${date},'userjsqfbqjfqh1');
  `;
  } catch (error:any) {
   return { message:error.message,}
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  console.log(formData);

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
