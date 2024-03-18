import { SubscriptionDto } from "@/src/domain/dtos/subscription";
import { ISubscriptionRepository } from "@/src/domain/repositories/subscription-repository";
import { Connection } from "../contracts/connection";

export class SubscriptionRepository implements ISubscriptionRepository {
  constructor(private connection: Connection) {}

  async list(id: number): Promise<Omit<SubscriptionDto[], "products">> {
    return this.connection.find("subscriptions");
  }

  add(input: Omit<SubscriptionDto, "products">): Promise<void> {
    return this.connection.insert("subscriptions", input);
  }

  async currentId(): Promise<number> {
    const data = await this.connection.find("subscriptions");
    return data[0].id;
  }
}
