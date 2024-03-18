import { ProductDto } from "@/src/domain/dtos/product";
import { IProductRepository } from "@/src/domain/repositories/product-repository";
import { Connection } from "../contracts/connection";

export class ProductRepository implements IProductRepository {
  constructor(private readonly connection: Connection) {}

  async findById(id: string | string[]): Promise<ProductDto[]> {
    return await this.connection.find("products", { id });
  }

  async currentId(): Promise<number> {
    const data = await this.connection.find("products");
    return data[0].id;
  }
}
