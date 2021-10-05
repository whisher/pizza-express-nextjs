import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, NotFoundDto, ProductDto } from "../../../types";

import { prisma } from "../../../util";

const selectFields = {
  category: true,
  description: true,
  id: true,
  image: true,
  name: true,
  price: true,
  slug: true
};

const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | NotFoundDto | ProductDto>
) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  const { slug } = req.query;
  if (slug && typeof slug === "string") {
    const product = await prisma.product.findUnique({
      where: {
        slug: slug
      },
      select: selectFields
    });
    if (product) {
      return res.status(200).json(product);
    }
  }

  return res.status(404).json({ message: "Not Found" });
};

export default getProducts;
