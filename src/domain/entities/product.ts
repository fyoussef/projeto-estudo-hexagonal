import { ProductDto } from "../dtos/product";

export class Product {
  private readonly createdAt = new Date();

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number
  ) {}

  getProduct(): ProductDto {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      createdAt: this.createdAt,
    };
  }
}
