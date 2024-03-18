import { ProductDto } from "@/src/domain/dtos/product";
import { SubscriptionDto } from "@/src/domain/dtos/subscription";
import { IProductRepository } from "@/src/domain/repositories/product-repository";
import { ISubscriptionRepository } from "@/src/domain/repositories/subscription-repository";
import { CreateSubscription } from "@/src/domain/use-cases/create-subscription";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("CreateSubscription", () => {
  let productRepository: IProductRepository;
  let subscriptionRepository: ISubscriptionRepository;
  let sut: CreateSubscription;
  beforeEach(() => {
    productRepository = {
      findById: vi.fn(),
      currentId: vi.fn(),
    };
    subscriptionRepository = {
      list: vi.fn(),
      add: vi.fn(),
      currentId: vi.fn(),
    };
    sut = new CreateSubscription(productRepository, subscriptionRepository);
  });
  const expected = {
    id: 1,
    price: 20,
    userId: "1",
    createdAt: new Date("2024-03-18T10:00:00"),
  } as SubscriptionDto;
  it("should create subscription", async () => {
    const productMock = vi
      .spyOn(productRepository, "findById")
      .mockImplementationOnce(
        async () =>
          [
            {
              id: 1,
              price: 20,
              createdAt: new Date("2024-03-18T10:00:00"),
              name: "Product",
            },
          ] as ProductDto[]
      );
    const addSignatureMock = vi.spyOn(subscriptionRepository, "add");
    const listSignatureMock = vi
      .spyOn(subscriptionRepository, "list")
      .mockImplementationOnce(async () => [
        {
          id: 1,
          price: 2000,
          userId: "1",
          createdAt: new Date("2024-03-18T10:00:00"),
        } as SubscriptionDto,
      ]);

    const result = await sut.execute({
      userId: "1",
      products: ["1"],
    });

    expect(productMock).toHaveBeenCalledOnce();
    expect(addSignatureMock).toHaveBeenCalledOnce();
    expect(listSignatureMock).toHaveBeenCalledOnce();
    expect(result).toEqual(expected);
  });
});
