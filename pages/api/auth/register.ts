import { Prisma as PrismaOrm } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, UserRegisterResponseDto } from "../../../types";
import { getSession } from "next-auth/client";

import prisma from "../../../util/prisma";
import { hashPassword } from "../../../util/auth";

const userRegister = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | Omit<UserRegisterResponseDto, "id">>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const session = await getSession({ req });
    if (session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = req.body;

    user.password = await hashPassword(user.password);

    const { email } = await prisma.user.create({ data: user });

    return res.status(200).json({ email });
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
