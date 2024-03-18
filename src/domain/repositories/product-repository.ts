import { ProductDto } from "../dtos/product";

export interface IProductRepository {
  findById(id: string | string[]): Promise<ProductDto[]>;
  currentId(): Promise<number>;
}
