export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export type Product = {
  id?: string;
  nom_produit?: string;
  description?: string;
  prix_unitaire?: string;
  quantite?: string;
};
export type productListType = {
  product: string;
  quantity: number;
  totalQuantity:number
}[];

export interface SaveProductType {
  product: string;
  quantity: number;
  description: string;
  price: number;
  category: string;
}