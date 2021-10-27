import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto } from "../../../types";
import type { UserAddressResponseDto } from "../../../types";
import { getSession } from "next-auth/client";
import { prisma } from "../../../app/util";

const selectFields = {
  id: true
};

const userAddressUpdate = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | UserAddressResponseDto>
) => {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const session = await getSession({ req });
    if (!session || !session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id, ...userAddress } = req.body;
    const updateUser = await prisma.userAddresses.update({
      where: {
        id
      },
      data: userAddress
    });

    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default userAddressUpdate;
