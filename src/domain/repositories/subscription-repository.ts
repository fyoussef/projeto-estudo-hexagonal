import { SubscriptionDto } from "../dtos/subscription";

export interface ISubscriptionRepository {
  list(id: number): Promise<Omit<SubscriptionDto[], "products">>;
  add(subscription: Omit<SubscriptionDto, "products">): Promise<void>;
  currentId(): Promise<number>;
}
