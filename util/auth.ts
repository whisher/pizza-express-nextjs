import bcrypt from "bcryptjs";

export const comparePassword = async (
  password: string,
  userPassword: string
) => {
  return bcrypt.compare(password, userPassword);
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
