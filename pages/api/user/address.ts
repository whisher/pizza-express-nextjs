import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto } from "../../../types";
import { getSession } from "next-auth/client";
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
    const session = await getSession({ req });
    if (!session || !session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const email = session.user.email as string;
    const user = await prisma.user.findUnique({
      where: {
        email
      },
      select: selectFields
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { id } = user;
    const userRequest = req.body;
    const userAddress = { userId: id, ...userRequest };
    const address = await prisma.userAddresses.create({ data: userAddress });
    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default userAddresss;
