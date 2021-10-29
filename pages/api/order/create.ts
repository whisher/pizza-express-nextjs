import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, OrderProductDto } from "../../../types";
import { getSession } from "next-auth/client";

import prisma from "../../../app/util/prisma";

const selectUserFields = {
  id: true
};
const createOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | OrderProductDto[]>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const stripeIntent = req?.body?.stripeIntent;
    if (!stripeIntent) {
      return res
        .status(422)
        .json({ message: "The stripe intent can't be empty" });
    }
    const cart = req?.body?.cart || {};

    const productIds = Object.keys(cart);

    if (productIds.length === 0) {
      return res.status(422).json({ message: "The Cart can't be empty" });
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

    const order = await prisma.userOrder.create({
      data: { userId, stripeIntent }
    });

    const orderProducts = productIds.map((productId) => {
      const data = { orderId: order.id, productId };
      const orders = prisma.userOrderProduct.create({
        data
      });
      return orders;
    });
    const orderProductsAll = await Promise.all(orderProducts);
    return res.status(200).json(orderProductsAll);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." });
  }
};

export default createOrder;
