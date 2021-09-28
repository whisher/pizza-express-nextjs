export interface ProductDto {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  image: string;
  name: string;
  price: number;
  slug: string;
}
