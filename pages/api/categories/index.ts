import type { NextApiRequest, NextApiResponse } from "next";
import type { CategoryDto, ErrorDto } from "../../../types";

import { prisma } from "../../../app/util";

const selectFields = {
  id: true,
  name: true,
  products: {
    select: {
      id: true,
      image: true,
      description: true,
      name: true,
      price: true,
      slug: true
    }
  }
};

const getCategoriesWithProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | CategoryDto[]>
) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  try {
    const categories = await prisma.category.findMany({
      where: {
        products: { some: {} }
      },
      select: selectFields,
      orderBy: {
        name: "asc"
      }
    });
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getCategoriesWithProducts;
