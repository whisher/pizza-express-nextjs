import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import type { UserLoginRequestDto } from "../../../types";
import axios from "../../../app/util/axios";

const sendLogin = async (data: UserLoginRequestDto) => {
  return await axios.post("/api/auth/login", data);
};

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const data: UserLoginRequestDto = { email, password };
          const user = await sendLogin(data);
          const userData = await user.data;
          return userData;
        } catch (error) {
          return null;
        }
      }
    })
  ]
});
