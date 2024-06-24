export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
export type Product= {
  id?:string;
  nom_produit?: string;
  description?: string;
  prix_unitaire?: string;
  quantite?: string;
}