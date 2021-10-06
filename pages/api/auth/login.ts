import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, UserResponseDto } from "../../../types";

import { comparePassword, prisma } from "../../../util";

const userLogin = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | UserResponseDto>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { email, password } = req.body;
  try {
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
      id: user.id,
      email: user.email
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." });
  }
};

export default userLogin;
