"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { productListType, SaveProductType } from "./definitions";

const CreateOrdersFormShema = z.object({
  date_livraison: z.string({
    required_error: "Veuillez entrer la date de livraison",
  }),
  num_bon_livraison: z.string({
    required_error: "Veuillez entrer le numéro de bon de livraison",
  }),
  statut_commande: z.string({
    required_error: "Veuillez sélectionner le statut de la commande",
  }),
  nom_fournisseur: z.string({
    required_error: "Veuillez entrer le nom du fournisseur",
  }),
  prenom_fournisseur: z.string({
    required_error: "Veuillez entrer le prénom du fournisseur",
  }),
  adresse_fournisseur: z.string({
    required_error: "Veuillez entrer l'adresse du fournisseur",
  }),
  contact_fournisseur: z.string({
    required_error: "Veuillez entrer le numéro de contact du fournisseur",
  }),
});


const CreateRequestFormShema = z.object({
  id: z.string(),
  libelle_demande: z.string({
    required_error: "Veuillez entrer le libellé de la demande",
  }),
  nom_departement: z.string({
    required_error: "Veuillez sélectionner le nom du département",
  }),
  nom_employe: z.string({
    required_error: "Veuillez entrer le nom de l'employé",
  }),
  prenom_employe: z.string({
    required_error: "Veuillez entrer le prénom de l'employé",
  }),
  poste_employe: z.string({
    required_error: "Veuillez sélectionner le poste de l'employé",
  }),
  adresse_employe: z.string({
    required_error: "Veuillez entrer l'adresse de l'employé",
  }),
  telephone_employe: z.string({
    required_error: "Veuillez entrer le numéro de téléphone de l'employé",
  }),
});
const CreateProductsFormSchema = z.object({
  id: z.string(),
  nom_produit: z.string({
    required_error: "Veuillez entrer le nom du produit",
  }),
  description: z.string({
    required_error: "Veuillez entrer la description du produit",
  }),
  prix_unitaire: z.string({
    required_error: "Veuillez entrer le prix unitaire du produit",
    invalid_type_error: "Veuillez entrer un montant valide pour le prix unitaire",
  }),
  quantite: z.string({
    required_error: "Veuillez entrer la quantité du produit",
    invalid_type_error: "Veuillez entrer une quantité valide pour le produit",
  }),
  userid: z.string(),
  categorie_id: z.string({
    required_error: "Veuillez sélectionner la catégorie du produit",
  }),
  date: z.string(),
});

const CreateProductsSchema = CreateProductsFormSchema.omit({
  id: true,
  date: true,
  userid: true,
});

const CreateRequestSchema = CreateRequestFormShema.omit({
  id: true,
});

export type RequestsState = {
  errors?: {
    libelle_demande?: string[];
    nom_departement?: string[];
    nom_employe?: string[];
    prenom_employe?: string[];
    poste_employe?: string[];
    adresse_employe?: string[];
    telephone_employe?: string[];
  };
  message?: string | null;
};

export type ProductsState = {
  errors?: {
    nom_produit?: string[];
    description?: string[];
    prix_unitaire?: string[];
    quantite?: string[];
    categorie_id?: string[];
  };
  message?: string | null;
};

export type OrdersState = {
  errors?: {
    date_livraison?: string[];
    nom_fournisseur?: string[];
    num_bon_livraison?: string[];
    statut_commande?: string[];
    prenom_fournisseur?: string[];
    contact_fournisseur?: string[];
    adresse_fournisseur?: string[];
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

  const { nom_produit, description, prix_unitaire, quantite, categorie_id } =
    validatedData.data;
  const categorie = categorie_id;
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`INSERT INTO produits (nom_produit, description, prix_unitaire, quantite,createdat,userid,id_categorie) VALUES (${nom_produit}, ${description},${parseInt(
      prix_unitaire
    )},${parseInt(quantite)},${date},'userjsqfbqjfqh1',${categorie});
  `;
  } catch (error: any) {
    return { message: error.message };
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function UpdateProducts(
  id: string,
  prevState: ProductsState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());
  console.log(rawData);

  const validatedData = CreateProductsSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la modification du produit.",
    };
  }
  const { nom_produit, description, prix_unitaire, quantite } =
    validatedData.data;
  try {
    await sql`UPDATE produits
SET nom_produit = ${nom_produit},
    description = ${description},
    prix_unitaire =${parseInt(prix_unitaire)},
    quantite = ${parseInt(quantite)}
WHERE id = ${id};
  `;
  } catch (error: any) {
    return { message: error.message };
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
export async function deleteProducts(id: string) {
  try {
    await sql`DELETE FROM produits WHERE id = ${id}`;
  } catch (error: any) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/products");
}

export async function CreateRequests(
  productList: productListType,
  prevState: RequestsState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const validatedData = CreateRequestSchema.safeParse(rawData);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création du produit.",
    };
  }
  const {
    nom_departement,
    libelle_demande,
    nom_employe,
    poste_employe,
    prenom_employe,
    adresse_employe,
    telephone_employe,
  } = validatedData.data;

  const productArrayString = productList
    .map(
      (product) =>
        `{"produit":"${product.product}", "quantite": ${product.quantity},"finalQuantity":1}`
    )
    .join(", ");
  const product = `[${productArrayString}]`;
  console.log(product);

  try {
    await sql`
    INSERT INTO demande (
      date, libelle, nom_departement, nom_employe, prenom_employe, poste_employe, adresse_employe, telephone_employe, produits, list_produits
    ) VALUES (
      now(),
      ${libelle_demande}, 
      ${nom_departement}, 
      ${nom_employe},
      ${prenom_employe}, 
      ${poste_employe},
      ${adresse_employe}, 
      ${telephone_employe},
      null,
      ${product}
    );


`;
    await updateProductQuantities(productList);
  } catch (error: any) {
    return { message: error.message };
  }
  revalidatePath("/dashboard/requests");
  redirect("/dashboard/requests");
}

async function updateProductQuantities(products: productListType) {
  for (const product of products) {
    const { product: produit, quantity, totalQuantity } = product;
    const finalQuantity = totalQuantity - quantity;
    console.log(finalQuantity);
    await sql`
      UPDATE produits
      SET quantite = ${finalQuantity}
      WHERE id =${produit.split(" ")[0]}
    `;
  }
}
async function saveDeliveredProduct(products: SaveProductType[]) {
  const date = new Date().toISOString().split("T")[0];
  for (const product of products) {
    const {
      price,
      product: nom_produit,
      description,
      quantity,
      category,
    } = product;
    console.log( price,
     nom_produit,
      description,
      quantity,
      category);
    

    await sql`
      INSERT INTO produits (nom_produit, description, prix_unitaire, quantite,createdat,userid,id_categorie) VALUES (${nom_produit}, ${description},${price},${quantity},${date},'userjsqfbqjfqh1',${category});
    `;
  }
}

export async function CreateOrders(
  productList: SaveProductType[],
  prevState: OrdersState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());
  console.log(rawData);

  const validatedData = CreateOrdersFormShema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création du produit.",
    };
  }

  const {
    date_livraison,
    nom_fournisseur,
    num_bon_livraison,
    statut_commande,
    prenom_fournisseur,
    contact_fournisseur,
    adresse_fournisseur,
  } = validatedData.data;
  const date = new Date(date_livraison) as any;

  const productArrayString = productList
    .map(
      (product) =>
        `{"product":"${product.product}", "quantity": ${product.quantity},"description": "${product.description}","price": ${product.price},"category":"${product.category}"}`
    )
    .join(", ");
  const product = `[${productArrayString}]`;
  console.log(product);

  try {
    await sql`WITH InsertedCommande AS (
  INSERT INTO commande(date_commande, date_livraison, num_bon_livraison, statut_commande,list_produit)
  VALUES (CURRENT_TIMESTAMP,${date},${num_bon_livraison}, ${statut_commande},${product})
  RETURNING id
)
  

INSERT INTO fournisseur(nom, prenom, contact, adresse, id_commande)
SELECT ${nom_fournisseur},${prenom_fournisseur}, ${contact_fournisseur}, ${adresse_fournisseur}, id
FROM InsertedCommande;
`;
  } catch (error: any) {
    return { message: error.message };
  }
  revalidatePath("/dashboard/orders");
  redirect("/dashboard/orders");
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
export type ConfirmDeliveryState = {
  message: string;
};
export async function ConfirmDelivery(
  productList: SaveProductType[],
  prevState: ConfirmDeliveryState,
  formData: FormData
) {
  const id: string = formData.get("id") as string;
  console.log(productList);
  try {
    await sql`UPDATE commande SET statut_commande = 'delivered' WHERE statut_commande <> 'delivered' AND id = ${id};`;
    await saveDeliveredProduct(productList);
    revalidatePath("/dashboard/orders");
    return {
      message: "",
    };
  } catch (error: any) {
    console.log(error.message);

    return {
      message: "",
    };
  }
}
