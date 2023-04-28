import client from "@/util/mongo-config";
import { Collection, ObjectId } from "mongodb";
import { Project } from "./Project";

const db = client.db("deybyr647-v4");

const getCollection = async (collectionName: string): Promise<Project[]> => {
  await client.connect();
  const collection: Collection<Document> = db.collection(collectionName);
  const documents: unknown = await collection.find().toArray();
  await client.close();

  return documents as Project[];
};

const getProject = async (projectID: string): Promise<Project> => {
  await client.connect();
  const collection: Collection<Document> = db.collection("projects");

  const document: unknown = await collection.findOne({
    _id: new ObjectId(projectID),
  });

  await client.close();

  return document as Project;
};

export { getCollection, getProject };
