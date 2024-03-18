import { SubscriptionDto } from "../dtos/subscription";
import { HasProductEvent } from "../events/has-product-event";
import { IProductRepository } from "../repositories/product-repository";
import { ISubscriptionRepository } from "../repositories/subscription-repository";
import { CalculateDiscountService } from "../services/calculate-discount-service";

export class CreateSubscription {
  constructor(
    private readonly productRepository: IProductRepository,
    private readonly subscriptionRepository: ISubscriptionRepository
  ) {}

  async execute(
    input: Omit<SubscriptionDto, "id" | "price">
  ): Promise<Omit<SubscriptionDto, "products">> {
    const products = await this.productRepository.findById(input.products);
    const currentId = await this.subscriptionRepository.currentId();
    const subscriptionId = currentId + 1;
    let comboList: Omit<SubscriptionDto, "products"> = {
      id: subscriptionId,
      price: products[0].price,
      userId: input.userId,
    };
    const isCombo = products.length > 1;
    if (isCombo) {
      const totalWithDiscount = new CalculateDiscountService().execute(
        products
      );
      comboList = {
        id: subscriptionId,
        price: totalWithDiscount * 100,
        userId: input.userId,
      };
    }
    const hasProductEvent = new HasProductEvent(this.subscriptionRepository);
    await hasProductEvent.execute(comboList);
    const [subscriptions] = await this.subscriptionRepository.list(
      subscriptionId
    );
    return { ...subscriptions, price: subscriptions.price / 100 };
  }
}
