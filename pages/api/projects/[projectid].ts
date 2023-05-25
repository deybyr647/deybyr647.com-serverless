// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getDocument, modifyDocument } from "@/util/mongo-util";
import { Project } from "@/util/Project";

export default async (req: NextApiRequest, res: NextApiResponse<Project>) => {
  const { body, method, query } = req;

  switch (method) {
    case "GET": {
      try {
        const project: Project = await getDocument(query.projectid as string);
        return res.status(200).json(project);
      } catch (e) {
        console.error(e);
        return res.status(500).end();
      }
    }

    case "PUT": {
      const { github, name, image, logo, demo, tagline, description, tags } =
        body;

      const newData: Project = {
        github,
        name,
        image,
        logo,
        demo,
        tagline,
        description,
        tags,
      };

      try {
        const project: Project = await modifyDocument(
          query.projectid as string,
          newData
        );

        return res.status(200).json(project);
      } catch (e) {
        console.error(e);
        return res.status(500).end();
      }
    }

    default: {
      return res.status(405).end();
    }
  }
};
