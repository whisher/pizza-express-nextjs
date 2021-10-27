import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, ProductDto } from "../../../types";

import { prisma } from "../../../app/util";

const selectFields = {
  description: true,
  id: true,
  image: true,
  name: true,
  price: true,
  slug: true
};

const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | ProductDto[]>
) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const products = await prisma.product.findMany({
    orderBy: {
      name: "asc"
    },
    select: selectFields
  });

  return res.status(200).json(products);
};

export default getProducts;
