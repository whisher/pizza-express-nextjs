import { useState, useEffect } from "react";
import type { CategoryWithProductsDto, ProductDto } from "../../../types";

export type CategoriesWithProductsDto = { [key: string]: ProductDto[] };

const dataBuilder = (
  data: CategoryWithProductsDto[]
): CategoriesWithProductsDto | undefined => {
  if (data.length > 0) {
    const reducer = (
      acc: CategoriesWithProductsDto,
      current: CategoryWithProductsDto
    ) => {
      acc[current.name] = current.products;
      return acc;
    };
    return data.reduce(reducer, {});
  }
  return undefined;
};

const useCategoryWithProducts = (data: CategoryWithProductsDto[]) => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const categoriesWithProducts = dataBuilder(data);
  const categories = categoriesWithProducts
    ? Object.keys(categoriesWithProducts)
    : [];

  useEffect(() => {
    if (categoriesWithProducts && categories.length > 0) {
      setProducts(categoriesWithProducts[categories[0]]);
    }
    // eslint-disable-next-line
  }, []);

  const getFilterProducts = (name: string) => {
    if (categoriesWithProducts) {
      const current = categoriesWithProducts[name];
      setProducts(current);
    }
  };

  return { categories, getFilterProducts, products };
};

export { useCategoryWithProducts };
