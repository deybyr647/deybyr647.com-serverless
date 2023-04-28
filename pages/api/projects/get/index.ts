// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCollection } from "@/util/mongo-util";
import { Project } from "@/util/Project";

const getAllProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const documents: Project[] = await getCollection("projects");
  res.status(200).json(documents);
};

export default getAllProjects;
