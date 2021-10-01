export interface CategoryDto {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
}
export type CategoryWithProductsDto = CategoryDto & {
  products: ProductDto[];
};
export interface ProductDto {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  category?: CategoryDto;
  description?: string;
  image: string;
  name: string;
  price: number;
  slug: string;
}
