// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getProject } from "@/util/mongo-util";
import { Project } from "@/util/Project";

const getAllProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const document: Project = await getProject(req.query.projectid as string);
  res.status(200).json(document);
};

export default getAllProjects;
