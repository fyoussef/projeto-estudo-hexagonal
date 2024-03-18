import { SubscriptionDto } from "../dtos/subscription";
import { ISubscriptionRepository } from "../repositories/subscription-repository";

export class HasProductEvent {
  constructor(private readonly subscription: ISubscriptionRepository) {}

  async execute(input: Omit<SubscriptionDto, "products">) {
    await this.subscription.add(input);
  }
}
