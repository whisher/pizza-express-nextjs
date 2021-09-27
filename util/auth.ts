import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const generateJWT = async (userId: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("No JWT_SECRET. Set it in .env file");
  }
  const token = await jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string
  );
  return token;
};
