import { SubscriptionDto } from "@/src/domain/dtos/subscription";
import { CreateSubscription } from "@/src/domain/use-cases/create-subscription";
import { MariaDbAdapter } from "@/src/infra/adapters/mariadb-adapter";
import { ProductRepository } from "@/src/infra/repositories/product-repository";
import { SubscriptionRepository } from "@/src/infra/repositories/subscription-repository";

export class CreateSubscriptionFactory {
  async execute(
    input: Omit<SubscriptionDto, "id" | "price">
  ): Promise<Omit<SubscriptionDto, "products">> {
    const connection = new MariaDbAdapter();
    const productRepository = new ProductRepository(connection);
    const subscriptionRepository = new SubscriptionRepository(connection);
    const createSubscription = new CreateSubscription(
      productRepository,
      subscriptionRepository
    );
    return createSubscription.execute(input);
  }
}
