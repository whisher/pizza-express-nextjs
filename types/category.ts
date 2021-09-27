import { ProductDto } from "./product";
export interface CategoryWithProductsDto {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  products: ProductDto[];
}
