import { describe, expect, it } from "vitest";
import { Product } from "../../../src/domain/entities/product";

describe("Product", () => {
  it("should return product correctly", () => {
    const product = new Product(1, "Produto 1", 20);
    const sut = product.getProduct();
    expect(sut).toHaveProperty("id");
    expect(sut).toHaveProperty("name");
    expect(sut).toHaveProperty("price");
    expect(sut).toHaveProperty("createdAt");
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});
