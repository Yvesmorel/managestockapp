"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
const ITEMS_PER_PAGE = 4;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql`
        SELECT
          *
        FROM produits p JOIN categorie c ON p.id_categorie = c.id_categorie
        WHERE
          p.nom_produit ILIKE ${`%${query}%`} OR
          p.description ILIKE ${`%${query}%`} OR
          p.prix_unitaire::text ILIKE ${`%${query}%`} OR
          p.id_categorie::text ILIKE ${`%${query}%`} OR
          p.quantite::text ILIKE ${`%${query}%`} OR
          c.nom ILIKE ${`%${query}%`}
          AND p.quantite <> 0
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
      `;

    return products.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductsPages(query: string) {
  noStore();
  try {
    const countQuery = await sql`SELECT COUNT(*)
         FROM produits p JOIN categorie c ON p.id_categorie = c.id_categorie
        WHERE
          p.nom_produit ILIKE ${`%${query}%`} OR
          p.description ILIKE ${`%${query}%`} OR
          p.prix_unitaire::text ILIKE ${`%${query}%`} OR
          p.id_categorie::text ILIKE ${`%${query}%`} OR
          p.quantite::text ILIKE ${`%${query}%`} OR
          c.nom ILIKE ${`%${query}%`} AND p.quantite <> 0;
      `;

    const count = countQuery.rows[0].count;
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of products.");
  }
}
export async function fetchFilteredRequests(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql`
  SELECT
    *
  FROM demande
        WHERE
          nom_departement ILIKE ${`%${query}%`} OR
          nom_employe ILIKE ${`%${query}%`} OR
          prenom_employe ILIKE ${`%${query}%`} OR
          poste_employe ILIKE ${`%${query}%`} OR
          adresse_employe ILIKE ${`%${query}%`} OR 
          telephone_employe ILIKE ${`%${query}%`}
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
      `;
  

    return products.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchRequestsPages(query: string): Promise<number> {
  noStore();
  try {
    // Requête SQL pour compter le nombre d'enregistrements correspondant à la requête
    const countQuery = await sql`
      SELECT COUNT(*)
      FROM demande
      WHERE
        nom_departement ILIKE ${`%${query}%`} OR
          nom_employe ILIKE ${`%${query}%`} OR
          prenom_employe ILIKE ${`%${query}%`} OR
          poste_employe ILIKE ${`%${query}%`} OR
          adresse_employe ILIKE ${`%${query}%`} OR 
          telephone_employe ILIKE ${`%${query}%`} 
    `;

    // Récupération du nombre d'enregistrements
    const count = countQuery.rows[0].count;

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of requests.");
  }
}
// export async function fetchLatestInvoices() {
//     noStore();
//     try {
//       const data = await sql`
//       SELECT nom_produit, description, prix_unitaire, quantite
//       FROM produits;`;

//       const products = data.rows
//       return products;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch the latest invoices.');
//     }
//   }
export async function fetchProductById(id: string) {
  noStore();
  try {
    const data = await sql`
      SELECT
      id,nom_produit, description, prix_unitaire, quantite, createdat
        FROM produits
      WHERE produits.id = ${id};
    `;

    // const invoice = data.rows.map((invoice) => ({
    //   ...invoice,
    //   // Convert amount from cents to dollars
    //   amount: invoice.amount / 100,
    // }));
    // console.log(invoice); // Invoice is an empty array []
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}
export async function fetchDepartement() {
  noStore();
  try {
    const data = await sql`
    SELECT * FROM departement;
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchCategories() {
  noStore();
  try {
    const data = await sql`
    SELECT * FROM categorie;
    `;
  
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}
export async function fetchProducts() {
  noStore();
  try {
    const data = await sql`
    SELECT * FROM produits WHERE produits.quantite <> 0;
    `;
  
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchSupplierById(orderId: any) {
  noStore();
  try {
    const data = await sql`
    SELECT * FROM commande c JOIN fournisseur f ON c.id = f.id_commande WHERE c.id =${orderId};
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchRequestById(requestId: any) {
  noStore();
  try {
    const data = await sql`
    SELECT * FROM demande WHERE demande.id =${requestId};
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fecthFilteredOrders(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql`
        SELECT *
      FROM commande
      WHERE
          num_bon_livraison ILIKE ${`%${query}%`} OR
          statut_commande ILIKE ${`%${query}%`}
             LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchOrdersPage(query: string) {
  noStore();
  try {
    const data = sql`
      SELECT COUNT(*)
      FROM commande
      WHERE
        num_bon_livraison ILIKE ${`%${query}%`} OR
        statut_commande ILIKE ${`%${query}%`};
    `;
    // Récupération du nombre d'enregistrements
    const count = (await data).rows[0].count;

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of requests.");
  }
}

export async function fecthFilteredCategory(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * 12;
  try {
    const data = await sql`
      SELECT *
      FROM categorie
      WHERE
          nom ILIKE ${`%${query}%`}
           LIMIT 12
        OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchCategoryPage(query: string) {
  noStore();
  try {
    const data = sql`
      SELECT COUNT(*)
      FROM categorie 
      WHERE
        nom ILIKE ${`%${query}%`};
    `;
    // Récupération du nombre d'enregistrements
    const count = (await data).rows[0].count;

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(Number(count) / 12);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of requests.");
  }
}

export async function CountProductByCategory(categoryId: any) {
  noStore();
  
  try {
    const data = await sql`
    SELECT SUM(p.quantite) AS total_quantite
FROM categorie c
JOIN produits p ON c.id_categorie = p.id_categorie
WHERE c.id_categorie = ${categoryId}
  AND p.quantite <> 0;
;
    `;
    const count = data.rows[0];
    return count;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}
