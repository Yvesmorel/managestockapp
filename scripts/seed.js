const { db } = require("@vercel/postgres");
async function CreatePets(client) {
  try {
    const result =
      await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    console.log(result);
    return;
  } catch (error) {
    console.log(error.message);
    return;
  }
}
async function main() {
  client = await db.connect();
  await CreatePets(client);
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
