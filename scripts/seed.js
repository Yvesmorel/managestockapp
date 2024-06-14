const { db } = require("@vercel/postgres");
async function createCategories(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS categorie (
  id_categorie SERIAL PRIMARY KEY,
  id_produit INT NOT NULL,
  nom VARCHAR(50) NOT NULL,
  libelle VARCHAR(30) NOT NULL,
  FOREIGN KEY (id_produit) REFERENCES produits(id)
);
`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createCommandes(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS commande (
  id SERIAL PRIMARY KEY,
  date_commande TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  date_livraison TIMESTAMP NOT NULL,
  num_bon_livraison VARCHAR(30) NOT NULL,
  statut_commande VARCHAR(40) NOT NULL
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createComprendre(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS comprendre (
  id_demande INT NOT NULL,
  id_produit INT NOT NULL,
  quantite_demande INT NOT NULL,
  FOREIGN KEY (id_demande) REFERENCES demande(id),
  FOREIGN KEY (id_produit) REFERENCES produits(id)
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createConcerner(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS concerner (
  id_commande INT NOT NULL,
  id_produit INT NOT NULL,
  qte_commande VARCHAR(100) NOT NULL,
  qte_livrer VARCHAR(100) NOT NULL,
  FOREIGN KEY (id_commande) REFERENCES commande(id),
  FOREIGN KEY (id_produit) REFERENCES produits(id)
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createDemande(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS demande (
  id SERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  libelle VARCHAR(50) NOT NULL,
  id_employe INT NOT NULL,
  FOREIGN KEY (id_employe) REFERENCES employe(id)
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createDepartement(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS departement (
  id SERIAL PRIMARY KEY,
  nom_departement VARCHAR(50) NOT NULL,
  libelle VARCHAR(50) NOT NULL
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function createEmploye(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS employe (
  id SERIAL PRIMARY KEY,
  id_departement INT NOT NULL,
  nom VARCHAR(30) NOT NULL,
  prenom VARCHAR(30) NOT NULL,
  poste VARCHAR(40) NOT NULL,
  adresse VARCHAR(50) NOT NULL,
  telephone VARCHAR(15) NOT NULL,
  FOREIGN KEY (id_departement) REFERENCES departement(id)
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function createFournisseur(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS fournisseur (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(30) NOT NULL,
  prenom VARCHAR(30) NOT NULL,
  contact VARCHAR(15) NOT NULL,
  adresse VARCHAR(50) NOT NULL,
  id_commande INT NOT NULL,
  FOREIGN KEY (id_commande) REFERENCES commande(id)
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function createProduits(client) {
  try {
    const result = await client.sql`CREATE TABLE IF NOT EXISTS produits (
  id SERIAL PRIMARY KEY,
  nom_produit VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  prix_unitaire INT NOT NULL,
  quantite INT NOT NULL
);`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}

async function createManageStockDatabase() {
  const client = await db.connect();
  //CATEGORIES
  await createCategories(client);
  //COMMANDES
  await createCommandes(client);
  //COMPRENDRE
  await createComprendre(client);
  //CONCERNER
  await createConcerner(client);
  //DEMANDES
  await createDemande(client);
  //DEPARTEMENT
  await createDepartement(client);
  //EMPLOYES
  await createEmploye(client);
  //FOURNISEUR
  await createFournisseur(client);
  //PRODUITS
  await createProduits(client);
}
createManageStockDatabase().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
