// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCollection } from "@/util/mongo-util";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const documents = await getCollection("projects");
  const firstDocument = documents[0];
  console.log(firstDocument);

  res.status(200).json(firstDocument);
};

export default handler;
