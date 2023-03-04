import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://api.supermomos-dev.com/interview/social",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );
      const jsonResponse = await response.json();

      return res.json(jsonResponse);
    } catch (error) {
      return res.status(400).json({ message: "Fetch Error" });
    }
  }
};

export default handler;
