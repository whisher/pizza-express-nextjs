import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto } from "../../../types";

import { prisma } from "../../../util";

const selectFields = {
  id: true
};

const userAddresss = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | any>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  try {
    const email = req.body.email;
    const user = await prisma.user.findUnique({
      where: {
        email: email
      },
      select: selectFields
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default userAddresss;
