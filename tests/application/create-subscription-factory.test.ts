import { CreateSubscriptionFactory } from "@/src/application/factories/create-subscription-factory";
import { describe, expect, it } from "vitest";

describe("CreateSubscriptionFactory", () => {
  it("should create subscription", async () => {
    const sut = new CreateSubscriptionFactory();
    const data = await sut.execute({
      products: ["1", "2", "3"],
      userId: "1",
    });
    const expected = {
      id: 1,
      userId: 1,
      price: 63,
      createdAt: new Date("2024-03-18T19:31:02"),
    };
    data.id = 1;
    data.createdAt = new Date("2024-03-18T19:31:02");
    expect(data).toEqual(expected);
  });
});
