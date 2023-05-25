// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCollection } from "@/util/mongo-util";
import { Project } from "@/util/Project";

export default async (req: NextApiRequest, res: NextApiResponse<Project[]>) => {
  const { body, method, query } = req;

  switch (method) {
    case "GET": {
      const allProjects: Project[] = await getCollection("projects");
      return res.status(200).json(allProjects);
    }

    default: {
      return res.status(405).end();
    }
  }
};
