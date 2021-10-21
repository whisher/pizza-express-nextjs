import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, UserLoginResponseDto } from "../../../types";
import { getSession } from "next-auth/client";

import { comparePassword, prisma } from "../../../util";

const userLogin = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | UserLoginResponseDto>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const session = await getSession({ req });
    if (session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "You have entered an invalid username or password" });
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: "You have entered an invalid username or password" });
    }

    return res.status(200).json({
      email: user.email
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." });
  }
};

export default userLogin;
