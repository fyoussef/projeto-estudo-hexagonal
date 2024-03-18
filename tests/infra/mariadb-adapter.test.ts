import { MariaDbAdapter } from "@/src/infra/adapters/mariadb-adapter";
import { describe, expect, it } from "vitest";

describe("MariaDbAdapter", () => {
  it("should adapter return products model data", async () => {
    const sut = new MariaDbAdapter();
    const product = await sut.find("products");
    expect(Array.isArray(product)).toBeTruthy();
    if (product.length > 0) {
      expect(Object.keys(product[0])).toHaveLength(4);
    }
  });
});
