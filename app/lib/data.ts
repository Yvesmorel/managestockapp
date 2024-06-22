"use server"
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
const ITEMS_PER_PAGE = 5;

export async function fetchFilteredProducts(
    query: string,
    currentPage: number
  ) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const products = await sql`
        SELECT
          nom_produit, description, prix_unitaire, quantite, createdat
        FROM produits
        WHERE
          nom_produit ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          prix_unitaire::text ILIKE ${`%${query}%`} OR
          quantite::text ILIKE ${`%${query}%`}
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
    try {
      const countQuery = await sql`SELECT COUNT(*)
        FROM produits
        WHERE
           nom_produit ILIKE ${`%${query}%`} OR
           description ILIKE ${`%${query}%`} OR
           prix_unitaire::text ILIKE ${`%${query}%`} OR
           quantite::text ILIKE ${`%${query}%`}
      `;
  
      const count = countQuery.rows[0].count;
      const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of products.');
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
