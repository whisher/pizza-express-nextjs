import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto } from "../../../types";
import type { UserAddressResponseDto } from "../../../types";

import { getSession } from "next-auth/client";
import { prisma } from "../../../app/util";

const selectUserFields = {
  id: true
};

const selectUserAddressFields = {
  id: true,
  firstname: true,
  lastname: true,
  street: true,
  city: true
};

const userAddress = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | UserAddressResponseDto | null>
) => {
  if (req.method !== "GET") {
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
      select: selectUserFields
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { id: userId } = user;

    const address = await prisma.userAddresses.findFirst({
      where: {
        userId
      },
      select: selectUserAddressFields
    });
    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default userAddress;
