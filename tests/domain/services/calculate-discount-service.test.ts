import { Product } from "@/src/domain/entities/product";
import { CalculateDiscountService } from "@/src/domain/services/calculate-discount-service";
import { describe, expect, it } from "vitest";

describe("Calculate Discount", () => {
  const makeProducts = (a: number, b: number, c: number) => {
    return [
      new Product(1, "P1", a),
      new Product(1, "P1", b),
      new Product(1, "P1", c),
    ];
  };

  it("should calculate product discount", () => {
    const sut = new CalculateDiscountService();
    const products = makeProducts(10, 15, 25);
    const total = sut.execute(products);
    expect(total).toBe(45);
    const products2 = makeProducts(20, 25, 50);
    const total2 = sut.execute(products2);
    expect(total2).toBe(85.5);
  });
});
