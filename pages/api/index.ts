// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    name: "Deyby Rodriguez",
  });
};

export default handler;
