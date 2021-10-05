import { Prisma as PrismaOrm } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, UserResponseDto } from "../../../types";

import prisma from "../../../util/prisma";
import { hashPassword } from "../../../util/auth";

const userRegister = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | UserResponseDto>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const user = req.body;
    user.password = await hashPassword(user.password);

    const { id, email } = await prisma.user.create({ data: user });

    return res.status(200).json({ id, email });
  } catch (error) {
    if (error instanceof PrismaOrm.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(200).json({ message: "Account already exists." });
      }
    }
    return res.status(400).json({ message: "Something went wrong." });
  }
};

export default userRegister;
