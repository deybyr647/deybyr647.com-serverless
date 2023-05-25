import client from "@/util/mongo-config";
import { Collection, ObjectId, UpdateResult } from "mongodb";
import { Project } from "./Project";

const db = client.db("deybyr647-v4");

const getCollection = async (collectionName: string): Promise<Project[]> => {
  await client.connect();
  const collection: Collection<Document> = db.collection(collectionName);
  const documents: unknown = await collection.find().toArray();
  await client.close();

  return documents as Project[];
};

const getDocument = async (id: string): Promise<Project> => {
  await client.connect();
  const collection: Collection<Document> = db.collection("projects");

  const document: unknown = await collection.findOne({
    _id: new ObjectId(id),
  });

  await client.close();

  if (!document) throw new Error("Project not found");

  return document as Project;
};

const modifyDocument = async (id: string, data: Project): Promise<Project> => {
  await client.connect();
  const collection: Collection<Document> = db.collection("projects");

  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const dataUpdate = {
    $set: {
      ...data,
    },
  };

  const result: UpdateResult<Document> = await collection.updateOne(
    filter,
    dataUpdate,
    options
  );

  await client.close();

  return result as unknown as Project;
};

export { getCollection, getDocument, modifyDocument };
