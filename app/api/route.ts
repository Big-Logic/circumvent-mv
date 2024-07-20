import { Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("66706a42000905c72a59"); // Your project ID

const databases = new Databases(client);

const dbId = "66706ad8001cd31e7aef";

// mbc collection id
const mbsCollId = "66706b400010d7d816c7";

// Items collection id
const itemsCollectionId = "66706e6d001a860bb8dd";

//GET handler for active mb
export async function getActiveMbs() {
  const { documents } = await databases.listDocuments(
    `${dbId}`, // databaseId
    `${mbsCollId}`, // collectionId
    [Query.equal("status", ["active"])]
  );

  return documents[0];
}

export async function getAllMbs() {
  const { documents } = await databases.listDocuments(
    `${dbId}`, // databaseId
    `${mbsCollId}`, // collectionId
    [Query.orderDesc("startDate"), Query.orderAsc("status")]
  );

  return documents;
}

//POST handler for new mb
export async function createNewMb(data: string) {
  const result = await databases.createDocument(
    `${dbId}`, // databaseId
    `${mbsCollId}`, // collectionId
    ID.unique(), // documentId
    data
  );
  return result;
}

// PATCH handler for updating mb by id
export async function updateMbs(docId: string, data: string) {
  if (!docId) return {};
  const result = await databases.updateDocument(
    `${dbId}`, // databaseId
    `${mbsCollId}`, // collectionId
    `${docId}`, // documentId
    data // data (optional)
  );

  return result;
}

export async function deleteMbs(docId: string) {
  if (!docId) return {};
  const result = await databases.deleteDocument(
    `${dbId}`, // databaseId
    `${mbsCollId}`, // collectionId
    `${docId}` // documentId
  );
}

//Get handler for all items of a specific mb
export async function getAllItems(docId: string) {
  const { documents } = await databases.listDocuments(
    `${dbId}`, // databaseId
    `${itemsCollectionId}`, // collectionId
    [
      Query.select(["day", "isActivated", "$id"]), //select specific columns from db
      Query.equal("mbs", [docId]), //query for items
    ]
  );
  return documents;
}

//POST handler for creating item of new mb
export async function createNewItem(data: string) {
  const result = await databases.createDocument(
    `${dbId}`, // databaseId
    `${itemsCollectionId}`, // collectionId
    ID.unique(), // documentId
    data
  );

  return result;
}

export async function addItem(data: string) {
  const result = await databases.createDocument(
    `${dbId}`, // databaseId
    `${itemsCollectionId}`, // collectionId
    ID.unique(), // documentId
    data
  );

  return result;
}

export async function updateItem(docId: string, data: string) {
  if (!docId) return {};
  const result = await databases.updateDocument(
    `${dbId}`, // databaseId
    `${itemsCollectionId}`, // collectionId
    `${docId}`, // documentId
    data // data (optional)
  );

  return result;
}

export async function deleteItem(docId: string) {
  if (!docId) return {};
  const result = await databases.deleteDocument(
    `${dbId}`, // databaseId
    `${itemsCollectionId}`, // collectionId
    `${docId}` // documentId
  );
}
