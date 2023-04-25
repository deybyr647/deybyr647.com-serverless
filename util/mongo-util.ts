import client from "@/util/mongo-config";
import { Collection } from "mongodb";
import { Project } from "./Project";

const dbName: string = "deybyr647-v4";
const db = client.db(dbName);

const getCollection = async (collectionName: string) => {
  await client.connect();
  const collection: Collection<Document> = db.collection(collectionName);
  const documents: unknown = await collection.find().toArray();
  await client.close();

  return documents as Project[];
};

export { getCollection };
